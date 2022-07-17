import React from 'react';
import {
	StyleSheet,
	Dimensions,
	ImageBackground,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import {
	BottomSheetFlatList,
	BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

interface ArtifactsCarouselProps {
	artifactDetails: {
		text: string;
		image: string;
	}[];
}

const ArtifactsCarousel = ({ artifactDetails }: ArtifactsCarouselProps) => {
	return (
		<BottomSheetFlatList
			horizontal={true}
			style={styles.artifactBoxWrapper}
			data={artifactDetails}
			renderItem={({ item }) => {
				return (
					<TouchableOpacity>
						<ImageBackground
							source={{
								uri: item.image,
							}}
							style={styles.artifactBox}
							key={item.text}
							imageStyle={{ borderRadius: 10 }}
						>
							<View style={styles.artifactBoxText}>
								<Text
									style={{
										textAlign: 'center',
										fontSize: 12,
									}}
								>
									{item.text}
								</Text>
							</View>
						</ImageBackground>
					</TouchableOpacity>
				);
			}}
		/>
	);
};

export default ArtifactsCarousel;

export const styles = StyleSheet.create({
	artifactBox: {
		padding: 20,
		marginHorizontal: 8,
		marginVertical: 4,
		width: Dimensions.get('window').width * 0.6,
		height: Dimensions.get('window').height * 0.35,
		flexDirection: 'column',
		position: 'relative',
		justifyContent: 'space-between',
	},
	artifactBoxWrapper: {
		marginTop: 12,
	},
	artifactBoxText: {
		marginTop: 'auto',
		margin: 5,
		backgroundColor: 'rgba(255,255,255,0.8)',
		// height: 40,
		borderRadius: 10,
		padding: 8,
	},
	icon: {
		backgroundColor: 'green',
		width: 30,
		display: 'flex',
		alignItems: 'flex-end',
	},
});
