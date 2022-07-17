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
	Viro3DObject,
	ViroAnimations,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
	const [text, setText] = useState('Initializing AR...');
	const [currentAnim, setCurrentAnim] = useState('easeIn');
	const [currentModel, setCurrentModel] = useState(1);
	const [delay, setDelay] = useState(1000);

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
				{currentModel === 1 ? (
					<Viro3DObject
						source={require('../assets/models/david/moses/model.obj')}
						highAccuracyEvents={false}
						position={[0, 0, 0]}
						scale={[0, 0, 0]}
						rotation={[-90, 0, 0]}
						type='OBJ'
						animation={{
							name: currentAnim,
							run: currentModel === 1,
							delay: delay,
							interruptible: true,
							loop: currentAnim === 'rotate',
							onFinish: () => {
								if (currentAnim === 'easeIn') {
									setCurrentAnim('rotate');
									setDelay(0);
									setTimeout(() => {
										setCurrentAnim('easeOut');
									}, 5000);
								}
								if (currentAnim === 'easeOut') {
									setCurrentAnim('easeIn');
									setCurrentModel(2);
								}
							},
						}}
					/>
				) : null}

				{currentModel === 2 ? (
					<Viro3DObject
						source={require('../assets/models/david/moses/model.obj')}
						resources={[
							require('../assets/models/david/moses/model.mtl'),
							require('../assets/models/david/moses/model.jpg'),
						]}
						highAccuracyEvents={false}
						position={[0, 0, 0]}
						scale={[0, 0, 0]}
						rotation={[-90, 0, 0]}
						type='OBJ'
						animation={{
							name: currentAnim,
							run: currentModel === 2,
							delay: delay,
							interruptible: true,
							loop: currentAnim === 'rotate',
							onFinish: () => {
								if (currentAnim === 'easeIn') {
									setCurrentAnim('rotate');
									setDelay(0);
									setTimeout(() => {
										setCurrentAnim('easeOut');
									}, 5000);
								}
							},
						}}
					/>
				) : null}
			</ViroARImageMarker>
		</ViroARScene>
	);
};

// Outside of the render function, register the target
ViroARTrackingTargets.createTargets({
	targetOne: {
		source: require('../assets/res/irl.jpg'),
		orientation: 'Up',
		physicalWidth: 0.4, // real world width in meters
		type: 'Image',
	},
});
ViroAnimations.registerAnimations({
	moveRight: {
		properties: {
			positionX: '+=0.3',
		},
		duration: 10000,
	},
	moveLeft: {
		properties: {
			positionX: '-=0.3',
			rotateZ: '+=45',
		},
		duration: 10000,
	},
	rotate: {
		properties: {
			rotateZ: '+=360',
		},
		duration: 5000,
	},
	easeIn: {
		properties: {
			scaleX: 0.02,
			scaleY: 0.02,
			scaleZ: 0.02,
		},
		easing: 'Bounce',
		duration: 7000,
	},
	easeOut: {
		properties: {
			scaleX: 0,
			scaleY: 0,
			scaleZ: 0,
			opacity: 0,
		},
		easing: 'Bounce',
		duration: 3000,
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
