import { Forecastday } from "./api/model.api";

export interface CurrentWeaterVM {
	city: string;
	country: string;
	temperatureC: number;
	temperatureF: number;
	condition: number;
	conditionText: string;
	icon: string;
	feelslike_c: number;
	feelslike_f: number;
	wind_kph: number;
	wind_degree: number;
	wind_dir: string;
	humidity: number;
	cloud: number;
	precip_mm: number;
	uv: number;
	forecast: Forecastday[];
}

export const createEmptyWeather = (): CurrentWeaterVM => ({
	city: "",
	country: "",
	temperatureC: 0,
	temperatureF: 0,
	condition: 0,
	conditionText: "",
	icon: "",
	feelslike_c: 0,
	feelslike_f: 0,
	wind_kph: 0,
	wind_degree: 0,
	wind_dir: "",
	humidity: 0,
	cloud: 0,
	precip_mm: 0,
	uv: 0,
	forecast: [],
});