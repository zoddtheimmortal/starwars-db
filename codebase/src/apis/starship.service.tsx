import { Component, createResource } from "solid-js";
import { supabase } from "../utils/supabase";
import Dropdown from "../components/ui/dropdown";
import PlanetService from "./planet.service";

const getStarshipNames = async () => {
	const { data, error } = await supabase.from("starship").select("name");
	return data?.map((item) => item.name);
};

const getOwner = async () => {
	const { data, error } = await supabase.from("distinct_owner").select("*");
	return data?.map((item) => item.manufacturer);
};

const getFuel = async () => {
	const { data, error } = await supabase.from("distinct_fuel").select("*");
	return data?.map((item) => item.fuel_type);
};

const getPayload = async () => {
	const { data, error } = await supabase.from("distinct_payload").select("*");
	return data?.map((item) => item.payload);
};

const getCrew = async () => {
	const { data, error } = await supabase.from("distinct_crew").select("*");
	return data?.map((item) => item.crew);
};

const Options: Component<{}> = () => {
	return (
		<div>
			<div class="card w-full bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Starship Filtering Options</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div>
							<label class="</div>form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">
										Search Ship Name
									</span>
								</div>
								<input
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
								/>
								<div class="label">
									<span class="label-text-alt">
										Set Starship Name
									</span>
								</div>
							</label>
						</div>
						<label class="</div>form-control w-full max-w-xs">
							<Dropdown name="Fuel Type" getOptions={getFuel} />
						</label>

						<div>
							<div class="label">
								<span class="label-text">
									Set Max Fuel Capacity
								</span>
							</div>
							<input
								type="range"
								min="30"
								max="250"
								value="200"
								class="range range-sm"
							/>
							<div class="w-full flex justify-between text-xs px-2">
								<span>10</span>
								<span>12300</span>
							</div>
						</div>
						<div>
							<div class="label">
								<span class="label-text">Set Max Speed</span>
							</div>
							<input
								type="range"
								min="0"
								max="200"
								value="180"
								class="range range-sm"
							/>
							<div class="w-full flex justify-between text-xs px-2">
								<span>50</span>
								<span>120</span>
							</div>
						</div>
						<div>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">
										Set Price Range
									</span>
								</div>
								<div class="grid grid-cols-3 gap-2">
									<div>
										<input
											type="text"
											placeholder="Min Price"
											class="input input-bordered w-full max-w-xs"
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Minimum Price
											</span>
										</div>
									</div>
									<div class="divider" />
									<div>
										<input
											type="text"
											placeholder="Max Pricer"
											class="input input-bordered w-full max-w-xs"
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Maximum Price
											</span>
										</div>
									</div>
								</div>
								<Dropdown
									name="Payload"
									getOptions={getPayload}
								/>
							</label>
						</div>
						<div>
							<Dropdown
								name="Manufacturer"
								getOptions={getOwner}
							/>
							<div style="margin-top: 47px;">
								<Dropdown name="Crew" getOptions={getCrew} />
							</div>
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
													Filter With Owner Faction
												</span>
											</div>
											<input
												type="text"
												placeholder="Faction Name"
												class="input input-bordered w-full max-w-xs"
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
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													checked
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
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
										/>
										<div class="w-full flex justify-between text-xs px-2">
											<span>0</span>
											<span>3000</span>
										</div>
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
					<div class="btn mx-4 mb-2" onClick={() => clearFilters()}>
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
					)} */}
					{/* {results() ? (
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

const StarshipService = {
	getFilterDrawer,
	getOwner,
	getFuel,
	getPayload,
	getCrew,
	getStarshipNames,
};

export default StarshipService;
