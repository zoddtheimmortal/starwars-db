import {
	Component,
	For,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import { supabase } from "../utils/supabase";
import Dropdown from "../components/ui/dropdown";
import PlanetService from "./planet.service";
import SpeciesService from "./species.service";
import Links from "../assets/links.service";

type FormData = {
	name: string;
	gender: string;
	maxHeight: string;
	maxWeight: string;
	birthYear: string[];
	personality: string;
	faction: string;
	advLevel: string;
	maxDroidCount: string;
	maxWeaponCount: string;
	planet: string;
	galaxy: string;
	maxGravity: string;
	species: string;
	language: string;
};

const [name, setName] = createSignal("");
const [gender, setGender] = createSignal("");
const [maxHeight, setMaxHeight] = createSignal("");
const [maxWeight, setMaxWeight] = createSignal("");
const [birthYearMin, setBirthYearMin] = createSignal("");
const [birthYearMax, setBirthYearMax] = createSignal("");
const [personality, setPersonality] = createSignal("");

const [faction, setFaction] = createSignal("");
const [advLevel, setAdvLevel] = createSignal("");
const [maxDroidCount, setMaxDroidCount] = createSignal("");
const [maxWeaponCount, setMaxWeaponCount] = createSignal("");

const [planet, setPlanet] = createSignal("");
const [galaxy, setGalaxy] = createSignal("");
const [maxGravity, setMaxGravity] = createSignal("");

const [species, setSpecies] = createSignal("");
const [language, setLanguage] = createSignal("");

let filters: () => FormData = () => {
	let formData: any = {};

	if (name() !== "") formData.name = { op: "=", val: name() };
	if (gender() !== "") formData.gender = { op: "=", val: gender() };
	if (maxHeight() !== "") formData.height = { op: "<=", val: maxHeight() };
	if (maxWeight() !== "") formData.weight = { op: "<=", val: maxWeight() };
	if (birthYearMin() !== "")
		formData.birth_year = { op: ">=", val: birthYearMin() };
	if (birthYearMax() !== "")
		formData.birth_year = { op: "<=", val: birthYearMax() };
	if (personality() !== "")
		formData.personality = { op: "=", val: personality() };
	if (faction() !== "") formData.faction = { op: "=", val: faction() };
	if (advLevel() !== "") formData.advLevel = { op: "=", val: advLevel() };
	if (maxDroidCount() !== "")
		formData.droid_count = { op: "<=", val: maxDroidCount() };
	if (maxWeaponCount() !== "")
		formData.weapon_count = { op: "<=", val: maxWeaponCount() };
	if (planet() !== "") formData.planet = { op: "=", val: planet() };
	if (galaxy() !== "") formData.galaxy = { op: "=", val: galaxy() };
	if (maxGravity() !== "")
		formData.maxGravity = { op: "<=", val: maxGravity() };
	if (species() !== "") formData.species = { op: "=", val: species() };
	if (language() !== "") formData.language = { op: "=", val: language() };

	return formData;
};

async function getCharacters() {
	let { data: people, error } = await supabase.from("people").select();
	return people;
}

const getGender = async () => {
	const { data, error } = await supabase.from("distinct_gender").select("*");
	return data?.map((item) => item.gender);
};

const getPersonality = async () => {
	const { data, error } = await supabase
		.from("distinct_personality")
		.select("*");
	return data?.map((item) => item.personality);
};

const getData = async (table_name: string, filters: any) => {
	if (!filters || Object.keys(filters).length === 0) {
		return getCharacters();
	}
	let { data, error } = await supabase.rpc("filter_by_json", {
		table_name: table_name,
		filter: filters,
	});
	if (error) console.error(error);
	else return data;
};

interface OptionProps {
	onSubmit: () => void;
}

const Options: Component<OptionProps> = (props) => {
	const { onSubmit } = props;
	return (
		<div>
			<div class="card w-full bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Character Filtering Options</h2>
					<div
						class="btn btn-primary"
						onClick={() => {
							onSubmit();
							console.log(filters());
						}}
					>
						Apply Filters
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">Search Name</span>
								</div>
								<input
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
									onChange={(e) => setName(e.target.value)}
								/>
								<div class="label">
									<span class="label-text-alt">
										Set Character Name
									</span>
								</div>
							</label>
						</div>
						<div>
							<Dropdown
								name="Gender"
								getOptions={getGender}
								setOptions={setGender}
							/>
						</div>
						<div>
							<div class="label">
								<span class="label-text">Set Max Height</span>
							</div>
							<input
								type="range"
								min="30"
								max="250"
								value="200"
								class="range range-sm"
								onChange={(e) => setMaxHeight(e.target.value)}
							/>
							<div class="w-full flex justify-between text-xs px-2">
								<span>30</span>
								<span>250</span>
							</div>
						</div>
						<div>
							<div class="label">
								<span class="label-text">Set Max Weight</span>
							</div>
							<input
								type="range"
								min="0"
								max="200"
								value="180"
								class="range range-sm"
								onChange={(e) => setMaxWeight(e.target.value)}
							/>
							<div class="w-full flex justify-between text-xs px-2">
								<span>0</span>
								<span>200</span>
							</div>
						</div>
						<div>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">
										Set Birth Year Range
									</span>
								</div>
								<div class="grid grid-cols-3 gap-2">
									<div>
										<input
											type="text"
											placeholder="Min Year"
											class="input input-bordered w-full max-w-xs"
											onChange={(e) =>
												setBirthYearMin(e.target.value)
											}
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Minimum Year
											</span>
										</div>
									</div>
									<div class="divider" />
									<div>
										<input
											type="text"
											placeholder="Max Year"
											class="input input-bordered w-full max-w-xs"
											onChange={(e) =>
												setBirthYearMax(e.target.value)
											}
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Maximum Year
											</span>
										</div>
									</div>
								</div>
							</label>
						</div>
						<div>
							<Dropdown
								name="Personality"
								getOptions={getPersonality}
								setOptions={setPersonality}
							/>
						</div>
					</div>
					<div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Faction</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Filter With Faction
												</span>
											</div>
											<input
												type="text"
												placeholder="Faction Name"
												class="input input-bordered w-full max-w-xs"
												onChange={(e) =>
													setFaction(e.target.value)
												}
											/>
										</label>
									</div>
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Advancement Level
												</span>
											</div>
											<div class="rating center">
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													onClick={(e) =>
														setAdvLevel(1)
													}
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													onClick={(e) =>
														setAdvLevel(2)
													}
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													onClick={(e) =>
														setAdvLevel(3)
													}
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													checked
													onClick={(e) =>
														setAdvLevel(4)
													}
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													onClick={(e) =>
														setAdvLevel(5)
													}
												/>
											</div>
										</label>
									</div>
									<div>
										<div class="label">
											<span class="label-text">
												Set Max Droid Count
											</span>
										</div>
										<input
											type="range"
											min="0"
											max="3000"
											value="2000"
											class="range range-sm"
											step="250"
											onChange={(e) =>
												setMaxDroidCount(e.target.value)
											}
										/>
										<div class="w-full flex justify-between text-xs px-2">
											<span>0</span>
											<span>3000</span>
										</div>
									</div>
									<div>
										<div class="label">
											<span class="label-text">
												Set Max Weapon Count
											</span>
										</div>
										<input
											type="range"
											min="0"
											max="3000"
											value="1800"
											class="range range-sm"
											step="250"
											onChange={(e) =>
												setMaxWeaponCount(
													e.target.value
												)
											}
										/>
										<div class="w-full flex justify-between text-xs px-2">
											<span>0</span>
											<span>3000</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Planet</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Filter With Planet
												</span>
											</div>
											<input
												type="text"
												placeholder="Planet Name"
												class="input input-bordered w-full max-w-xs"
												onChange={(e) => e.target.value}
											/>
										</label>
									</div>
									<div>
										<Dropdown
											name="Galaxy"
											getOptions={PlanetService.getGalaxy}
											setOptions={setGalaxy}
										/>
									</div>
									<div>
										<div class="label">
											<span class="label-text">
												Set Max Gravity
											</span>
										</div>
										<input
											type="range"
											min="0"
											max="1.5"
											value="1"
											class="range range-sm"
											step="0.1"
											onChange={(e) =>
												setMaxGravity(e.target.value)
											}
										/>
										<div class="w-full flex justify-between text-xs px-2">
											<span>0</span>
											<span>1.5</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Species</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Filter With Species
												</span>
											</div>
											<input
												type="text"
												placeholder="Species Name"
												class="input input-bordered w-full max-w-xs"
												onChange={(e) =>
													setSpecies(e.target.value)
												}
											/>
										</label>
									</div>
									<div>
										<Dropdown
											name="Language"
											getOptions={
												SpeciesService.getLanguages
											}
											setOptions={setLanguage}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const PeopleCard: Component<{ ppl: any }> = (props) => {
	const image: string = props.ppl.image ? props.ppl.image : Links.people;
	return (
		<div class="z-0">
			<div class="card w-84 h-96 bg-base-100 shadow-xl image-full bg-contain">
				<figure>
					<img src={image} alt={props.ppl.name} class="" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-bold text-3xl">
						{props.ppl.name}
					</h2>
					<code>
						<div>Birth Year: {props.ppl.birth_year}</div>
						<div>Faction: {props.ppl.faction}</div>
						<div>Species: {props.ppl.species}</div>
						<div>Birth Planet: {props.ppl.birth_planet}</div>
					</code>
					<div class="card-actions justify-end mt-1">
						<a
							href={`/character/${props.ppl.pin}`}
							class="btn btn-primary"
						>
							Know More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

async function callJoinMultipleTables() {
	const { data, error } = await supabase.rpc("join_tables", {
		tables: ["people", "species", "faction"],
		join_cond: [
			{
				table1: "people",
				table2: "species",
				col1: "species",
				col2: "name",
			},
			{
				table1: "people",
				table2: "faction",
				col1: "faction",
				col2: "name",
			},
		],
	});

	if (error) {
		console.error("Error: ", error);
	} else {
		console.log("Data: ", data);
	}
}

async function callFilterJoin() {
	const { data, error } = await supabase.rpc("filter_and_join", {
		tables: ["faction", "species", "planet", "people"],
		join_cond: [
			{
				table1: "people",
				col1: "faction",
				table2: "faction",
				col2: "name",
			},
			{
				table1: "species",
				col1: "name",
				table2: "people",
				col2: "species",
			},
			{
				table1: "planet",
				col1: "name",
				table2: "people",
				col2: "birth_planet",
			},
		],
		filters: {
			height: { op: "<=", val: "200" },
			droid_count: { op: "<", val: "2000" },
			population: { op: ">", val: "1000000" },
			gender: { op: "=", val: "Female" },
			species: { op: "=", val: "Human" },
		},
	});

	if (error) {
		console.error("Error: ", error);
	} else {
		console.log("Data: ", data);
	}
}

const getFilterDrawer: Component<{}> = () => {
	const [results, { refetch }] = createResource(() =>
		getData("people", filters())
	);

	const clearFilters = () => {
		setName("");
		setGender("");
		setMaxHeight("");
		setMaxWeight("");
		setBirthYearMin("");
		setBirthYearMax("");
		setPersonality("");
		setFaction("");
		setAdvLevel("");
		setMaxDroidCount("");
		setMaxWeaponCount("");
		setPlanet("");
		setGalaxy("");
		setMaxGravity("");
		setSpecies("");
		setLanguage("");
		refetch();
	};

	return (
		<div>
			<div class="drawer">
				<input id="my-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					<label
						for="my-drawer"
						class="btn drawer-button drawer-button-close mx-4 mb-4"
					>
						Open Filters
					</label>
					<div class="btn mx-4 mb-4" onClick={() => clearFilters()}>
						Clear Filters
					</div>
					<div class="btn mx-4 mb-4" onClick={() => callFilterJoin()}>
						Test Button
					</div>
					{results() ? (
						results() && results().length > 0 ? (
							<div class="z-0 mx-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
								<For each={results()}>
									{(ppl) => <PeopleCard ppl={ppl} />}
								</For>
							</div>
						) : (
							<div>
								No Results Found, Please Change The Filters
							</div>
						)
					) : (
						<div class="hero min-h-screen">
							<span class="loading loading-dots loading-lg"></span>
						</div>
					)}
				</div>
				<div class="drawer-side">
					<label
						for="my-drawer"
						aria-label="close sidebar"
						class="drawer-overlay z-40"
					></label>
					<div class="z-40">
						<Options onSubmit={refetch} />
					</div>
				</div>
			</div>
		</div>
	);
};

const CharacterService = {
	Options,
	getGender,
	getPersonality,
	getFilterDrawer,
};

export default CharacterService;
