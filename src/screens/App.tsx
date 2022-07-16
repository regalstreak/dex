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
import VRScene from './VRScene';
import ProfileScreen from './Profile';
import COLORS from '../assets/fonts/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
			return null;
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
				<NavigationContainer>
					<CurvedBottomBar.Navigator
						screenOptions={{
							headerShown: false,
						}}
						style={styles.bottomBar}
						height={50}
						circleWidth={50}
						bgColor={COLORS.GRAY.G1}
						initialRouteName='Home'
						borderTopLeftRight
						renderCircle={({ selectedTab, navigate }) => (
							<Animated.View style={styles.btnCircle}>
								<TouchableOpacity
									style={{
										flex: 1,
										justifyContent: 'center',
									}}
									onPress={() => navigate('VRScene')}
								>
									<Ionicons
										name={'layers-outline'}
										color={
											COLORS.BRAND_COLORS.HEADOUT_CANDY
										}
										size={25}
									/>
								</TouchableOpacity>
							</Animated.View>
						)}
						tabBar={renderTabBar}
					>
						<CurvedBottomBar.Screen
							name='Home'
							position='LEFT'
							component={HomeScreen}
						/>
						<CurvedBottomBar.Screen
							name='VRScene'
							position='CENTER'
							component={VRScene}
						/>
						<CurvedBottomBar.Screen
							name='Profile'
							component={ProfileScreen}
							position='RIGHT'
						/>
					</CurvedBottomBar.Navigator>
				</NavigationContainer>
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
