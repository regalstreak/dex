import React from 'react';
import {
	Alert,
	Animated,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import VRScene from './ARScreen';
import ProfileScreen from './Profile';
import COLORS from '../assets/fonts/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import VRSceneScreen from './ARScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ARScreen from '../screens/ARScreen';

const Stack = createNativeStackNavigator();

const App = () => {
	const _renderIcon = (routeName: string, selectedTab: string) => {
		let icon = '';

		switch (routeName) {
			case 'Home':
				icon = selectedTab === 'Home' ? 'home' : 'home-outline';
				break;
			case 'Profile':
				icon = selectedTab === 'Profile' ? 'person' : 'person-outline';
				break;
		}

		return <Ionicons name={icon} size={25} color={COLORS.GRAY.G7} />;
	};
	const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
		if (routeName === 'VRScene') {
			return <View></View>;
		}
		return (
			<TouchableOpacity
				onPress={() => navigate(routeName)}
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{_renderIcon(routeName, selectedTab)}
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaProvider>
			<View style={{ flex: 1 }}>
				{/* <NavigationContainer> */}
				{/* <Stack.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen name='ARScreen' component={ARScreen} />
					</Stack.Navigator> */}
				{/* </NavigationContainer> */}
				<ARScreen />
			</View>
		</SafeAreaProvider>
	);
};

export default App;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	button: {
		marginVertical: 5,
	},
	bottomBar: {},
	btnCircle: {
		width: 60,
		height: 60,
		borderRadius: 35,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.GRAY.G1,
		padding: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0.5,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 1,
		bottom: 30,
	},
	imgCircle: {
		width: 30,
		height: 30,
	},
	img: {
		width: 30,
		height: 30,
	},
});
