import { Component } from "solid-js";
import styles from "../style.module.css";
import Card from "../components/ui/card";
import Links from "../assets/links.service";
import Search from "../components/ui/search";

const Home: Component<{}> = (props) => {
	return (
		<>
			<div class={styles.App}>
				<Search />
				<div class="grid grid-cols-1 sm:grid-cols-3 mx-6 gap-x-4 gap-y-6 mb-6">
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
							freighter, bursts with personality.
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
							crushing telekinesis.
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
							galactic capital.
						</div>
					</Card>
					<Card title="Droids" src={Links.droids}>
						<div>
							Star Wars whirls with loyal droids! Protocol droids
							like C-3PO navigate etiquette, while astromech
							droids like R2-D2 zip around fixing starships.
							Bounty hunters employ deadly droids, and even
							empires rely on droid armies.
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Home;
