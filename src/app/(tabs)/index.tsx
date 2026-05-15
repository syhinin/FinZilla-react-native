import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>FinZilla</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal: 20,
  },
});
