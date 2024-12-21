import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type WelcomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Welcome">,
};

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-4xl mb-4 font-bold text-center">
                Welcome
            </label>
            <label className="text-xl mb-8 text-center">
                Smart Investments and More
            </label>
            <button
                className="text-lg text-white bg-blue-500 p-4 rounded-lg mb-4 w-64"
                onTap={() => navigation.navigate("Dashboard")}
            >
                Sign In
            </button>
            <button
                className="text-lg text-blue-500 border-2 border-blue-500 p-4 rounded-lg w-64"
                onTap={() => navigation.navigate("Dashboard")}
            >
                Create Account
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
});