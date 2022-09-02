import React, { useRef } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { Button, Chip } from "react-native-paper";
import styles from "./searchFilterStyles";

export default function SearchFilters() {
  return (
    <View>
      <View style={styles.topView}>
        <Text style={styles.header}>Filter</Text>
        <Button icon="delete-outline" mode="outlined" textColor="black">
          Reset
        </Button>
      </View>
      <View>
        <Text style={styles.text}>Sort By</Text>
        <View style={styles.chipView}>
          <Chip style={styles.chipStyles}>Reccomended</Chip>
          <Chip style={styles.chipStyles}>Latest</Chip>
          <Chip style={styles.chipStyles}>Most Viewed</Chip>
        </View>
        <View style={styles.chipViewTwo}>
          <Chip style={styles.chipStyles}>Channel</Chip>
          <Chip style={styles.chipStyles}>Following</Chip>
        </View>
        <Button
          mode="contained"
          style={styles.saveButton}
          buttonColor="rgba(255, 179, 182, 1)"
          labelStyle={styles.buttonLabel}
        >
          SAVE
        </Button>
      </View>
    </View>
  );
}
