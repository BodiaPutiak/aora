import { View, Text, ScrollView, Image, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../components/FormField";
import { useState } from "react";

import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import { signIn } from "../../lib/appwrite";
const SignIn = () => {
	const { setUser, setIsLoggedIn } = useGlobalContext();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const submit = async () => {
		if (form.email === "" || form.password === "") {
			Alert.alert("Error", "Please fill in all fields");
		}

		setIsSubmitting(true);

		try {
			await signIn(form.email, form.password);
			const result = await getCurrentUser();
			setUser(result);
			setIsLoggedIn(true);
		} catch (error) {
			Alert.alert("Error", error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View className="w-full justify-center min-h-[85vh] px-4 my-6">
					<Image
						source={images.logo}
						resizeMode="contain"
						className="w-[115] h-[35px]"
					/>
					<Text className="text-2xl text-white text-semibold mt-10">
						Log in to Aora
					</Text>
					<FormField
						title="Email"
						value={form.email}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles="mt-7"
						keyboardType="email-address"
						placeholder="Email"
					/>

					<FormField
						title="Password"
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles="mt-7"
						keyboardType="email-address"
						placeholder="Password"
					/>

					<CustomButton
						title="Sign In"
						handlePress={submit}
						containerStyles="mt-7"
						isLoading={isSubmitting}
					/>

					<View className="justify-center pt-5 flex-row gap-2">
						<Text className="text-lg text-gray-100 font-pregular">
							Don't have an account? {""}
							<Link
								href="/sign-up"
								className="text-lg font-psemibold text-secondary-100"
							>
								Sign Up
							</Link>
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
