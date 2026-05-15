import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Header from "@/components/UI/Header";
import { COLORS } from "@/constants/colors";

export default function Index() {
  return (
    <>
      <Tabs.Screen options={{ headerShown: true , header: () => <Header /> }} />
      <View style={styles.container}>
        <Text style={styles.text}>FinZilla</Text>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
   text: {
    color: COLORS.white,
    fontSize: 30,
  },
});
