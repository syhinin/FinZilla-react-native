import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/constants/colors";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
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
