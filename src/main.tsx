import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

import { SnackbarProvider } from "notistack";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SnackbarProvider>
			<StyledEngineProvider injectFirst>
				<App />
			</StyledEngineProvider>
		</SnackbarProvider>
	</React.StrictMode>
);
