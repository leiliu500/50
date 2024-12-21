export interface Flight {
  origin: string;
  destination: string;
  price: number;
  currency: string;
  departureDate: string;
  airline: string;
}

export interface FlightSearchParams {
  origin: string;
  destination: string;
  departureDate: string;
}