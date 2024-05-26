import { Box, Tabs, Typography } from "@mui/material";
import { CurrentWeaterVM } from "../weather.vm";
import classes from "./Forecast.module.css";
import React from "react";

interface Props {
	weather: CurrentWeaterVM;
	degrees: string;
}

export const Forecast: React.FC<Props> = (props) => {
	const { weather, degrees } = props;

	const [value, setValue] = React.useState(0);
	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const getWeekDay = (date: Date) => {
		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return days[date.getDay()];
	};
	return (
		<Tabs
			variant="scrollable"
			scrollButtons
			allowScrollButtonsMobile
			value={value}
			onChange={handleChange}
			className={classes.tabs}
			sx={{ backgroundColor: "secondary.main" }}
		>
			{weather.forecast.map((forecast, index) => (
				<Box key={index} mx={2}>
					<Typography variant="body1" component="p" className={classes.title}>
						{getWeekDay(new Date(forecast.date))} -{" "}
						{new Date(forecast.date).getDate()}
					</Typography>
					<Box
						component="img"
						alt={forecast.day.condition.text}
						src={forecast.day.condition.icon}
						className={classes.image}
					/>
					<Typography variant="body2" component="p" className={classes.subtitle}>
						Max:{" "}
						{degrees === "C"
							? Math.round(forecast.day.maxtemp_c)
							: Math.round(forecast.day.maxtemp_f)}{" "}
						°
					</Typography>
					<Typography variant="body2" component="p" className={classes.subtitle}>
						Min:{" "}
						{degrees === "C"
							? Math.round(forecast.day.mintemp_c)
							: Math.round(forecast.day.mintemp_f)}{" "}
						°
					</Typography>
				</Box>
			))}
		</Tabs>
	);
};
