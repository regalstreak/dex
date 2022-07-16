import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
	ViroARScene,
	ViroText,
	ViroTrackingStateConstants,
	ViroARSceneNavigator,
	ViroARPlane,
	ViroSphere,
	ViroARImageMarker,
	ViroBox,
	ViroARTrackingTargets,
	Viro3DObject,
} from '@viro-community/react-viro';

const VRSceneScreen = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	// variables
	const snapPoints = useMemo(() => ['25%', '50%'], []);

	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);
	return (
		// In your render function, add an image marker that references the target
		<>
			<ViroARScene>
				<ViroARImageMarker target={'targetOne'}>
					<ViroBox position={[0, -0.25, 0]} scale={[0.5, 0.5, 0.5]} />
					<Viro3DObject
						source={require('../assets/models/david/moses/model.obj')}
						// resources={[
						// 	// require('../assets/models/david/moses/model.mtl'),
						// 	// require('../assets/models/david/moses/model.jpg'),
						// 	// require('res/texture1.html'),
						// 	// require('res/texture2.html'),
						// 	// require('res/texture3.html'),
						// ]}
						// highAccuracyEvents={true}
						position={[10, 0, 0]}
						scale={[0.5, 0.5, 0.5]}
						type='OBJ'
						dragType='FixedToWorld'
						// transformBehaviors={['billboard']}
					/>
				</ViroARImageMarker>
			</ViroARScene>
			<BottomSheet
				ref={bottomSheetRef}
				index={1}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
			>
				<View style={styles.contentContainer}>
					<Text>Awesome 🎉</Text>
				</View>
			</BottomSheet>
		</>
	);
};

// Outside of the render function, register the target
ViroARTrackingTargets.createTargets({
	targetOne: {
		source: require('../assets/res/test.jpg'),
		orientation: 'Up',
		physicalWidth: 0.4, // real world width in meters
		type: 'Image',
	},
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 24,
		backgroundColor: 'gray',
	},
	contentContainer: {
		zIndex: 9999,
		flex: 1,
		alignItems: 'center',
	},

	arview: {
		flex: 1,
		zIndex: 1,
	},
});

export default VRSceneScreen;
