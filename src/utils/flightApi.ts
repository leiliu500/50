import { Flight, FlightSearchParams } from '../types/flight.types';
import { format } from 'date-fns';

// Simulate API response with realistic data
export async function searchFlights(params: FlightSearchParams): Promise<Flight[]> {
  // In a real implementation, this would call the Amadeus API
  const mockFlights: Flight[] = generateMockFlights(params);
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockFlights), 1000);
  });
}

function generateMockFlights(params: FlightSearchParams): Flight[] {
  const airlines = ['United', 'Delta', 'American', 'Southwest', 'JetBlue'];
  const basePrice = Math.floor(Math.random() * 300) + 200;
  
  return airlines.map((airline) => ({
    origin: params.origin,
    destination: params.destination,
    price: basePrice + Math.floor(Math.random() * 100),
    currency: 'USD',
    departureDate: params.departureDate,
    airline
  }));
}

export function getDefaultSearchParams(): FlightSearchParams {
  return {
    origin: 'SFO',
    destination: 'NYC',
    departureDate: format(new Date(), 'yyyy-MM-dd')
  };
}