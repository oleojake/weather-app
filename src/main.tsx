import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#A04860",
		},
		secondary: {
			main: "#4caf50",
		},
		background: {
			default: "#FFBEC2",
		},
		divider: '#2D3436',
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackbarProvider>
				<App />
			</SnackbarProvider>
		</ThemeProvider>
	</React.StrictMode>
);
