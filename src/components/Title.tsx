import { Typography } from "@mui/material";
import BeachAccessTwoToneIcon from "@mui/icons-material/BeachAccessTwoTone";

export const Title: React.FC = () => {
	return (
		<Typography
			variant="h5"
			component="h1"
			sx={{ fontWeight: "800", mb: "10px", textAlign: "center" }}
		>
			<BeachAccessTwoToneIcon sx={{ fontSize: "32px", color: "primary.main" }} />
			weatherWhiz
		</Typography>
	);
};
