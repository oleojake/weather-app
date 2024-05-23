import { Box, Divider, Typography } from "@mui/material";
import { CurrentWeaterVM } from "../weather.vm";

interface Props {
	weather: CurrentWeaterVM;
	degrees: string;
}

export const DetailsInfo: React.FC<Props> = (props) => {
	const { weather, degrees } = props;
	return (
		<Box>
			<Typography
				variant="h5"
				component="h3"
				sx={{ fontWeight: "800", mt: 2, mb: 2 }}
			>
				Weather Details
			</Typography>

			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						High Temperature
					</Typography>
					<Typography variant="body1" component="p">
						{degrees === "C" ? weather.forecast[0].day.maxtemp_c : weather.forecast[0].day.maxtemp_f} º
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						Low Temperature
					</Typography>
					<Typography variant="body1" component="p">
						{degrees === "C" ? weather.forecast[0].day.mintemp_c : weather.forecast[0].day.mintemp_f} °
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						Humidity
					</Typography>
					<Typography variant="body1" component="p">
						{weather.humidity} %
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						Feelslike
					</Typography>
					<Typography variant="body1" component="p">
						{degrees === "C" ? weather.feelslike_c : weather.feelslike_f} °
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						Wind Speed
					</Typography>
					<Typography variant="body1" component="p">
						{weather.wind_kph} km/h
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						Wind Degree
					</Typography>
					<Typography variant="body1" component="p">
						{weather.wind_degree} º
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						Wind Direction
					</Typography>
					<Typography variant="body1" component="p">
						{weather.wind_dir}
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						Clouds
					</Typography>
					<Typography variant="body1" component="p">
						{weather.cloud} %
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						Precipitations
					</Typography>
					<Typography variant="body1" component="p">
						{weather.precip_mm} mm
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body1" component="p" sx={{ fontWeight: "500" }}>
						UV Index
					</Typography>
					<Typography variant="body1" component="p">
						{weather.uv} uv
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
			</Box>
		</Box>
	);
};
