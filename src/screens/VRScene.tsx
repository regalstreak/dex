import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VRScene from '../components/VRScene';

const VRSceneScreen = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	// variables
	const snapPoints = useMemo(() => ['25%', '50%'], []);

	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.arview}>
				<VRScene />
			</View>
		</View>
	);
};

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
