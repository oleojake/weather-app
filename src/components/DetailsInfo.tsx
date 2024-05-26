import { Box, Divider, Typography } from "@mui/material";
import { CurrentWeaterVM } from "../weather.vm";
import classes from "./DetailsInfo.module.css";

interface Props {
	weather: CurrentWeaterVM;
	degrees: string;
}

export const DetailsInfo: React.FC<Props> = (props) => {
	const { weather, degrees } = props;
	return (
		<Box>
			<Typography variant="h5" component="h3" className={classes.title}>
				Weather Details
			</Typography>

			<Box className={classes.mainContainer}>
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						High Temperature
					</Typography>
					<Typography variant="body1" component="p">
						{degrees === "C"
							? weather.forecast[0].day.maxtemp_c
							: weather.forecast[0].day.maxtemp_f}{" "}
						º
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						Low Temperature
					</Typography>
					<Typography variant="body1" component="p">
						{degrees === "C"
							? weather.forecast[0].day.mintemp_c
							: weather.forecast[0].day.mintemp_f}{" "}
						°
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						Humidity
					</Typography>
					<Typography variant="body1" component="p">
						{weather.humidity} %
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						Feelslike
					</Typography>
					<Typography variant="body1" component="p">
						{degrees === "C" ? weather.feelslike_c : weather.feelslike_f} °
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						Wind Speed
					</Typography>
					<Typography variant="body1" component="p">
						{weather.wind_kph} km/h
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						Wind Degree
					</Typography>
					<Typography variant="body1" component="p">
						{weather.wind_degree} º
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						Wind Direction
					</Typography>
					<Typography variant="body1" component="p">
						{weather.wind_dir}
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						Clouds
					</Typography>
					<Typography variant="body1" component="p">
						{weather.cloud} %
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
						Precipitations
					</Typography>
					<Typography variant="body1" component="p">
						{weather.precip_mm} mm
					</Typography>
				</Box>
				<Divider sx={{ my: 0.5, borderColor: "primary.main" }} />
				<Box className={classes.row}>
					<Typography variant="body1" component="p" className={classes.item}>
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
