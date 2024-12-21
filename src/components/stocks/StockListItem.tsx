import * as React from "react";
import { Stock } from "../../types/stock.types";

interface StockListItemProps {
    stock: Stock;
}

export function StockListItem({ stock }: StockListItemProps) {
    return (
        <gridLayout 
            className="bg-white p-4 rounded-lg shadow-sm mb-4" 
            rows="auto, auto" 
            columns="*, auto"
        >
            <label col="0" row="0" className="text-lg">{stock.symbol}</label>
            <label col="1" row="0" className="text-right">${stock.price.toFixed(2)}</label>
            <label 
                col="1" 
                row="1" 
                className={stock.change >= 0 ? "text-green-500" : "text-red-500"}
            >
                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
            </label>
        </gridLayout>
    );
}