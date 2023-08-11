import React, { useState } from "react";

import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";

export default function FormLogin() {
	const [focusEmail, setFocusEmail] = useState(false);
	const [focusPassword, setFocusPassword] = useState(false);
	const [isPasswordSecure, setIsPasswordSecure] = useState(true);

	return (
		<View>
			<View>
				<Text style={styles.text}>Увійти</Text>
			</View>

			<TextInput
				style={{
					...styles.input,
					borderColor: focusEmail ? "#FF6C00" : "#E8E8E8",
					backgroundColor: focusEmail ? "#fff" : "rgba(246 246 246/ 1)",
				}}
				placeholder="Адреса електронної пошти"
				onFocus={() => setFocusEmail(true)}
				onBlur={() => setFocusEmail(false)}
			/>
			<TextInput
				style={{
					...styles.input,
					borderColor: focusPassword ? "#FF6C00" : "#E8E8E8",
					backgroundColor: focusPassword ? "#fff" : "rgba(246 246 246/ 1)",
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
				<Text style={styles.textInInput}>
					{isPasswordSecure ? "Показати" : " Приховати"}
				</Text>
			</TouchableWithoutFeedback>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.ButtonText}>Увійти</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.textAccount}>
					Немає акаунту?
					<Text style={styles.textAccountLine}> Зареєструватися</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	textAccount: {
		fontFamily: "R-400",
		fontSize: 16,
		color: "rgba(27 67 113/ 1)",
		textAlign: "center",
		marginBottom: 45,
	},
	textAccountLine: {
		fontFamily: "R-400",
		fontSize: 16,
		color: "rgba(27 67 113/ 1)",
		textAlign: "center",
		marginTop: 15,
		textDecorationLine: "underline",
	},
	text: {
		marginVertical: 32,
		lineHeight: 35,
		color: "rgba(33 33 33/ 1)",
		textAlign: "center",
		fontFamily: "R-500",
		fontSize: 30,
	},
	input: {
		fontFamily: "R-400",
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		fontSize: 16,
		marginBottom: 16,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 15,
		marginHorizontal: 16,
	},
	button: {
		fontFamily: "R-400",
		backgroundColor: "rgba(255 108 0/ 1)",
		height: 51,
		paddingVertical: 16,
		borderRadius: 100,
		marginTop: 43,
		marginBottom: 16,
		marginHorizontal: 16,
	},
	ButtonText: {
		color: "rgba(255 255 255/ 1)",
		fontSize: 16,
		lineHeight: 19,
		textAlign: "center",
	},

	textInInput: {
		position: "absolute",
		fontFamily: "R-400",
		fontSize: 16,
		lineHeight: 19,
		color: "rgba(27 67 113/1)",
		top: "45%",
		right: 33,
	},
});
