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

const EASE_IN_DURATION = 3000;
const EASE_OUT_DURATION = 2500;
const ROTATE_DURATION = 5000;

const HelloWorldSceneAR = ({ onFirstObjectLoad }) => {

	const [text, setText] = useState('Initializing AR...');
	const [currentAnim, setCurrentAnim] = useState('easeIn');
	const [currentModel, setCurrentModel] = useState(0);
	const [delay, setDelay] = useState(1000);
	const [animationPlaying, setAnimationPlaying] = useState(true);

	function onInitialized(state: ViroTrackingStateConstants, reason: any) {
		console.log('guncelleme', state, reason);
		if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
			setText('Hello World!');
		} else if (state === ViroTrackingStateConstants.TRACKING_LIMITED) {
			// Handle loss of tracking
		}
	}

	const onFinishCurrentAnim = () => {
		if (currentAnim === 'easeIn') {
			setCurrentAnim('rotate');
			setDelay(0);
			setTimeout(() => {
				setCurrentAnim('easeOut');
			}, 8000);
		}
		if (currentAnim === 'easeOut') {
			setCurrentAnim('easeIn');
			setCurrentModel(currentModel + 1);
		}
	};
	return (
		// In your render function, add an image marker that references the target
		<ViroARScene>
			<ViroARImageMarker
				target={'targetOne'}
				onAnchorFound={() => setCurrentModel(2)}
			>
				<Viro3DObject
					onLoadEnd={onFirstObjectLoad}
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
					visible={currentModel === 1}
					animation={{
						name: currentAnim,
						run: currentModel === 1,
						delay: delay,
						interruptible: true,
						loop: currentAnim === 'rotate',
						onFinish: onFinishCurrentAnim,
					}}
				/>
				<Viro3DObject
					source={require('../assets/models/david/young/scene.gltf')}
					resources={[
						require('../assets/models/david/young/scene.bin'),
						require('../assets/models/david/young/material_0_baseColor.jpeg'),
					]}
					highAccuracyEvents={false}
					position={[0, 0, 0]}
					scale={[0, 0, 0]}
					rotation={[-90, 0, 0]}
					type='GLTF'
					visible={currentModel === 2}
					animation={{
						name: currentAnim,
						run: currentModel === 2,
						delay: delay,
						interruptible: true,
						loop: currentAnim === 'rotate',
						onFinish: onFinishCurrentAnim,
					}}
				/>
				<Viro3DObject
					source={require('../assets/models/david/burnaroti/sculpt.obj')}
					resources={[
						require('../assets/models/david/burnaroti/Autodesk123DSculpt.mtl'),
						require('../assets/models/david/burnaroti/tex_0.jpg'),
					]}
					highAccuracyEvents={false}
					position={[0, 0, 0]}
					scale={[0, 0, 0]}
					rotation={[-90, 0, 0]}
					type='OBJ'
					visible={currentModel === 3}
					animation={{
						name: currentAnim,
						run: currentModel === 3,
						delay: delay,
						interruptible: true,
						loop: currentAnim === 'rotate',
						onFinish: onFinishCurrentAnim,
					}}
				/>
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
		duration: ROTATE_DURATION,
	},
	easeIn: {
		properties: {
			scaleX: 0.02,
			scaleY: 0.02,
			scaleZ: 0.02,
			opacity: 1
		},
		easing: 'EaseInEaseOut',
		duration: EASE_IN_DURATION,
	},
	easeOut: {
		properties: {
			scaleX: 0,
			scaleY: 0,
			scaleZ: 0,
			opacity: 0,
		},
		easing: 'EaseInEaseOut',
		duration: EASE_OUT_DURATION,
	},
});
export default ({ onFirstObjectLoad }) => {
	return (
		<ViroARSceneNavigator
			autofocus={true}
			initialScene={{
				scene: () => (
					<HelloWorldSceneAR onFirstObjectLoad={onFirstObjectLoad} />
				),
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
