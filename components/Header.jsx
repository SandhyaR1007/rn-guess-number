import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00b894",
    height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
  },
});
