import BottomSheet from '@gorhom/bottom-sheet';
import { Image, StyleSheet, Text, View } from 'react-native';
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

import VRScene from '../components/VRScene';
import COLORS from '../assets/fonts/colors';
import ArtifactsCarousel from '../components/ArtifactsCarousel';
import {
	accelerometer,
	SensorTypes,
	setUpdateIntervalForType,
} from 'react-native-sensors';
import { ExploreScreen } from './ExploreScreen';
import {
	DarkTheme,
	NavigationContainer,
	Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from './DetailsScreen';

setUpdateIntervalForType(SensorTypes.accelerometer, 500);

export type MainStack = {
	ExploreScreen: {};
	DetailsScreen: {};
};

const Stack = createNativeStackNavigator<MainStack>();

const MyTheme: Theme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		background: COLORS.BRAND_COLORS.SLATE_BLACK,
	},
};
import AudioPlayer, { useTrackPlayer } from '../components/AudioPlayer';
import TrackPlayer from 'react-native-track-player';

setUpdateIntervalForType(SensorTypes.accelerometer, 500);

const audioURL = require('../assets/audio/test.mp3');

const VRSceneScreen = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const [bottomSheetIndex, setBottomSheetIndex] = useState(0);

	useEffect(() => {
		const subscription = accelerometer.subscribe(({ y }) => {
			if (y > 6) {
				setBottomSheetIndex(0);
			}

			if (y < 3) {
				setBottomSheetIndex(1);
			}
		});

		return () => subscription.unsubscribe();
	}, []);

	const { isReady, isPlaying, play, pause } = useTrackPlayer(
		audioURL,
		TrackPlayer,
	);

	// variables
	const snapPoints = useMemo(() => ['30%', '85%'], []);

	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);
	return (
		// In your render function, add an image marker that references the target
		<>
			<VRScene
				onFirstObjectLoad={() => {
					console.log('on MODEL LOAD 00000');
					play();
				}}
			/>
			<BottomSheet
				ref={bottomSheetRef}
				index={bottomSheetIndex}
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
				<NavigationContainer theme={MyTheme}>
					<Stack.Navigator>
						<Stack.Screen
							name='ExploreScreen'
							component={ExploreScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='DetailsScreen'
							component={DetailsScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
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
