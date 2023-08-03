import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	TouchableWithoutFeedback,
	ImageBackground,
} from "react-native";

export default function Registration() {
	const [focusLogin, setFocusLogin] = useState(false);
	const [focusEmail, setFocusEmail] = useState(false);
	const [focusPassword, setFocusPassword] = useState(false);
	const [isPasswordSecure, setIsPasswordSecure] = useState(true);

	return (
		<View>
			<ImageBackground
				source={require("../../assets/photo.png")}
				style={styles.image}
			>
				<Image source={require("../../assets/Empty.png")} style={styles.img} />
				<Ionicons
					name="add-circle-outline"
					size={25}
					color="rgba(255 108 0/ 1)"
					style={styles.iconAdd}
				/>
				<View style={styles.formWrapper}>
					<Text style={styles.text}>Реєстрація</Text>
					<TextInput
						style={{
							...styles.input,
							borderColor: focusLogin ? "#FF6C00" : "#E8E8E8",
						}}
						placeholder="Логін"
						onFocus={() => setFocusLogin(true)}
						onBlur={() => setFocusLogin(false)}
					/>
					<TextInput
						style={{
							...styles.input,
							borderColor: focusEmail ? "#FF6C00" : "#E8E8E8",
						}}
						placeholder="Адреса електронної пошти"
						onFocus={() => setFocusEmail(true)}
						onBlur={() => setFocusEmail(false)}
					/>
					<TextInput
						style={{
							...styles.input,
							borderColor: focusPassword ? "#FF6C00" : "#E8E8E8",
						}}
						placeholder="Пароль"
						onFocus={() => setFocusPassword(true)}
						onBlur={() => setFocusPassword(false)}
						secureTextEntry={isPasswordSecure}
					/>
					<TouchableWithoutFeedback
						onPress={() => {
							isPasswordSecure
								? setIsPasswordSecure(false)
								: setIsPasswordSecure(true);
						}}
					>
						<Text style={styles.textInInput}>Показати</Text>
					</TouchableWithoutFeedback>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.ButtonText}>Зареєструватися</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.textAccount}>Вже є акаунт? Увійти</Text>
					</TouchableOpacity>
					<Image
						source={require("../../assets/indicator.png")}
						style={styles.indicator}
					/>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	textAccount: {
		fontFamily: "R-400",
		fontSize: 16,
		color: "rgba(27 67 113/ 1)",
		textAlign: "center",
		marginTop: 15,
	},
	iconAdd: {
		top: 180,
		left: 235,
		zIndex: 2,
	},
	indicator: {
		alignSelf: "center",
		top: "8%",
	},
	formWrapper: {
		backgroundColor: "rgba(255 255 255/ 1)",
		borderTopStartRadius: 25,
		borderTopEndRadius: 25,
		height: 549,
		marginTop: 140,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	text: {
		marginTop: 100,
		marginBottom: 20,
		color: "rgba(33 33 33/ 1)",
		textAlign: "center",
		fontFamily: "R-500",
		fontSize: 30,
	},
	input: {
		fontFamily: "R-400",
		width: 343,
		height: 50,
		backgroundColor: "rgba(246 246 246/ 1)",
		borderWidth: 1,

		borderRadius: 6,
		fontSize: 16,
		marginBottom: 15,
		marginLeft: 16,
		marginRight: 16,
		paddingLeft: 10,
	},
	button: {
		fontFamily: "R-400",
		backgroundColor: "rgba(255 108 0/ 1)",
		width: 343,
		height: 51,
		paddingTop: 16,
		paddingRight: 32,
		paddingBottom: 16,
		paddingLeft: 32,
		marginLeft: 16,
		borderRadius: 100,
		marginTop: 20,
		marginBottom: 10,
		alignItems: "center",
	},
	ButtonText: {
		color: "rgba(255 255 255/ 1)",
		fontSize: 16,
	},
	img: {
		width: 120,
		height: 120,
		borderRadius: 16,
		left: "35%",
		top: "25%",
		zIndex: 1,
	},
	textInInput: {
		fontFamily: "R-400",
		fontSize: 16,
		color: "rgba(27 67 113/1)",
		top: "-9%",
		left: "70%",
	},
});
