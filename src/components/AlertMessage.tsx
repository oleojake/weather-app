import { Alert, Snackbar } from "@mui/material";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export const AlertMessage: React.FC<Props> = (props) => {
	const { open, setOpen } = props;
	return (
		<Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
			<Alert severity="success" sx={{ width: "100%" }}>
				Weather forecast successfully loaded!
			</Alert>
		</Snackbar>
	);
};
