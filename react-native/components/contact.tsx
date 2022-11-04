import React from "react";
import { View, Text } from "react-native";

interface Contact {
	name: String;
}
const Contact: React.FC<Contact> = ({ name }: Contact) => {
	return (
		<View>
			<Text>{name}</Text>
		</View>
	);
};
