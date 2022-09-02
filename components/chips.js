import React, { Component } from "react";
import { ScrollView } from "react-native";

import { Chip } from "react-native-paper";

export default function Chips() {
  return (
    <ScrollView
      horizontal={true}
      style={{ marginTop: 24, marginBottom: 16 }}
      showsHorizontalScrollIndicator={false}
    >
      <Chip
        style={{
          borderRadius: 16,
          backgroundColor: "rgba(255, 179, 182, 1)",
          marginRight: 8,
        }}
      >
        Healthy
      </Chip>
      <Chip
        style={{
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 1)",
          marginRight: 8,
          borderColor: "rgba(240, 241, 250, 1)",
          borderWidth: 1,
        }}
      >
        Technology
      </Chip>
      <Chip
        style={{
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 1)",
          marginRight: 8,
          borderColor: "rgba(240, 241, 250, 1)",
          borderWidth: 1,
        }}
      >
        Finance
      </Chip>
      <Chip
        style={{
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 1)",
          marginRight: 8,
          borderColor: "rgba(240, 241, 250, 1)",
          borderWidth: 1,
        }}
      >
        Art
      </Chip>
      <Chip
        style={{
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 1)",
          marginRight: 8,
          borderColor: "rgba(240, 241, 250, 1)",
          borderWidth: 1,
        }}
      >
        Space
      </Chip>
      <Chip
        style={{
          borderRadius: 16,
          backgroundColor: "rgba(255, 179, 182, 1)",
          marginRight: 8,
        }}
      >
        Example Chip
      </Chip>
    </ScrollView>
  );
}
