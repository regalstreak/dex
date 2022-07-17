import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import COLORS from '../assets/fonts/colors';
import ArtifactsCarousel from '../components/ArtifactsCarousel';
import { MainStack } from './ARScreen';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import InfoSection from '../components/InfoSection';

type Props = NativeStackScreenProps<MainStack, 'ExploreScreen'>;

export const ExploreScreen = ({ navigation }: Props) => {
	return (
		<View style={styles.container}>
			<InfoSection />
			<Text
				style={{
					...styles.headingText,
					fontSize: 24,
				}}
			>
				Explore
			</Text>
			<Text style={styles.subTitle}>
				Find these artifacts near you to experience dex AR
			</Text>
			{/* <Button
				onPress={() => {
					// @ts-ignore
					navigation.navigate('DetailsScreen');
				}}
				title='navigation'
			/> */}

			<ArtifactsCarousel
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
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 12,
		justifyContent: 'center',
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
