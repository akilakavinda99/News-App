import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
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

export default styles;
