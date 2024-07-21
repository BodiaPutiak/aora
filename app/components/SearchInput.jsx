import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { React, useState } from "react";

import { icons } from "../../constants";
const SearchInput = ({
	title,
	value,
	handleChangeText,
	otherStyles,
	keyboardType,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<View className="w-full h-16 px-4 border-black-200 bg-black-100 rounded-2xl focus:border-secondary-100 items-center flex-row space-x-4">
			<TextInput
				className="flex-1 text-white font-pregular text-base w-full mt-0.5"
				value={value}
				placeholder="Search for a video topic"
				placeholderTextColor="#7b7b8b"
				onChangeText={handleChangeText}
				secureTextEntry={title === "Password" && !showPassword}
			/>

			<TouchableOpacity>
				<Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
