import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Registration from "./src/Screens/RegistrationScreen";
// import Login from "./Screens/LoginScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		"R-400": require("./src/fonts/Roboto-Regular.ttf"),
		"R-500": require("./src/fonts/Roboto-Medium.ttf"),
	});
	if (!fontsLoaded) {
		return null;
	}
	return (
		<SafeAreaView style={styles.container}>
			<Registration />
			{/* <Login /> */}
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
