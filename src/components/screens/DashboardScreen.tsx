import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type DashboardScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Dashboard">,
};

export function DashboardScreen({ navigation }: DashboardScreenProps) {
    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <gridLayout rows="auto, auto" columns="*, *" style={styles.grid}>
                    <button
                        row="0"
                        col="0"
                        className="text-lg p-4 m-2 bg-blue-100 rounded-lg"
                        onTap={() => navigation.navigate("Stocks")}
                    >
                        📈 Stocks
                    </button>
                    <button
                        row="0"
                        col="1"
                        className="text-lg p-4 m-2 bg-green-100 rounded-lg"
                        onTap={() => navigation.navigate("Travel")}
                    >
                        ✈️ Travel
                    </button>
                    <button
                        row="1"
                        col="0"
                        className="text-lg p-4 m-2 bg-yellow-100 rounded-lg"
                        onTap={() => navigation.navigate("Property")}
                    >
                        🏠 Properties
                    </button>
                    <button
                        row="1"
                        col="1"
                        className="text-lg p-4 m-2 bg-purple-100 rounded-lg"
                        onTap={() => navigation.navigate("Account")}
                    >
                        👤 Account
                    </button>
                </gridLayout>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 20,
    },
    grid: {
        width: "100%",
    },
});