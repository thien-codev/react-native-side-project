import { useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ITEMS = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
];

interface ItemModel {
  id: number;
  name: string;
}

export const ListPage = ({ navigation }: any) => {
  const [items, setItems] = useState<ItemModel[]>([]);
  const [frameHeight, setFrameHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "List of items",
      headerLeft: () => (
        <Button
          title="Refresh"
          onPress={() => {
            const refreshedItems = items.length === 0 ? ITEMS : items;
            showLoading();
            setItems(refreshedItems);
          }}
        />
      ),
      headerRight: () => (
        <Button
          title="Add"
          onPress={() => {
            const newItem = {
              id: items.length + 1,
              name: `Item ${items.length + 1}`,
            };
            setItems([...items, newItem]);
          }}
        />
      ),
    });
  }, [navigation, items]);

  const showLoading = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Done loading
    }, 1000); // Simulate 2-second load

    return () => clearTimeout(timer);
  };

  const renderedItem = (item: ItemModel) => {
    return (
      <Pressable
        key={item.id}
        onPress={() => {
          console.log("Touch cancelled");
          navigation.navigate("DetailPage");
        }}
      >
        <View style={styles.item}>
          <Text style={styles.textContent}>{item.name}</Text>
        </View>
      </Pressable>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="grey" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      horizontal={false}
      style={styles.scrollViewContent}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setFrameHeight(height);
      }}
      refreshControl={<RefreshControl refreshing={false}></RefreshControl>}
    >
      {items.length === 0 ? (
        <View style={[styles.notFoundContainer, { height: frameHeight }]}>
          <Text style={styles.notFoundText}>No item found</Text>
        </View>
      ) : (
        items.map((item) => renderedItem(item))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 10,
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 16,
    gap: 8,
  },
  item: {
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "lightgrey",
  },
  textContent: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingBottom: 100,
  },
  notFoundContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  notFoundText: {
    paddingLeft: 10,
    fontSize: 16,
    fontStyle: "italic",
    color: "grey",
  },
});
