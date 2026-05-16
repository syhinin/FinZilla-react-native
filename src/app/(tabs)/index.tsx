import { Tabs } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import { ExpenseSummary, Header } from "@/components";

export default function Index() {
  return (
    <>
      <Tabs.Screen options={{ headerShown: true , header: () => <Header /> }} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ExpenseSummary />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  
    //_________TEMPORARY BORDER TO CHECK LAYOUT________//
    // borderWidth: 1,
    // borderColor: COLORS.white,
  },
});
