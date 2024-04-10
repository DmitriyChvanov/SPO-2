import axios from "axios";

const API_URL = "http://localhost:5000/api/";

export const getHotels = async () => {
  const { data } = await axios({ url: `${API_URL}/hotel`, method: "GET" });
  return data;
};

export const getFlights = async () => {
  const { data } = await axios({ url: `${API_URL}/fly`, method: "GET" });
  return data;
};
