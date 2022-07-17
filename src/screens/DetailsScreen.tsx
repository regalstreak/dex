import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import COLORS from '../assets/fonts/colors';
import AudioPlayer from '../components/AudioPlayer';
import { AUDIO_URL } from '../constants/audio';
import { useTrackPlayer } from '../hooks/useTrackPlayer';

export const DetailsScreen = () => {
	const { isPlaying, play, pause, isReady } = useTrackPlayer(AUDIO_URL);

	return (
		<View style={styles.container}>
			<Text
				style={{
					color: COLORS.BRAND_COLORS.HEADOUT_CANDY,
					fontSize: 12,
					letterSpacing: 0.8,
				}}
			>
				{' '}
				Now Experiencing
			</Text>
			<View style={{ flexDirection: 'row' }}>
				<Text style={styles.subTitle}>
					Noteable Works of Michelangelo
				</Text>
				<View style={{ marginLeft: 'auto' }}>
					<AudioPlayer
						isPlaying={isPlaying}
						play={play}
						pause={pause}
					/>
				</View>
			</View>
			<Image
				source={{
					uri: 'https://cdn.discordapp.com/attachments/594962648077041693/997986612732506184/478px-Transfiguration_Raphael.jpg',
				}}
				style={{
					borderRadius: 10,
					width: 'auto',
					height: 150,
					marginTop: 16,
					marginBottom: 20,
				}}
			/>

			<Text style={styles.description}>
				The Pietà is a subject in Christian art depicting the Virgin
				Mary cradling the dead body of Jesus after his body was removed
				from the cross. It is most often found in sculptures. The Pietà
				is a specific form of the Lamentation of Christ in which Jesus
				is mourned by the Virgin Mary alone.
			</Text>

			<Text style={styles.description}>
				The statue of Bacchus was commissioned by the banker Jacopo
				Galli for his garden and he wanted it fashioned after the models
				of the ancients. The body of this drunken and staggering god
				gives an impression of both youthfulness and of femininity.
			</Text>

			<Text style={styles.description}>
				Moses is an imposing figure—nearly eight feet high sitting down!
				He has massive muscular arms and an angry, intense look in his
				eyes. Under his arms, he carries the tablets of the law—the
				stones inscribed with the Ten Commandments that he has just
				received from God on Mt. Sinai.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 12,
		// justifyContent: 'center',
		backgroundColor: COLORS.BRAND_COLORS.SLATE_BLACK,
	},

	headingText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},
	subTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: COLORS.GRAY.G7,
		width: '75%',
	},

	description: {
		fontWeight: '300',
		fontSize: 12,
		color: COLORS.GRAY.G6,
		marginBottom: 8,
	},
});
