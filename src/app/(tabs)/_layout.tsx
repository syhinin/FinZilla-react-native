import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { COLORS } from "@/constants/colors";
import { StyleSheet, View, useWindowDimensions } from "react-native";

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const tabBarWidth = 200;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.grey,
          position: "absolute",
          bottom: 20,
          marginHorizontal: (width - tabBarWidth) / 2,
          width: tabBarWidth,
          height: 48,
          paddingHorizontal: 4, 
          paddingTop : 4,  
          paddingBottom: 4,       
          borderRadius: 48,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: '#333',
          borderTopColor: '#333',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: '#999',
        
       
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.view , focused && styles.focusedView]}>
              <Ionicons name="pie-chart-outline" size={18} color={color} />
            </View>
          ),
        }}
      />
       <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.view , focused && styles.focusedView]}>
                <Ionicons name="wallet-outline" size={18} color={color} />
              </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.view , focused && styles.focusedView]}>
                <Ionicons name="person-outline" size={18} color={color} />
              </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  view: {
    borderRadius: 40,
    height : 30,
    width : 30,
    alignItems: "center",
    justifyContent: "center",
  },
  focusedView: {
    backgroundColor: COLORS.tintColor,
  },
});