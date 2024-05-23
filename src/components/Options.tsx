import {
	Box,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";

interface Props {
	degrees: string;
	handleChangeDegrees: (
		event: React.MouseEvent<HTMLElement>,
		newDegress: string
	) => void;
	palette: string;
	handleChangePalette: (
		event: React.MouseEvent<HTMLElement>,
		newPalette: string
	) => void;
}

export const Options: React.FC<Props> = (props) => {
	const { degrees, handleChangeDegrees, palette, handleChangePalette } = props;
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ display: "flex", gap: "10px", alignItems: "end", mt: 2 }}>
				<Typography variant="body2" component="p" sx={{ fontWeight: "500" }}>
					Palette:
				</Typography>
				<ToggleButtonGroup
					size="small"
					value={palette}
					exclusive
					onChange={handleChangePalette}
				>
					<ToggleButton
						value={"pink"}
						sx={{
							padding: "10px",
							backgroundColor: "#FFBEC2",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
						}}
					></ToggleButton>
					<ToggleButton
						value="yellow"
						sx={{
							padding: "10px",
							backgroundColor: "#FBC2A4",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
						}}
					></ToggleButton>
					<ToggleButton
						value="cyan"
						sx={{
							padding: "10px",
							backgroundColor: "#95D3E2",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
						}}
					></ToggleButton>
					<ToggleButton
						value="green"
						sx={{
							padding: "10px",
							backgroundColor: "#6DC7BE",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
						}}
					></ToggleButton>
					<ToggleButton
						value="violet"
						sx={{
							padding: "10px",
							backgroundColor: "#C1A3E1",
							"&.MuiToggleButton-root.Mui-selected": {
								backgroundColor: "default.main",
								borderWidth: "2px",
								borderStyle: "solid",
								borderColor: "primary.main",
							},
						}}
					></ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box sx={{ display: "flex", gap: "10px", alignItems: "end" }}>
				<Typography variant="body2" component="p" sx={{ mt: 2, fontWeight: "500" }}>
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
