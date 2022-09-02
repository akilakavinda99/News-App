import React, { useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import ChipCardView from "../chipCardView";
import SearchChips from "./searchChips";
import styles from "./Styles/searchStyles";
import RBSheet from "react-native-raw-bottom-sheet";
import SearchFilters from "./SearchFilters/searchFilters";
export default function Search() {
  const refRBSheet = useRef();
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        // padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 35,
        }}
      >
        <View style={styles.searchSection}>
          <TextInput placeholder="Search" style={styles.input}></TextInput>
        </View>
        {/* <Button title="sd" color="rgba(255, 58, 68, 1)"></Button> */}
        {/* <Icon></Icon> */}
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SearchChips refRBSheet={refRBSheet} />
      </View>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
        style={{
          flexDirection: "column",
        }}
      >
        <ChipCardView />
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <SearchFilters />
      </RBSheet>
    </ScrollView>
  );
}
