import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,

    paddingRight: 15.2,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
  },
  button: {
    width: 81.8,
    height: 40,
  },
  chipView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 54,
  },
  chipStyles: {
    marginRight: 10,
    borderColor: "rgba(240, 241, 250, 1)",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  chipViewTwo: {
    flexDirection: "row",
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 54,
  },
  text: {
    paddingLeft: 24.5,
    fontSize: 14,
    fontWeight: "600",
    paddingBottom: 8,
    paddingTop: 15,
  },
  saveButton: {
    marginLeft: 18,
    marginRight: 15,
    marginTop: 15,
    width: 345,
    height: 48,
    color: "rgba(255, 179, 182, 1)",
  },
  buttonLabel: {
    fontSize: 16,
  },
});

export default styles;
