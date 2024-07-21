import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
	return (
		<View className="items-center justify-center">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={color}
				className="w-6 h-6"
			/>
			<Text
				className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
				style={{ color: color }}
			>
				{name}
			</Text>
		</View>
	);
};

const createScreenOptions = (name, title, icon) => ({
	title: title,
	headerShown: false,
	tabBarIcon: ({ color, focused }) => (
		<TabIcon icon={icon} color={color} name={title} focused={focused} />
	),
});

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#FFA001",
				tabBarInactiveTintColor: "#CDCDE0",
				tabBarStyle: {
					backgroundColor: "#161622",
					borderTopWidth: 1,
					borderTopColor: "#232533",
					height: 84,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={createScreenOptions("home", "Home", icons.home)}
			/>
			<Tabs.Screen
				name="bookmark"
				options={createScreenOptions("bookmark", "Bookmark", icons.bookmark)}
			/>
			<Tabs.Screen
				name="create"
				options={createScreenOptions("create", "Create", icons.plus)}
			/>
			<Tabs.Screen
				name="profile"
				options={createScreenOptions("profile", "Profile", icons.profile)}
			/>
		</Tabs>
	);
};

export default TabsLayout;
