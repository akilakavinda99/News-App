import React, { Component } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function ChipCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("NewsView")}>
      <View>
        <ImageBackground
          // source={require("../assets/icon.png")}
          source={{
            uri: props.image,
          }}
          imageStyle={{ borderRadius: 8 }}
          resizeMode={"cover"}
          style={{
            width: 345,
            height: 128,
            borderBottomEndRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderBottomStartRadius: 8,
            borderRadius: 40,

            marginTop: 8,
          }}
        >
          <Text style={{ margin: 8, color: "white", fontSize: 14 }}>
            5 things to know about conondrum
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 54,
            }}
          >
            <Text style={{ margin: 8, color: "white" }}>Matt Villiano</Text>
            <Text style={{ margin: 8, color: "white" }}>Sunday,9 May 2021</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}
