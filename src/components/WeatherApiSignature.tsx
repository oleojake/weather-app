import { Box, Typography } from "@mui/material";

export const WeatherApiSignature: React.FC = () => {
	return (
		<Box sx={{display:"flex", justifyContent:"space-evenly", my:1}}>
			<Typography textAlign="center" sx={{fontSize: "10px" }}>
				Github:{" "}
				<a href="https://www.weatherapi.com/" title="Weather API">
					OleojakeDev
				</a>
			</Typography>
			<Typography textAlign="center" sx={{fontSize: "10px" }}>
				Powered by:{" "}
				<a href="https://www.weatherapi.com/" title="Weather API">
					WeatherAPI.com
				</a>
			</Typography>
		</Box>
	);
};
