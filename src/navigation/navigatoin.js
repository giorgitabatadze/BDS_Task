import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react'

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createStackNavigator();

const MyNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />

                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyNavigation;
