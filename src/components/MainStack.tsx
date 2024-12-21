import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { WelcomeScreen } from "./screens/WelcomeScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { StocksScreen } from "./screens/StocksScreen";
import { TravelScreen } from "./screens/TravelScreen";
import { PropertyScreen } from "./screens/PropertyScreen";
import { AccountScreen } from "./screens/AccountScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name="Dashboard"
                component={DashboardScreen}
            />
            <StackNavigator.Screen
                name="Stocks"
                component={StocksScreen}
                options={{ title: "Market Movers" }}
            />
            <StackNavigator.Screen
                name="Travel"
                component={TravelScreen}
                options={{ title: "Travel Planning" }}
            />
            <StackNavigator.Screen
                name="Property"
                component={PropertyScreen}
                options={{ title: "Rental Properties" }}
            />
            <StackNavigator.Screen
                name="Account"
                component={AccountScreen}
                options={{ title: "My Account" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);