import { Theme, createTheme } from "@mui/material";

interface myThemes {
	pink: Theme;
	yellow: Theme;
	cyan: Theme;
	green: Theme;
	violet: Theme;
}


const themePink: Theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#A04860",
		},
		secondary: {
			main: "#F16C90",
		},
		background: {
			default: "#FFBEC2",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

const themeYellow: Theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#CB764D",
		},
		secondary: {
			main: "#FF9661",
		},
		background: {
			default: "#FBC2A4",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

const themeCyan: Theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#40668A",
		},
		secondary: {
			main: "#619ACF",
		},
		background: {
			default: "#95D3E2",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

const themeGreen: Theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#326B65",
		},
		secondary: {
			main: "#4CA198",
		},
		background: {
			default: "#6DC7BE",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

const themeViolet: Theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#64528E",
		},
		secondary: {
			main: "#7963AB",
		},
		background: {
			default: "#C1A3E1",
		},
	},
	typography: {
		fontFamily: "Raleway, sans serif",
	},
});

export const THEMES: myThemes = {
	pink: themePink,
	yellow: themeYellow,
	cyan: themeCyan,
	green: themeGreen,
	violet: themeViolet,
}