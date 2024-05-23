import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

interface Props {
	degrees: string;
	handleChange: (event: React.MouseEvent<HTMLElement>, newDegress: string) => void;
}

export const Options: React.FC<Props> = (props) => {
	const { degrees, handleChange } = props;
	return (
		<Box
			sx={{
				display: "flex",
				gap: "10px",
				alignItems: "end",
				justifyContent: "end",
			}}
		>
			<Typography variant="body2" component="p" sx={{ mt: 2, fontWeight: "500" }}>
				Degrees:
			</Typography>
			<ToggleButtonGroup
				size="small"
				value={degrees}
				exclusive
				onChange={handleChange}
				sx={{ mt: 2, padding: 0, height: "25px" }}
			>
				<ToggleButton
					value="C"
					sx={{ fontWeight: degrees === "C" ? "800" : "500" }}
				>
					Cº
				</ToggleButton>
				<ToggleButton
					value="F"
					sx={{ fontWeight: degrees === "F" ? "800" : "500" }}
				>
					Fº
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
};
