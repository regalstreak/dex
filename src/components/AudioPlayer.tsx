import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrackPlayer, {
	Event,
	State,
	usePlaybackState,
	useTrackPlayerEvents,
} from 'react-native-track-player';
import IonIcon from 'react-native-vector-icons/Ionicons';
import COLORS from '../assets/fonts/colors';

type TAudioPlayerProps = {
	url: string;
	isPlaying: boolean;
	play: () => void;
	pause: () => void;
};

const setUpTrackPlayer = async (
	url: string,
	trackPlayer: typeof TrackPlayer,
) => {
	await trackPlayer.setupPlayer();
	await trackPlayer.add([{ url }]);
};

export const useTrackPlayer = (
	url: string,
	trackPlayer: typeof TrackPlayer,
) => {
	const playerState = usePlaybackState();

	useEffect(() => {
		setUpTrackPlayer(url, trackPlayer);
	}, []);

	const isPlaying = playerState === State.Playing;
	const isReady = playerState === State.Ready;

	useTrackPlayerEvents([Event.PlaybackQueueEnded], async () => {
		await trackPlayer.reset();
		await trackPlayer.add([{ url }]);
	});

	return {
		isReady,
		isPlaying,
		play: trackPlayer.play,
		pause: trackPlayer.pause,
	};
};

const AudioPlayer = ({ url, isPlaying, play, pause }: TAudioPlayerProps) => {
	return (
		<TouchableOpacity onPress={() => (isPlaying ? pause() : play())}>
			<View style={styles.container}>
				<IonIcon name='headset' color='white' />

				<Text
					style={{
						color: COLORS.GRAY.G6,
						fontSize: 12,
						marginHorizontal: 8,
					}}
				>
					{isPlaying ? 'Playing' : 'Play'}
				</Text>
				{isPlaying ? (
					<IonIcon name='pause' color='white' />
				) : (
					<IonIcon name='play' color='white' />
				)}
			</View>
		</TouchableOpacity>
	);
};

export default AudioPlayer;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 8,
		borderRadius: 8,
		// height: 20,
	},
});
