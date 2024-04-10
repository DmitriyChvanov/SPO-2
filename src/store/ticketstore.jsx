import { makeAutoObservable } from "mobx";

export default class TicketStore {
  constructor() {
    this._hotels = [];
    this._flights = [];
    this._selectedHotel = { price: 0 };
    this._selectedFlight = { price: 0 };
    makeAutoObservable(this);
  }

  setHotels(hotels) {
    this._hotels = hotels;
  }

  setFlights(flights) {
    this._flights = flights;
  }

  setSelectedHotel(hotel) {
    this._selectedHotel = hotel;
  }

  setSelectedFlight(flight) {
    this._selectedFlight = flight;
  }

  get Hotels() {
    return this._hotels;
  }

  get Flights() {
    return this._flights;
  }

  get SelectedHotel() {
    return this._selectedHotel;
  }

  get SelectedFlight() {
    return this._selectedFlight;
  }
}
