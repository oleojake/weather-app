import { Typography } from "@mui/material";

export const WeatherApiSignature: React.FC = () => {
	return (
		<Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
			Powered by:{" "}
			<a href="https://www.weatherapi.com/" title="Weather API">
				WeatherAPI.com
			</a>
		</Typography>
	);
};
