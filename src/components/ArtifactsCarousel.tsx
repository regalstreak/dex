import React from 'react';
import {
	StyleSheet,
	Dimensions,
	ImageBackground,
	View,
	ScrollView,
	Text,
	TouchableOpacity,
} from 'react-native';


interface ArtifactsCarouselProps {
	artifactDetails: {
		text: string;
		image: string;
	}[];
}

const ArtifactsCarousel = ({ artifactDetails }: ArtifactsCarouselProps) => {
	return (
		<ScrollView
			horizontal={true}
			style={styles.artifactBoxWrapper}
			contentOffset={{ x: 5, y: 59 }}
		>
			{artifactDetails.map(({ text, image }) => (
				<TouchableOpacity>
					<ImageBackground
						source={{
							uri: image,
						}}
						style={styles.artifactBox}
						key={text}
						imageStyle={{ borderRadius: 10 }}
					>
						<View style={styles.artifactBoxText}>
							<Text style={{ textAlign: 'center', fontSize: 12 }}>
								{text}
							</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
			))}
		</ScrollView>
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
		marginTop: 16,
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
