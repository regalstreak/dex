import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
	const [text, setText] = useState('Initializing AR...');

	function onInitialized(state: ViroTrackingStateConstants, reason: any) {
		console.log('guncelleme', state, reason);
		if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
			setText('Hello World!');
		} else if (state === ViroTrackingStateConstants.TRACKING_LIMITED) {
			// Handle loss of tracking
		}
	}

	return (
	
		// In your render function, add an image marker that references the target
		<ViroARScene>
			<ViroARImageMarker target={'targetOne'}>
				<ViroBox position={[0, -0.25, 0]} scale={[0.5, 0.5, 0.5]} />
			 
			</ViroARImageMarker>
		</ViroARScene>
	);
};

// Outside of the render function, register the target
ViroARTrackingTargets.createTargets({
	targetOne: {
		source: require('./res/test.png'),
		orientation: 'Up',
		physicalWidth: 0.2, // real world width in meters
		type: 'Image',
	},
});

export default () => {
	return (
		<ViroARSceneNavigator
			autofocus={true}
			initialScene={{
				scene: HelloWorldSceneAR,
			}}
			style={styles.f1}
		/>
	);
};

var styles = StyleSheet.create({
	f1: { flex: 1 },
	helloWorldTextStyle: {
		fontFamily: 'Arial',
		fontSize: 30,
		color: '#ffffff',
		textAlignVertical: 'center',
		textAlign: 'center',
	},
});
