import { Box } from "@mui/material";
import { CurrentWeaterVM } from "../weather.vm";
import { MainInfo } from "./MainInfo";
import { DetailsInfo } from "./DetailsInfo";
import { WeatherApiSignature } from "./WeatherApiSignature";
import { Forecast } from "./Forecast";

interface Props {
	weather: CurrentWeaterVM;
}

export const WeatherInfo: React.FC<Props> = (props) => {
	const { weather } = props;

	return (
		<Box
			sx={{
				mt: 5,
				display: "flex",
				flexDirection: "column",
				gap: 2,
				textAlign: "center",
			}}
		>
			<MainInfo weather={weather} />
			<Forecast weather={weather} />
			<DetailsInfo weather={weather} />

			<WeatherApiSignature />
		</Box>
	);
};
