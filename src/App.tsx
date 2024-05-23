import {
	Container,
	CssBaseline,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { getCurrentWeather } from "./api/weather.api";
import { CurrentWeaterVM, createEmptyWeather } from "./weather.vm";
import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";
import { Title } from "./components/Title";
import { AlertMessage } from "./components/AlertMessage";
import { Options } from "./components/Options";

const themePink = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#A04860",
		},
		secondary: {
			main: "#F16C90",
		},
		background: {
			default: "#FFBEC2",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

const themeYellow = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#CB764D",
		},
		secondary: {
			main: "#FF9661",
		},
		background: {
			default: "#FBC2A4",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

const themeCyan = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#40668A",
		},
		secondary: {
			main: "#619ACF",
		},
		background: {
			default: "#95D3E2",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

const themeGreen = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#326B65",
		},
		secondary:{
			main: "#4CA198",
		},
		background: {
			default: "#6DC7BE",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

const themeViolet = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#64528E",
		},
		secondary: {
			main: "#7963AB",
		},
		background: {
			default: "#C1A3E1",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

export const App: React.FC = () => {
	const [palette, setPalette] = useState("pink");
	const handleChangePalette = (
		event: React.MouseEvent<HTMLElement>,
		newPalette: string
	) => {
		setPalette(newPalette);
	};
	const [city, setCity] = useState("");
	const [error, setError] = useState({
		error: false,
		message: "",
	});
	const [open, setOpen] = useState(false);
	const [degrees, setDegrees] = useState("C");

	const handleChangeDegrees = (
		event: React.MouseEvent<HTMLElement>,
		newDegrees: string
	) => {
		setDegrees(newDegrees);
	};

	const [weather, setWeather] = useState<CurrentWeaterVM>(createEmptyWeather());

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError({ error: false, message: "" });

		try {
			if (!city.trim()) throw { message: "City field is required" };

			const data = await getCurrentWeather(city);

			if (data.error) {
				throw { message: data.error.message };
			} else {
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
				setOpen(true);
			}
		} catch (error) {
			setError({ error: true, message: error.message });
		}
	};

	return (
		<ThemeProvider
			theme={
				palette === "pink"
					? themePink
					: palette === "yellow"
					? themeYellow
					: palette === "cyan"
					? themeCyan
					: palette === "green"
					? themeGreen
					: themeViolet
			}
		>
			<CssBaseline />
			<Container maxWidth="xs" sx={{ pt: 2 }}>
				<Title />
				<SearchBar
					city={city}
					setCity={setCity}
					onSubmit={onSubmit}
					error={error}
				/>
				{weather.city && (
					<Options
						degrees={degrees}
						handleChangeDegrees={handleChangeDegrees}
						palette={palette}
						handleChangePalette={handleChangePalette}
					/>
				)}
				{weather.city && <WeatherInfo weather={weather} degrees={degrees} />}

				<AlertMessage open={open} setOpen={setOpen} />
			</Container>
		</ThemeProvider>
	);
};
