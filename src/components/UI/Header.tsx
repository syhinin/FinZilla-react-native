import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../../utils/constants/colors";

export function Header() {
  const handleShowTransactions = () => {
    console.log("hello");
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.userInfoWrapper}>
          <Image style={styles.logo} source={require("@/images/logo.jpg")} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hi, Alex</Text>
            <Text style={styles.subText}>
              Your <Text style={styles.textBold}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleShowTransactions}
        >
          <Text style={styles.text}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLORS.black,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: COLORS.black,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 1,
    marginLeft: 10,
  },
  button: {
    borderRadius: 10,
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    backgroundColor: COLORS.black,
  },
  text: {
    color: COLORS.white,
    fontSize: 12,
  },
  subText: {
    color: COLORS.white,
    fontSize: 16,
  },
  textBold: {
    fontWeight: "bold",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
