import React, { Component } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function CarouselCard(props) {
  return (
    <View
      style={{
        width: 321,
        height: 240,
        borderRadius: 8,
      }}
    >
      {props.children}
    </View>
  );
}
