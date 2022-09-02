import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TestComp from "./components/test";
// import MyTabs from "./components/bottomNav";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/home";
import SettingCo from "./components/Search/search";
import Search from "./components/Search/search";
import NewsView from "./components/NewsView/newsView";
import NotificationView from "./components/Notifications/notificationsView";
// import Card from "./components/carouselCard";
import Icon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: 66,
          width: 289,
          left: 43,
          top: 706,
          borderRadius: 32,

          justify: "space-between",
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: "rgba(255, 128, 134, 1)",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MCIcon name="home-outline" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "rgba(255, 128, 134, 1)",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NewsView"
        component={NewsView}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "rgba(255, 128, 134, 1)",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="tag-faces" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  let handlePress = 0;
  const [newText, setText] = useState("Hello");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewsView"
          component={NewsView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
