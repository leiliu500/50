import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type PropertyScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Property">,
};

export function PropertyScreen({ navigation }: PropertyScreenProps) {
    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <button className="text-lg text-white bg-blue-500 p-4 rounded-lg mb-4">
                    + Add New Property
                </button>
                
                <label className="text-2xl font-bold mb-4">My Properties</label>
                {[
                    { address: "123 Main St, San Jose", rent: "$3,500/mo" },
                    { address: "456 Park Ave, Palo Alto", rent: "$4,200/mo" },
                ].map((property) => (
                    <gridLayout key={property.address} className="bg-white p-4 rounded-lg shadow-sm mb-4" rows="auto, auto" columns="*">
                        <label row="0" className="text-lg">{property.address}</label>
                        <label row="1" className="text-green-500">{property.rent}</label>
                    </gridLayout>
                ))}
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 20,
    },
});