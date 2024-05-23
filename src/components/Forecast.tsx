import { Box, Tabs, Typography } from "@mui/material";
import { CurrentWeaterVM } from "../weather.vm";
import React from "react";

interface Props {
	weather: CurrentWeaterVM;
	degrees: string;
}

export const Forecast: React.FC<Props> = (props) => {
	const { weather, degrees } = props;

	const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
			sx={{ backgroundColor: "secondary.main", mx: -2, py: 1, mt: 2 }}
		>
			{weather.forecast.map((forecast, index) => (
					<Box key={index} mx={2}>
						<Typography variant="body1" component="p" sx={{ fontWeight: 800,}}>
							{getWeekDay(new Date(forecast.date))} -{" "}
							{new Date(forecast.date).getDate()}
						</Typography>
						<Box
							component="img"
							alt={forecast.day.condition.text}
							src={forecast.day.condition.icon}
							width={48}
							my={-1}
						/>
						<Typography variant="body2" component="p" sx={{ fontWeight: 500 }}>
							Max: {degrees === "C" ? Math.round(forecast.day.maxtemp_c) : Math.round(forecast.day.maxtemp_f)} °
						</Typography>
						<Typography variant="body2" component="p" sx={{ fontWeight: 500 }}>
							Min: {degrees === "C" ? Math.round(forecast.day.mintemp_c) : Math.round(forecast.day.mintemp_f)} °
						</Typography>
					</Box>
			))}
		</Tabs>
	);
};
