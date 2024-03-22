import { Component } from "solid-js";
import Nav from "../components/main_nav";
import styles from "../style.module.css";
import Card from "../components/ui/card";
import Links from "../assets/images.service";

const Home: Component<{}> = (props) => {
	return (
		<>
			<Nav />
			<div class={styles.App}>
				<div class="m-6">
					<label class="input input-bordered bg-base-300 flex items-center gap-2">
						<input type="text" class="grow" placeholder="Search" />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4 opacity-70"
						>
							<path
								fill-rule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clip-rule="evenodd"
							/>
						</svg>
					</label>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-3 mx-6 gap-x-3 gap-y-6">
					<Card title="Characters" src={Links.people}>
						<div>
							Star Wars brims with heroes and villains. Jedi
							Knights, with laser swords and mystical powers,
							fight Sith fueled by rage. Rebels defy a cruel
							empire, led by brave princesses and resourceful
							smugglers
						</div>
					</Card>
					<Card title="Factions" src={Links.faction}>
						<div>
							Star Wars factions clash for galactic dominance.
							Jedi Knights and the peaceful Republic face the dark
							power of the Sith Empire. Rebellions ignite against
							tyranny, while bounty hunters chase credits.
						</div>
					</Card>
					<Card title="Factions" src={Links.starship}>
						<div>
							In Star Wars, starships zoom through space, each
							with a purpose. Rebel X-wings zip through dogfights,
							while Imperial Star Destroyers dominate
							battlefields. Millennium Falcon, a smuggler's
							freighter, bursts with personality. Even medical
							frigates and droid carriers play vital roles in the
							galactic drama.
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Home;
