import { Component, For, createResource, createSignal } from "solid-js";
import { supabase } from "../utils/supabase";
import Dropdown from "../components/ui/dropdown";
import PlanetService from "./planet.service";
import CharacterService from "./character.service";
import SpeciesService from "./species.service";

type FormData = {
	name: string;
	weaponCount: string;
	droidCount: string;
	advLevel: string;
	minInceptionDate: string;
	maxInceptionDate: string;
	planet: string;
	galaxy: string;
	maxGravity: string;
	species: string;
	leader: string;
};

const getFactionNames = async () => {
	const { data, error } = await supabase.from("faction").select("name");
	console.log(data);
	return data?.map((item) => item.name);
};

async function getFactions() {
	let { data: factions, error } = await supabase.from("faction").select();
	return factions;
}

const getPersonality = async () => {
	const { data, error } = await supabase
		.from("distinct_personality")
		.select("*");
	return data?.map((item) => item.personality);
};

const [name, setName] = createSignal("");
const [weaponCount, setWeaponCount] = createSignal("");
const [droidCount, setDroidCount] = createSignal("");
const [advLevel, setAdvLevel] = createSignal("");
const [minInceptionDate, setMinInceptionDate] = createSignal("");
const [maxInceptionDate, setMaxInceptionDate] = createSignal("");

const [planet, setPlanet] = createSignal("");
const [galaxy, setGalaxy] = createSignal("");
const [maxGravity, setMaxGravity] = createSignal("");

const [species, setSpecies] = createSignal("");

const [leader, setLeader] = createSignal("");
const [gender, setGender] = createSignal("");
const [personality, setPersonality] = createSignal("");

let filters: () => FormData = () => {
	let formData: any = {};
	if (name() !== "") formData.name = { op: "=", val: name() };
	if (weaponCount() !== "")
		formData.weapon_count = { op: "<=", val: weaponCount() };
	if (droidCount() !== "")
		formData.droid_count = { op: "<=", val: droidCount() };
	if (advLevel() !== "")
		formData.advancement_level = { op: "=", val: advLevel() };
	if (minInceptionDate() !== "")
		formData.doi = { op: ">=", val: minInceptionDate() };
	if (maxInceptionDate() !== "")
		formData.doi = { op: "<=", val: maxInceptionDate() };
	if (planet() !== "") formData.base_planet = { op: "=", val: planet() };
	if (galaxy() !== "") formData.galaxy = { op: "=", val: galaxy() };
	if (maxGravity() !== "") formData.gravity = { op: "<=", val: maxGravity() };
	if (species() !== "") formData.species = { op: "=", val: species() };
	if (leader() !== "") formData.leader = { op: "=", val: leader() };
	if (personality() !== "")
		formData.personality = { op: "=", val: personality() };
	if (gender() !== "") formData.gender = { op: "=", val: gender() };

	return formData;
};

const Options: Component<{}> = () => {
	return (
		<div>
			<div class="card w-full bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Faction Filtering Options</h2>
					<div
						class="btn btn-primary"
						onClick={() => {
							console.log(filters());
						}}
					>
						Apply Filters
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div>
							<label class="</div>form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">
										Search by Name
									</span>
								</div>
								<input
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
									onChange={(e) => setName(e.target.value)}
								/>
								<div class="label">
									<span class="label-text-alt">
										Set Faction Name
									</span>
								</div>
							</label>
							<div></div>
						</div>

						<div>
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
									onChange={(e) =>
										setWeaponCount(e.target.value)
									}
								/>
								<div class="w-full flex justify-between text-xs px-2">
									<span>0</span>
									<span>3000</span>
								</div>
							</div>
							<div class="label">
								<span class="label-text">
									Set Max Droid Count
								</span>
							</div>
							<input
								type="range"
								min="0"
								max="3000"
								value="200"
								class="range range-sm"
								onChange={(e) => setDroidCount(e.target.value)}
							/>
							<div class="w-full flex justify-between text-xs px-2">
								<span>0</span>
								<span>3000</span>
							</div>
						</div>
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
									onClick={(e) => setAdvLevel("Type 1")}
								/>
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
									onClick={(e) => setAdvLevel("Type 2")}
								/>
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
									onClick={(e) => setAdvLevel("Type 3")}
								/>
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
									checked
									onClick={(e) => setAdvLevel("Type 4")}
								/>
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
									onClick={(e) => setAdvLevel("Type 5")}
								/>
							</div>
						</label>
						<div>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">
										Set Inception Time Range
									</span>
								</div>
								<div class="grid grid-cols-3 gap-2">
									<div>
										<input
											type="datetime-local"
											placeholder="Min Year"
											class="input input-bordered w-full max-w-xs"
											onChange={(e) =>
												setMinInceptionDate(
													e.target.value
												)
											}
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Minimum Date
											</span>
										</div>
									</div>
									<div class="divider"></div>
									<div>
										<input
											type="datetime-local"
											placeholder="Max Year"
											class="input input-bordered w-full max-w-xs"
											onChange={(e) =>
												setMaxInceptionDate(
													e.target.value
												)
											}
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Maximum Date
											</span>
										</div>
									</div>
								</div>
							</label>
						</div>
					</div>
					<div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Character</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<Dropdown
											name="Leader"
											getOptions={
												CharacterService.getCharacterName
											}
											setOptions={setLeader}
										/>
									</div>
									<div>
										<Dropdown
											name="Gender"
											getOptions={
												CharacterService.getGender
											}
											setOptions={setGender}
										/>
									</div>
									<div>
										<Dropdown
											name="Personality"
											getOptions={
												CharacterService.getPersonality
											}
											setOptions={setPersonality}
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Planet</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
									<div>
										<Dropdown
											name="Base Planet"
											getOptions={
												PlanetService.getPlanetNames
											}
											setOptions={setPlanet}
										/>
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
										<Dropdown
											name="Species"
											getOptions={
												SpeciesService.getSpeciesNames
											}
											setOptions={setSpecies}
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

const getFilterDrawer: Component<{}> = () => {
	// const [results, { refetch }] = createResource(() => getData(filters()));

	// const clearFilters = () => {
	// 	setName("");
	// 	setGender("");
	// 	setMaxHeight("");
	// 	setMaxWeight("");
	// 	setBirthYearMin("");
	// 	setBirthYearMax("");
	// 	setPersonality("");
	// 	setFaction("");
	// 	setAdvLevel("");
	// 	setMaxDroidCount("");
	// 	setMaxWeaponCount("");
	// 	setPlanet("");
	// 	setGalaxy("");
	// 	setMaxGravity("");
	// 	setSpecies("");
	// 	setLanguage("");
	// 	refetch();
	// };

	return (
		<div>
			<div class="drawer">
				<input id="my-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					<label
						for="my-drawer"
						class="btn drawer-button drawer-button-close mx-4 mb-2"
					>
						Open Filters
					</label>
					<div class="btn mx-4 mb-2" onClick={() => {}}>
						Clear Filters
					</div>
					{/* {results() && results().length > 0 ? (
						<div class="text-xl mb-4">
							Found{" "}
							<span class="font-bold">{results()?.length}</span>{" "}
							Results!
						</div>
					) : (
						<></>
					)}
					{results() ? (
						results().length > 0 ? (
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
					)} */}
				</div>
				<div class="drawer-side">
					<label
						for="my-drawer"
						aria-label="close sidebar"
						class="drawer-overlay z-40"
					></label>
					<div class="z-40">
						<Options />
					</div>
				</div>
			</div>
		</div>
	);
};

const FactionService = {
	getFilterDrawer,
	getPersonality,
	getFactionNames,
	getFactions,
};

export default FactionService;
