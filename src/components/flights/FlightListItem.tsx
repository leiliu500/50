import * as React from "react";
import { Flight } from "../../types/flight.types";

interface FlightListItemProps {
  flight: Flight;
}

export function FlightListItem({ flight }: FlightListItemProps) {
  return (
    <gridLayout 
      className="bg-white p-4 rounded-lg shadow-sm mb-4" 
      rows="auto, auto" 
      columns="*, auto"
    >
      <stackLayout col="0" row="0">
        <label className="text-lg font-bold">{flight.airline}</label>
        <label className="text-gray-600">
          {flight.origin} → {flight.destination}
        </label>
      </stackLayout>
      <stackLayout col="1" row="0" horizontalAlignment="right">
        <label className="text-xl text-blue-500">
          ${flight.price}
        </label>
        <label className="text-gray-500 text-sm">
          {flight.departureDate}
        </label>
      </stackLayout>
    </gridLayout>
  );
}