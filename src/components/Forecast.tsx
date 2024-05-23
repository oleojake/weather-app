import { Box, Tabs, Typography } from "@mui/material";
import { CurrentWeaterVM } from "../weather.vm";

interface Props {
	weather: CurrentWeaterVM;
}

export const Forecast: React.FC<Props> = (props) => {
	const { weather } = props;
	const getWeekDay = (date: Date) => {
		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return days[date.getDay()];
	};
	return (
		<Tabs
			variant="scrollable"
			scrollButtons
			allowScrollButtonsMobile
			sx={{ backgroundColor: "#e887a1", mx: -2, py: 1, mt: 2 }}
		>
			{weather.forecast.map((forecast) => (
				<Box key={forecast.date_epoch} mx={2}>
					<Typography variant="body1" component="p" sx={{ fontWeight: 800 }}>
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
						Max: {Math.round(forecast.day.maxtemp_c)} °
					</Typography>
					<Typography variant="body2" component="p" sx={{ fontWeight: 500 }}>
						Min: {Math.round(forecast.day.mintemp_c)} °
					</Typography>
				</Box>
			))}
		</Tabs>
	);
};
