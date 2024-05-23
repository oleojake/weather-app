import { Box, Divider, Typography } from "@mui/material";
import { CurrentWeaterVM } from "../weather.vm";

interface Props {
	weather: CurrentWeaterVM;
	degrees: string;
}

export const MainInfo: React.FC<Props> = (props) => {
	const { weather, degrees } = props;
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					gap: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					component="img"
					alt={weather.conditionText}
					src={weather.icon}
					width={96}
				/>
				<Divider orientation="vertical" flexItem sx={{ borderRightWidth: 0.5 }} />
				<Typography variant="h2" component="p" sx={{ fontWeight: "500" }}>
					{degrees === "C" ? weather.temperatureC : weather.temperatureF} °
				</Typography>
			</Box>

			<Typography variant="h4" component="h2" sx={{ fontWeight: "500" }}>
				{weather.conditionText}
			</Typography>

			<Typography variant="h5" component="h3" sx={{ fontWeight: "500" }}>
				{weather.city}, {weather.country}
			</Typography>
		</Box>
	);
};
