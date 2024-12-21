import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { FlightListItem } from "../flights/FlightListItem";
import { searchFlights, getDefaultSearchParams } from "../../utils/flightApi";
import { Flight } from "../../types/flight.types";

type TravelScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Travel">,
};

export function TravelScreen({ navigation }: TravelScreenProps) {
    const [flights, setFlights] = React.useState<Flight[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchFlights = async () => {
            try {
                setLoading(true);
                const params = getDefaultSearchParams();
                const results = await searchFlights(params);
                setFlights(results);
            } catch (error) {
                console.error('Error fetching flights:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
        // Refresh every 5 minutes
        const interval = setInterval(fetchFlights, 300000);
        return () => clearInterval(interval);
    }, []);

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold mb-4">Flight Deals</label>
                {loading ? (
                    <activityIndicator busy={true} className="mt-4" />
                ) : (
                    flights.map((flight, index) => (
                        <FlightListItem key={index} flight={flight} />
                    ))
                )}
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