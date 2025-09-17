import { useLayoutEffect, useState } from "react";
import {
  Button,
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ITEMS = [
  {
    title: "section 1",
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ],
  },
  {
    title: "section 2",
    data: [
      { id: 5, name: "Item 5" },
      { id: 6, name: "Item 6" },
      { id: 4, name: "Item 4" },
    ],
  },
  {
    title: "section 3",
    data: [
      { id: 7, name: "Item 11" },
      { id: 8, name: "Item 22" },
      { id: 9, name: "Item 33" },
    ],
  },
  {
    title: "section 4",
    data: [
      { id: 10, name: "Item 15" },
      { id: 11, name: "Item 52" },
      { id: 12, name: "Item 53" },
    ],
  },
];

export const FlatListPage = ({ navigation }: any) => {
  const [sections, setSections] = useState([ITEMS[0]]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, [navigation]);

  const mockFetchData = () => {
    setTimeout(() => {
      if (sections.length === ITEMS.length) {
        return;
      }
      const nextIndex = sections.length < ITEMS.length ? sections.length : 0;
      setSections([...sections, ITEMS[nextIndex]]);
    }, 500);
  };

  return (
    <SectionList
      style={styles.list}
      sections={sections}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={{ fontSize: 26 }}>{item.name}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.headerItem}>
          <Text style={{ fontWeight: "bold", fontSize: 38 }}>{title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            mockFetchData();
          }}
        ></RefreshControl>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 6,
  },
  item: {
    backgroundColor: "mintcream",
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  headerItem: {
    backgroundColor: "lightgreen",
    padding: 10,
    marginHorizontal: 6,
    marginBottom: 6,
    borderRadius: 4,
  },
});
