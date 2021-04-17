import React from "react";
import { StyleSheet, View } from "react-native";
import Search from "./Search";

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
