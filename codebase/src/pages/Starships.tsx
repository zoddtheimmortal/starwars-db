import { Component, For, createResource, createSignal } from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";
import Search from "../components/ui/search";
import { A } from "@solidjs/router";

async function getStarships() {
	let { data: starships, error } = await supabase.from("starship").select();
	return factions;
}

const StarshipCard: Component<{ fct: any }> = (props) => {
	return (
		<div>
			<div
				class={`card w-84 h-96 bg-base-100 shadow-xl image-full bg-contain ${styles.card}`}
			>
				<figure>
					<img src={props.ssp.image} alt={props.ssp.name} class="" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-bold text-3xl">
						{props.ssp.name}
					</h2>
					<code>
						<div>Price: {props.ssp.price}</div>
						<div>
							Crew: {props.ssp.crew}
						</div>
						<div>Payload: {props.ssp.payload}</div>
						<div>Maximum Speed: {props.ssp.max_speed}</div>
            <div>Fuel Type: {props.ssp.fuel_type}</div>
            <div>Fuel Capacity: {props.ssp.fuel_capacity}</div>
            <div>Manufacturer: {props.ssp.manufacturer}</div>
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
				<div class="mx-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
					<For each={starship()}>
						{(ssp) => <StarshipCard fct={fct} />}
					</For>
				</div>
			</div>
		</>
	);
};

export default Starships;
