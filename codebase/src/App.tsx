import { createEffect, createResource, type Component } from "solid-js";

import styles from "./App.module.css";
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
							<p class="py-6">
								Provident cupiditate voluptatem et in. Quaerat
								fugiat ut assumenda excepturi exercitationem
								quasi. In deleniti eaque aut repudiandae et a id
								nisi.
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
