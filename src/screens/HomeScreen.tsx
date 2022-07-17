import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '../assets/fonts/colors';
import ArtifactsCarousel from '../components/ArtifactsCarousel';

const HomeScreen = () => {
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

					marginBottom: 32,
				}}
			/>

			{/* <Text style={{ ...homeScreenStyles.headingText, fontSize: 24 }}>
				Explorables
			</Text>
			<Text style={homeScreenStyles.subTitle}>
				Find these artifacts near you to experience dex AR
			</Text> */}

			{/* <ArtifactsCarousel
				artifactDetails={[
					{
						text: 'Roman, 1st century AD Augustus of Prima Porta Museo Chiaramonti',
						image: 'https://cdn.discordapp.com/attachments/594962648077041693/997986613156122634/480px-Statue-Augustus.jpg',
					},
					{
						text: 'Raphael The Transfiguration Pinacoteca Vaticana ',
						image: 'https://cdn.discordapp.com/attachments/594962648077041693/997986612732506184/478px-Transfiguration_Raphael.jpg',
					},
					{
						text: 'Agesander, Athenodorus and Polydorus Laocoön and His Sons Museo Pio-Clementino',
						image: 'https://cdn.discordapp.com/attachments/594962648077041693/997986613386821652/677px-Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg',
					},
					{
						text: 'Raphael The School of Athens Raphael Rooms',
						image: 'https://cdn.discordapp.com/attachments/594962648077041693/997986613680418926/928px-_The_School_of_Athens__by_Raffaello_Sanzio_da_Urbino.jpg',
					},
				]}
			/> */}
		</View>
	);
};

export default HomeScreen;

const homeScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 32,
		paddingBottom: 12,
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
