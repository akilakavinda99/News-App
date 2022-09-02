import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  selectedChip: {
    borderRadius: 16,
    backgroundColor: "rgba(255, 179, 182, 1)",
    marginRight: 8,
  },
  notSelectedChip: {
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginRight: 8,
    borderColor: "rgba(240, 241, 250, 1)",
    borderWidth: 1,
  },
  scrollView: { marginTop: 24, marginBottom: 16 },
});

export default styles;
