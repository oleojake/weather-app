import { Box } from "@mui/material";
import { CurrentWeaterVM } from "../weather.vm";
import { MainInfo } from "./MainInfo";
import { DetailsInfo } from "./DetailsInfo";
import { WeatherApiSignature } from "./WeatherApiSignature";
import { Forecast } from "./Forecast";

interface Props {
	weather: CurrentWeaterVM;
	degrees: string;
}

export const WeatherInfo: React.FC<Props> = (props) => {
	const { weather, degrees } = props;

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
			<MainInfo weather={weather} degrees={degrees} />
			<Forecast weather={weather} degrees={degrees} />
			<DetailsInfo weather={weather} degrees={degrees} />

			<WeatherApiSignature />
		</Box>
	);
};
