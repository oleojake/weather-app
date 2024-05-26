import { CurrentWeather } from "./model.api";

const API_WEATHER = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&lang=en&days=14&q=`;

export const getCurrentWeather = async (city: string): Promise<CurrentWeather> => {
	const res = await fetch(API_WEATHER + city);
	const data = await res.json() as CurrentWeather;
	return data;
}