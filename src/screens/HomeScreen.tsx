import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '../assets/fonts/colors';

const HomeScreen = () => {
	return (
			<View style={homeScreenStyles.container}>
				<Text style={homeScreenStyles.subTitle}>Welcome to,</Text>
				<Text style={homeScreenStyles.headingText}>The Vatican Museum</Text>
				<Image
        			source={{ uri : 'https://www.travelingturks.com/wp-content/uploads/vatican-museum.jpg' }}
					style={{width: 'auto', height: 150, marginTop: 12, marginLeft: -12, marginRight: -12, marginBottom: 32}}
      				/>

			<Text style={homeScreenStyles.headingText}>Explorables</Text>
			<Text style={homeScreenStyles.subTitle}>Find these artifacts near you to experience dex AR</Text>

				
			</View>
	);
};

export default HomeScreen;


const homeScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		justifyContent: 'center',
		backgroundColor: COLORS.BRAND_COLORS.SLATE_BLACK,
	},

	headingText: {
		fontSize: 28,
		fontWeight: 'bold',
		color: 'white',

		// textAlign: 'center',
	}
,
	subTitle: {
		fontSize: 12,
		color: COLORS.GRAY.G7
	}
});


