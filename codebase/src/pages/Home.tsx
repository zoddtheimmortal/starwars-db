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
				<div class="grid grid-cols-1 sm:grid-cols-3 mx-6 gap-x-4 gap-y-6">
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
					<Card title="Starships" src={Links.starship}>
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
					<Card title="Duels" src={Links.duels}>
						<div>
							Star Wars ignites with lightsaber clashes! Jedi,
							fueled by the Force, duel Sith shrouded in darkness.
							Heroes like Luke Skywalker face villains like Darth
							Vader in epic battles that decide the fate of the
							galaxy.
						</div>
					</Card>
					<Card title="Weapons" src={Links.weapons}>
						<div>
							Star Wars explodes with iconic weaponry! Jedi wield
							elegant lightsabers, humming with energy. Blasters
							of all shapes and sizes fill battlefields, from
							stormtrooper rifles to Han Solo's trusty blaster
							pistol. The dark side utilizes Force lightning and
							crushing telekinesis. Even lightsabers clash in
							dazzling displays of power, shaping the destiny of
							the galaxy.
						</div>
					</Card>
					<Card title="Species" src={Links.species}>
						<div>
							Star Wars teems with diverse species! Wise Yoda
							leads the diminutive Jedi, while hulking Wookiees
							roar in battle. Regal Mon Calamari command fleets,
							and cunning Twi'leks navigate galactic politics.
						</div>
					</Card>
					<Card title="Planets" src={Links.planets}>
						<div>
							Star Wars sprawls across vibrant planets! Desert
							suns scorch Tatooine, while icy Hoth chills to the
							bone. Lush forests cloak Endor, hiding Ewoks.
							Coruscant, a glittering cityscape, pulsates as the
							galactic capital. From volcanic Mustafar to
							cloud-covered Bespin, each planet offers unique
							landscapes and cultures, shaping the destinies of
							heroes and villains.
						</div>
					</Card>
					<Card title="Droids" src={Links.droids}>
						<div>
							Star Wars whirls with loyal droids! Protocol droids
							like C-3PO navigate etiquette, while astromech
							droids like R2-D2 zip around fixing starships.
							Bounty hunters employ deadly droids, and even
							empires rely on droid armies. From quirky
							personalities to unwavering service, these
							mechanical companions fuel the galactic saga.
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Home;
