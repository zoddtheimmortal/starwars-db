import { Component, For, createResource, createSignal } from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";
import Search from "../components/ui/search";
import { A } from "@solidjs/router";

async function getStarships() {
	let { data: starships, error } = await supabase.from("starship").select();
	return starships;
}

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
						<div>Price: {props.ssp.price}</div>
						<div>Crew: {props.ssp.crew}</div>
						<div>Payload: {props.ssp.payload}</div>
						<div>Maximum Speed: {props.ssp.max_speed}</div>
						<div>Fuel Type: {props.ssp.fuel_type}</div>
						<div>Fuel Capacity: {props.ssp.fuel_capacity}</div>
						<div class="line-clamp-1">
							Manufacturer: {props.ssp.manufacturer}
						</div>
						<div>Owned by: {props.ssp.owned_by}</div>
					</code>
					<div class="card-actions justify-end mt-1">
						<A
							class="btn btn-primary"
							href={`/starships/${props.ssp.vin}`}
						>
							Know More
						</A>
					</div>
				</div>
			</div>
		</div>
	);
};

const Starships: Component<{}> = (props) => {
	const [starship] = createResource(getStarships);

	return (
		<>
			<div class={styles.App}>
				<Search />
				<div class="text-sm breadcrumbs mx-6 mb-2">
					<ul>
						<li>
							<A href="/home">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="w-4 h-4 stroke-current"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
									></path>
								</svg>
								Home
							</A>
						</li>
						<li>
							<A href="/starships">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="w-4 h-4 stroke-current"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
									></path>
								</svg>
								Starships
							</A>
						</li>
					</ul>
				</div>
				<div class="mx-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
					<For each={starship()}>
						{(ssp) => <StarshipCard ssp={ssp} />}
					</For>
				</div>
			</div>
		</>
	);
};

export default Starships;
