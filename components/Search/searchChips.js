import React, { Component } from "react";
import { ScrollView } from "react-native";

import { Chip } from "react-native-paper";
import styles from "./Styles/searchChipStyles";

export default function SearchChips(props) {
  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
    >
      <Chip
        style={styles.selectedChip}
        icon="filter"
        onPress={() => props.refRBSheet.current.open()}
      >
        Filter
      </Chip>
      <Chip style={styles.notSelectedChip}>Technology</Chip>
      <Chip style={styles.notSelectedChip}>Finance</Chip>
      <Chip style={styles.notSelectedChip}>Art</Chip>
    </ScrollView>
  );
}
