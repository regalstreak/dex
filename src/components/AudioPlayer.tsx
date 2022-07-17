import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import IonIcon from 'react-native-vector-icons/Ionicons';
import COLORS from '../assets/fonts/colors';

type TAudioPlayerProps = {
	isPlaying: boolean;
	play: () => void;
	pause: () => void;
};

const AudioPlayer = ({ isPlaying, play, pause }: TAudioPlayerProps) => {
	return (
		<TouchableOpacity onPress={() => (isPlaying ? pause() : play())}>
			<View style={styles.container}>
				<IonIcon name='headset' color='white' />

				<Text
					style={{
						color: COLORS.GRAY.G6,
						fontSize: 12,
						marginHorizontal: 4,
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
