import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { StockListItem } from "../stocks/StockListItem";
import { mockStocks } from "../../utils/mockData";
import { Stock } from "../../types/stock.types";

type StocksScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Stocks">,
};

export function StocksScreen({ navigation }: StocksScreenProps) {
    const [stocks, setStocks] = React.useState<Stock[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate API call with mock data
        const fetchStocks = () => {
            setStocks(mockStocks);
            setLoading(false);
        };

        fetchStocks();
        const interval = setInterval(fetchStocks, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold mb-4">Top Performers</label>
                {loading ? (
                    <activityIndicator busy={true} className="mt-4" />
                ) : (
                    stocks.map((stock) => (
                        <StockListItem key={stock.symbol} stock={stock} />
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