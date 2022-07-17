import BottomSheet from '@gorhom/bottom-sheet';
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import VRScene from '../components/VRScene';
import COLORS from '../assets/fonts/colors';
import ArtifactsCarousel from '../components/ArtifactsCarousel';

const VRSceneScreen = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	// variables
	const snapPoints = useMemo(() => ['30%', '85%'], []);

	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);
	return (
		// In your render function, add an image marker that references the target
		<>
			<VRScene />
			<BottomSheet
				ref={bottomSheetRef}
				index={0}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
				handleStyle={{
					backgroundColor: COLORS.BRAND_COLORS.SLATE_BLACK,
					borderColor: COLORS.BRAND_COLORS.SLATE_BLACK,
				}}
				handleIndicatorStyle={{
					backgroundColor: COLORS.BRAND_COLORS.WHITE,
				}}
				activeOffsetX={[-999, 999]}
				activeOffsetY={[-20, 20]}
			>
				<View style={styles.container}>
					<Text
						style={{
							...styles.headingText,
							fontSize: 24,
						}}
					>
						Explorables
					</Text>
					<Text style={styles.subTitle}>
						Find these artifacts near you to experience dex AR
					</Text>

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
			</BottomSheet>
		</>
	);
};

export default VRSceneScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 32,
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
