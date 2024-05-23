import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
	city: string;
	setCity: (city: string) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error: { error: boolean; message: string };
}

export const SearchBar: React.FC<Props> = (props) => {
	const { city, setCity, onSubmit, error } = props;
	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", gap: 2 }}
			component="form"
			autoComplete="off"
			onSubmit={onSubmit}
		>
			<TextField
				id="city"
				label="Enter your city"
				variant="filled"
				size="small"
				required
				value={city}
				onChange={(e) => setCity(e.target.value)}
				error={error.error}
				helperText={error.message}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								style={{ backgroundColor: "transparent" }}
								disableRipple={true}
								color="primary"
								type="submit"
							>
								<SearchIcon fontSize="medium" />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};
