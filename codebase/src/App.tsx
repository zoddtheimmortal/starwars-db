import { createEffect, createResource, type Component } from "solid-js";

import styles from "./style.module.css";
import Nav from "./components/main_nav";
import BasicModal from "./components/login_modal";

const App: Component = () => {
	return (
		<>
			<Nav />
			<div class={styles.App}>
				<div class="hero min-h-screen bg-base-200">
					<div class="hero-content text-center">
						<div class="max-w-md">
							<h1 class="text-6xl font-bold">
								<code>starwars-db</code>
							</h1>
							<p class="pt-2">
								Star Wars Galactic Management System.{" "}
							</p>
							<p class="pb-6">
								A deep dive into the Star Wars Universe.
							</p>
							<BasicModal />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
