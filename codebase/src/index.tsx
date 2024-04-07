/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Route, Router } from "@solidjs/router";
import { ThemeProvider, createTheme } from "@suid/material";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Factions from "./pages/Factions";
import Faction from "./pages/Faction";
import Starships from "./pages/Starships";
import Starship from "./pages/Starship";
import Planets from "./pages/Planets";
import Planet from "./pages/Planet";
import Specie from "./pages/Specie";
import Species from "./pages/Species";
import Search from "./pages/Search";

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
				<Route path="/character/:id" component={Character} />
				<Route path="/factions" component={Factions} />
				<Route path="/factions/:name" component={Faction} />
				<Route path="/starships" component={Starships} />
				<Route path="/starships/:vin" component={Starship} />
				<Route path="/planets" component={Planets} />
				<Route path="/planets/:name" component={Planet} />
				<Route path="/species" component={Species} />
				<Route path="/species/:name" component={Specie} />
				<Route path="/search" component={Search} />
			</Router>
		</ThemeProvider>
	),
	root!
);
