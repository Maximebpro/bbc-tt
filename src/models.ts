export interface Trip {
  answer_delay: number;
  arrival_place: {
    city_name: string;
    address: string;
    latitude: number;
    longitude: number;
    country_code: 'FR';
  };
  booking_mode: 'manual';
  booking_type: 'online';
  car: {
    id: string;
    model: string;
    make: string;
    comfort: 'luxe';
    comfort_nb_star: 4;
  };
  commission: {
    value: 1.5;
    currency: 'EUR';
    symbol: '€';
    string_value: '1,50 €';
  };
  corridoring_type: 'PLANNED';
  departure_date: '07/09/2019 20:00:00';
  departure_passenger_routing: { proximity: 'MIDDLE'; routes: unknown[] };
  departure_place: {
    city_name: 'Paris';
    address: 'TOTAL';
    latitude: number;
    longitude: number;
    country_code: 'FR';
  };
  distance: { value: 37; unity: 'km' };
  duration: { value: 3600; unity: 's' };
  freeway: boolean;
  is_comfort: boolean;
  locations_to_display: string[];
  multimodal_id: { source: 'CARPOOLING'; id: '1693283625-paris-la-verriere' };
  permanent_id: '1693283625-paris-la-verriere';
  price: {
    value: 6;
    currency: 'EUR';
    symbol: '€';
    string_value: '6 €';
    price_color: 'BLACK';
  };
  price_with_commission: {
    value: 7.5;
    currency: 'EUR';
    symbol: '€';
    string_value: '7,50 €';
    price_color: 'BLACK';
  };
  price_without_commission: {
    value: 6;
    currency: 'EUR';
    symbol: '€';
    string_value: '6 €';
    price_color: 'BLACK';
  };
  seats: 4;
  seats_left: 4;
  user: {
    display_name: 'Kamel';
    gender: '_UE_M';
    picture: 'https://d2kwny77wxvuie.cloudfront.net/user/82zvrLvFQDyKl4gd4NdbqA/thumbnail_144x144.jpeg';
    has_picture: boolean;
  };
  vehicle_pictures: [];
  viaggio_rosa: boolean;
}
