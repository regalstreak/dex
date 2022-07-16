import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import VRScene from '../components/VRScene';

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
			<VRScene />
		</>
	);
};

export default VRSceneScreen;
