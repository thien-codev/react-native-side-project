import React, { useState } from "react";
import {
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const HomePage = ({ navigation }: any) => {
  const [title, setTitle] = useState("I am Thiện. Nice to meet you!");
  const changeTitle = () => {
    setTitle("I am Thiện. Nice to meet you! (Changed)");
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.containerBody}>
          <View style={styles.view1}>
            <Button
              title="Youtube"
              onPress={() => Linking.openURL("https://youtube.com")}
            />
            <Button title="Change title" onPress={changeTitle} />
          </View>
          <View style={styles.view2}>
            <Button
              title="Youtube"
              onPress={() => Linking.openURL("https://youtube.com")}
            />
            <Button
              title="open Flat list Demo"
              onPress={() => navigation.navigate("FlatListPage")}
            />
          </View>
          <View style={styles.view3}>
            <Button
              title="open Flexbox Demo"
              onPress={() => navigation.navigate("FlexboxDemo")}
            />
            <Button
              title="open List demo"
              onPress={() => navigation.navigate("ListPage")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerBody: {
    flex: 1,
    height: 500,
    backgroundColor: "grey",
    justifyContent: "center",
  },
  view1: {
    height: 100,
    backgroundColor: "red",
  },
  view2: {
    height: 100,
    backgroundColor: "yellow",
  },
  view3: {
    height: 100,
    backgroundColor: "blue",
  },
});
