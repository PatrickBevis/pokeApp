import { StyleSheet, Text, View } from "react-native";
import Homeview from "./src/pages/HomeView/Home";

const App = () => {
  return (
    <>
      <Homeview />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
