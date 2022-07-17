import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '../assets/fonts/colors';

const InfoSection = () => {
	return (
		<View style={homeScreenStyles.container}>
			<Text style={homeScreenStyles.subTitle}>Welcome to,</Text>
			<Text style={homeScreenStyles.headingText}>The Vatican Museum</Text>
			<Image
				source={{
					uri: 'https://www.travelingturks.com/wp-content/uploads/vatican-museum.jpg',
				}}
				style={{
					borderRadius: 10,
					width: 'auto',
					height: 150,
					marginTop: 16,
					marginBottom: 16,
				}}
			/>
		</View>
	);
};

export default InfoSection;

const homeScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BRAND_COLORS.SLATE_BLACK,
	},

	headingText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},
	subTitle: {
		fontSize: 12,
		color: COLORS.GRAY.G7,
	},
});
