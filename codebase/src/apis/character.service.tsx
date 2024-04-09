import { createEffect, createResource, createSignal } from "solid-js";
import { supabase } from "../utils/supabase";
import Dropdown from "../components/ui/dropdown";
import PlanetService from "./planet.service";
import { c, s } from "vite/dist/node/types.d-aGj9QkWt";
import SpeciesService from "./species.service";

type FormData = {
	name: string;
	gender: string;
	maxHeight: number;
	maxWeight: number;
	birthYear: number[];
	personality: string;
	faction: string;
	advLevel: number;
	maxDroidCount: number;
	maxWeaponCount: number;
	planet: string;
	galaxy: string;
	maxGravity: number;
	species: string;
	language: string;
};

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

const getDataTest = async () => {
	let { data, error } = await supabase.rpc("filter_by_json", {
		table_name: "people",
		filter: {
			birth_planet: { op: "=", val: "Kamino" },
		},
	});
	if (error) console.error(error);
	else console.log(data);
};

const getOptions = () => {
	const [name, setName] = createSignal("");
	const [gender, setGender] = createSignal("");
	const [maxHeight, setMaxHeight] = createSignal(0);
	const [maxWeight, setMaxWeight] = createSignal(0);
	const [birthYearMin, setBirthYearMin] = createSignal(0);
	const [birthYearMax, setBirthYearMax] = createSignal(0);
	const [personality, setPersonality] = createSignal("");

	const [faction, setFaction] = createSignal("");
	const [advLevel, setAdvLevel] = createSignal(0);
	const [maxDroidCount, setMaxDroidCount] = createSignal(0);
	const [maxWeaponCount, setMaxWeaponCount] = createSignal(0);

	const [planet, setPlanet] = createSignal("");
	const [galaxy, setGalaxy] = createSignal("");
	const [maxGravity, setMaxGravity] = createSignal(0);

	const [species, setSpecies] = createSignal("");
	const [language, setLanguage] = createSignal("");

	let data: () => FormData = () => ({
		name: name(),
		gender: gender(),
		maxHeight: maxHeight(),
		maxWeight: maxWeight(),
		birthYear: [birthYearMin(), birthYearMax()],
		personality: personality(),
		faction: faction(),
		advLevel: advLevel(),
		maxDroidCount: maxDroidCount(),
		maxWeaponCount: maxWeaponCount(),
		planet: planet(),
		galaxy: galaxy(),
		maxGravity: maxGravity(),
		species: species(),
		language: language(),
	});

	return (
		<div>
			<div class="card w-full bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Character Filtering Options</h2>
					<div
						class="btn btn-primary"
						onClick={() => {
							console.log(data());
							getDataTest();
						}}
					>
						Test Button
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
								onChange={(e) =>
									setMaxHeight(Number(e.target.value))
								}
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
								onChange={(e) =>
									setMaxWeight(Number(e.target.value))
								}
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
												setBirthYearMin(
													Number(e.target.value)
												)
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
												setBirthYearMax(
													Number(e.target.value)
												)
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
												setMaxDroidCount(
													Number(e.target.value)
												)
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
													Number(e.target.value)
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
												onChange={(e) =>
													setPlanet(e.target.value)
												}
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
												setMaxGravity(
													Number(e.target.value)
												)
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

const CharacterService = {
	getOptions,
	getGender,
	getPersonality,
};

export default CharacterService;
