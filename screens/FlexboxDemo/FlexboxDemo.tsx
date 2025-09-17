import { StyleSheet, View } from "react-native";

export const FlexboxDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box11}></View>
        <View style={styles.box12}></View>
        <View style={styles.box13}></View>
      </View>
      <View style={styles.box2}>
        <View style={styles.box21}></View>
        <View style={styles.box22}></View>
      </View>
      <View style={styles.box3}>
        <View style={styles.box31}></View>
        <View style={styles.box32}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#F5FCFF",
  },
  box1: {
    flex: 1,
    flexDirection: "row",
  },
  box11: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
  },
  box12: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "pink",
  },
  box13: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "mint",
  },
  box2: {
    flex: 2,
    flexDirection: "column",
  },
  box21: {
    flex: 1,
    backgroundColor: "yellow",
  },
  box22: {
    flex: 1,
    backgroundColor: "green",
  },
  box3: {
    flex: 6,
    flexDirection: "row",
  },
  box31: {
    flex: 1,
    backgroundColor: "blue",
  },
  box32: {
    flex: 1,
    backgroundColor: "black",
  },
});
