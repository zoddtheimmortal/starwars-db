/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Route, Router } from "@solidjs/router";
import { ThemeProvider, createTheme } from "@suid/material";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Characters from "./pages/Characters";

const root = document.getElementById("root");

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
	);
}

render(
	() => (
		<ThemeProvider theme={darkTheme}>
			<Router root={Base}>
				<Route path="/" component={App} />
				<Route path="/home" component={Home} />
				<Route path="/characters" component={Characters} />
			</Router>
		</ThemeProvider>
	),
	root!
);
