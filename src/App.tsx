import { Container } from "@mui/material";
import { useState } from "react";
import { getCurrentWeather } from "./api/weather.api";
import { CurrentWeaterVM, createEmptyWeather } from "./weather.vm";
import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";

export default function App() {
	const [city, setCity] = useState("");
	const [error, setError] = useState({
		error: false,
		message: "",
	});

	const [weather, setWeather] = useState<CurrentWeaterVM>(createEmptyWeather());

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError({ error: false, message: "" });

		try {
			if (!city.trim()) throw { message: "City field is required" };

			const data = await getCurrentWeather(city);

			if (data.error) {
				throw { message: data.error.message };
			}

			setWeather({
				city: data.location.name,
				country: data.location.country,
				temperatureC: data.current.temp_c,
				temperatureF: data.current.temp_f,
				condition: data.current.condition.code,
				conditionText: data.current.condition.text,
				icon: data.current.condition.icon,
				feelslike_c: data.current.feelslike_c,
				feelslike_f: data.current.feelslike_f,
				wind_kph: data.current.wind_kph,
				wind_degree: data.current.wind_degree,
				wind_dir: data.current.wind_dir,
				humidity: data.current.humidity,
				cloud: data.current.cloud,
				precip_mm: data.current.precip_mm,
				uv: data.current.uv,
				forecast: [...data.forecast.forecastday],
			});
		} catch (error) {
			setError({ error: true, message: error.message });
		}
	};

	return (
		<Container maxWidth="xs" sx={{ mt: 2 }}>
			<SearchBar city={city} setCity={setCity} onSubmit={onSubmit} error={error} />

			{weather.city && <WeatherInfo weather={weather} />}
		</Container>
	);
}
