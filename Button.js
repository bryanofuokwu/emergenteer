import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonBody}>
      <Text style={styles.buttonText}> Fire </Text>;
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: "#00aeef",
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  }
});
export { Button };
