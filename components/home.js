import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
// import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { IconButton, MD3Colors } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import AdvancedCardCarousel from "./carousel";
import Chips from "./chips";
import ChipCardView from "./chipCardView";

export default function Home({ navigation }) {
  return (
    <ScrollView stickyHeaderIndices={[2]}>
      <View style={{ padding: 20, backgroundColor: "white" }}>
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

          <IconButton
            icon="bell"
            iconColor="white"
            size={20}
            mode="contained"
            style={{
              marginLeft: 20,
            }}
            containerColor="rgba(255, 128, 134, 1)"
            onPress={() => navigation.navigate("Notifications")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              fontStyle: "normal",
            }}
          >
            Latest News
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 12,
                fontStyle: "normal",
                color: "rgba(0, 128, 255, 1)",
              }}
            >
              See All
            </Text>
            <Ionicons
              name="arrow-forward"
              style={{
                marginLeft: 26,

                color: "rgba(0, 128, 255, 1)",
              }}
            ></Ionicons>
          </View>
        </View>

        <Chips />
        <ScrollView>
          <ChipCardView />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,

    backgroundColor: "#fff",
    color: "#424242",
    borderRadius: 10,
    borderColor: "rgba(240, 241, 250, 1)",
    borderWidth: 1,
    padding: 10,
    width: 245,
  },
});
