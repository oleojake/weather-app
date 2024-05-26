import { Theme } from "@mui/material";
import {
	Box,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import { THEMES } from "../themes";
import classes from "./Options.module.css";

interface Props {
	degrees: string;
	handleChangeDegrees: (
		event: React.MouseEvent<HTMLElement>,
		newDegress: string
	) => void;
	palette: Theme;
	handleChangePalette: (
		event: React.MouseEvent<HTMLElement>,
		newPalette: Theme
	) => void;
}

export const Options: React.FC<Props> = (props) => {
	const { degrees, handleChangeDegrees, palette, handleChangePalette } = props;
	return (
		<Box className={classes.container}>
			<Box className={classes.palette}>
				<Typography variant="body2" component="p">
					Palette:
				</Typography>
				<ToggleButtonGroup
					size="small"
					value={palette}
					exclusive
					onChange={handleChangePalette}
				>
					<ToggleButton
						value={THEMES.yellow}
						sx={{
							padding: "10px",
							backgroundColor: "#FBC2A4",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
							"&:hover": {
								backgroundColor: "#FBC2A4",
							},
						}}
					></ToggleButton>
					<ToggleButton
						value={THEMES.pink}
						sx={{
							padding: "10px",
							backgroundColor: "#FFBEC2",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
							"&:hover": {
								backgroundColor: "#FFBEC2",
							},
						}}
					></ToggleButton>
					<ToggleButton
						value={THEMES.cyan}
						sx={{
							padding: "10px",
							backgroundColor: "#95D3E2",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
							"&:hover": {
								backgroundColor: "#95D3E2",
							},
						}}
					></ToggleButton>
					<ToggleButton
						value={THEMES.green}
						sx={{
							padding: "10px",
							backgroundColor: "#6DC7BE",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
							"&:hover": {
								backgroundColor: "#6DC7BE",
							},
						}}
					></ToggleButton>
					<ToggleButton
						value={THEMES.violet}
						sx={{
							padding: "10px",
							backgroundColor: "#C1A3E1",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
							"&:hover": {
								backgroundColor: "#C1A3E1",
							},
						}}
					></ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box className={classes.toggle}>
				<Typography variant="body2" component="p">
					Degrees:
				</Typography>
				<ToggleButtonGroup
					size="small"
					value={degrees}
					exclusive
					onChange={handleChangeDegrees}
					sx={{ height: "25px" }}
				>
					<ToggleButton
						value="C"
						sx={{
							fontWeight: degrees === "C" ? "800" : "500",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
						}}
					>
						Cº
					</ToggleButton>
					<ToggleButton
						value="F"
						sx={{
							fontWeight: degrees === "F" ? "800" : "500",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
						}}
					>
						Fº
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
		</Box>
	);
};
