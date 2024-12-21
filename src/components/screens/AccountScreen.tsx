import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type AccountScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Account">,
};

export function AccountScreen({ navigation }: AccountScreenProps) {
    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <image
                    src="res://profile"
                    className="w-24 h-24 rounded-full mb-4"
                />
                <label className="text-2xl font-bold mb-4">John Doe</label>
                
                {[
                    "Edit Profile",
                    "Notification Settings",
                    "Security",
                    "Help & Support",
                    "Sign Out"
                ].map((item) => (
                    <button
                        key={item}
                        className="text-lg w-full text-left p-4 border-b border-gray-200"
                    >
                        {item}
                    </button>
                ))}
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 20,
        alignItems: "center",
    },
});