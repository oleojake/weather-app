import { CurrentWeather } from "./model.api";
const YOUR_API_KEY ='b0aeea8b859048daa91142854242105';

const API_WEATHER = `https://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&lang=en&days=14&q=`;

export const getCurrentWeather = async (city: string): Promise<CurrentWeather> => {
	const res = await fetch(API_WEATHER + city);
	const data = await res.json() as CurrentWeather;
	return data;
}