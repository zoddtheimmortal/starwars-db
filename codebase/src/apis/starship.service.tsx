import { Component, For, createResource, createSignal } from "solid-js";
import { supabase } from "../utils/supabase";
import Dropdown from "../components/ui/dropdown";
import FactionService from "./faction.service";
import styles from "../style.module.css";

async function getStarships() {
	let { data: starships, error } = await supabase.from("starship").select();
	return starships;
}

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

const [name, setName] = createSignal("");
const [fuel, setFuel] = createSignal("");
const [maxFuel, setMaxFuel] = createSignal("");
const [maxSpeed, setMaxSpeed] = createSignal("");
const [minPrice, setMinPrice] = createSignal("");
const [maxPrice, setMaxPrice] = createSignal("");
const [payload, setPayload] = createSignal("");
const [manufacturer, setManufacturer] = createSignal("");
const [crew, setCrew] = createSignal("");

const [faction, setFaction] = createSignal("");
const [advLevel, setAdvLevel] = createSignal("");
const [maxDroidCount, setMaxDroidCount] = createSignal("");
const [maxWeaponCount, setMaxWeaponCount] = createSignal("");

type FormData = {
	name: string;
	fuel: string;
	maxFuel: string;
	maxSpeed: string;
	minPrice: string;
	maxPrice: string;
	payload: string;
	manufacturer: string;
	crew: string;
	faction: string;
	advLevel: string;
	maxDroidCount: string;
	maxWeaponCount: string;
};

const filters: () => FormData = () => {
	let formData: any = {};

	if (name() !== "") formData.name = { op: "=", val: name() };
	if (fuel() !== "") formData.fuel_type = { op: "=", val: fuel() };
	if (maxFuel() !== "") formData.fuel_capacity = { op: "<=", val: maxFuel() };
	if (maxSpeed() !== "") formData.max_speed = { op: "<=", val: maxSpeed() };
	if (minPrice() !== "") formData.price = { op: ">=", val: minPrice() };
	if (maxPrice() !== "") formData.price = { op: "<=", val: maxPrice() };
	if (payload() !== "") formData.payload = { op: "=", val: payload() };
	if (manufacturer() !== "")
		formData.manufacturer = { op: "=", val: manufacturer() };
	if (crew() !== "") formData.crew = { op: "=", val: crew() };
	if (faction() !== "") formData.owned_by = { op: "=", val: faction() };
	if (advLevel() !== "")
		formData.advancement_level = { op: "=", val: advLevel() };
	if (maxDroidCount() !== "")
		formData.droid_count = { op: "<=", val: maxDroidCount() };
	if (maxWeaponCount() !== "")
		formData.weapon_count = { op: "<=", val: maxWeaponCount() };

	return formData;
};

const getData = async (filters: FormData) => {
	if (!filters || Object.keys(filters).length === 0) return getStarships();
};

const Options: Component<{}> = () => {
	return (
		<div>
			<div class="card w-full bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Starship Filtering Options</h2>
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
										Search Ship Name
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
										Set Starship Name
									</span>
								</div>
							</label>
						</div>
						<label class="</div>form-control w-full max-w-xs">
							<Dropdown
								name="Fuel Type"
								getOptions={getFuel}
								setOptions={setFuel}
							/>
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
								onChange={(e) => setMaxFuel(e.target.value)}
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
								onChange={(e) => setMaxSpeed(e.target.value)}
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
											onChange={(e) =>
												setMinPrice(e.target.value)
											}
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
											onChange={(e) =>
												setMaxPrice(e.target.value)
											}
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
									setOptions={setPayload}
								/>
							</label>
						</div>
						<div>
							<Dropdown
								name="Manufacturer"
								getOptions={getOwner}
								setOptions={setManufacturer}
							/>
						</div>
						<div>
							<Dropdown
								name="Crew"
								getOptions={getCrew}
								setOptions={setCrew}
							/>
						</div>
					</div>
					<div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Faction</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<Dropdown
											name="Faction"
											getOptions={
												FactionService.getFactionNames
											}
											setOptions={setFaction}
										/>
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
														setAdvLevel("Type 1")
													}
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													onClick={(e) =>
														setAdvLevel("Type 2")
													}
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													onClick={(e) =>
														setAdvLevel("Type 3")
													}
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													checked
													onClick={(e) =>
														setAdvLevel("Type 4")
													}
												/>
												<input
													type="radio"
													name="rating-1"
													class="mask mask-star"
													onClick={(e) =>
														setAdvLevel("Type 5")
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
					</div>
				</div>
			</div>
		</div>
	);
};

const StarshipCard: Component<{ ssp: any }> = (props) => {
	return (
		<div>
			<div
				class={`card w-84 h-96 bg-base-100 shadow-xl image-full bg-contain ${styles.card}`}
			>
				<figure>
					<img src={props.ssp.image} alt={props.ssp.name} class="" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-bold text-3xl line-clamp-1">
						{props.ssp.name}
					</h2>
					<code>
						<div class="line-clamp-1">Price: {props.ssp.price}</div>
						<div class="line-clamp-1">Crew: {props.ssp.crew}</div>
						<div class="line-clamp-1">
							Payload: {props.ssp.payload}
						</div>
						<div class="line-clamp-1">
							Maximum Speed: {props.ssp.max_speed}
						</div>
						<div class="line-clamp-1">
							Fuel Type: {props.ssp.fuel_type}
						</div>
						<div class="line-clamp-1">
							Fuel Capacity: {props.ssp.fuel_capacity}
						</div>
						<div class="line-clamp-1">
							Manufacturer: {props.ssp.manufacturer}
						</div>
						<div class="line-clamp-1">
							Owned by: {props.ssp.owned_by}
						</div>
					</code>
					<div class="card-actions justify-end mt-1">
						<a
							class="btn btn-primary"
							href={`/starships/${props.ssp.vin}`}
						>
							Know More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const getFilterDrawer: Component<{}> = () => {
	const [results, { refetch }] = createResource(() => getData(filters()));

	const clearFilters = () => {
		setName("");
		setFuel("");
		setMaxFuel("");
		setMaxSpeed("");
		setMinPrice("");
		setMaxPrice("");
		setPayload("");
		setManufacturer("");
		setCrew("");
		setFaction("");
		setAdvLevel("");
		setMaxDroidCount("");
		setMaxWeaponCount("");
		refetch();
	};

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
					{results() && results().length > 0 ? (
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
									{(ssp) => <StarshipCard ssp={ssp} />}
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
	getStarships,
};

export default StarshipService;
