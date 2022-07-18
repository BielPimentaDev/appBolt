import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screen/Login';
import * as NavigationBar from 'expo-navigation-bar';
import Main from './screen/Main/Index';
import { useFonts } from 'expo-font';
import Routes from './Routes';
import Driving from './screen/Driving/Index';
import Wallet from './screen/Wallet/Index';
import Marketplace from './screen/Marketplace/Index';

import Congratulation from './screen/Congratulation/Index';
import TabBar from './components/TabBar';
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './context/AppContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			tabBar={TabBar}
			initialRouteName='Main'
			screenOptions={{
				headerShown: false,
			}}>
			<Tab.Screen name='Marketplace' component={Marketplace} />
			<Tab.Screen name='Wallet' component={Wallet} />
			<Tab.Screen name='Congratulation' component={Congratulation} />
			<Tab.Screen name='Main' component={Main} />
			<Tab.Screen name='Driving' component={Driving} />
		</Tab.Navigator>
	);
};

export default function App() {
	useEffect(() => {
		StatusBar.setBarStyle('light-content');

		if (Platform.OS === 'android') {
			NavigationBar.setBackgroundColorAsync('#04E3C3');
			NavigationBar.setButtonStyleAsync('dark');
		}
	}, []);

	const [loaded] = useFonts({
		mont: require('./assets/fonts/Montserrat-Medium.ttf'),
		montBold: require('./assets/fonts/Montserrat-Bold.ttf'),
		montSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
		montExtraBold: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
		montBoldItalic: require('./assets/fonts/Montserrat-BoldItalic.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<AppContextProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Login'
						component={Login}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='Tabs'
						component={Tabs}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AppContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#031E1C',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
