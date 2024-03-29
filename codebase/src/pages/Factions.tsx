import { Component, For, createResource, createSignal } from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";
import Search from "../components/ui/search";
import { A } from "@solidjs/router";

async function getFactions() {
	let { data: factions, error } = await supabase.from("faction").select();
	return factions;
}

const FactionCard: Component<{ fct: any }> = (props) => {
	return (
		<div>
			<div
				class={`card w-84 h-96 bg-base-100 shadow-xl image-full bg-contain ${styles.card}`}
			>
				<figure>
					<img src={props.fct.image} alt={props.fct.name} class="" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-bold text-3xl">
						{props.fct.name}
					</h2>
					<code>
						<div>Date of Inception: {props.fct.doi}</div>
						<div>
							Advancement Level: {props.fct.advancement_level}
						</div>
						<div>Droid Count: {props.fct.droid_count}</div>
						<div>Weapon Count: {props.fct.weapon_count}</div>
					</code>
					<div class="card-actions justify-end mt-1">
						<A
							class="btn btn-primary"
							href={`/factions/${props.fct.name}`}
						>
							Know More
						</A>
					</div>
				</div>
			</div>
		</div>
	);
};

const Factions: Component<{}> = (props) => {
	const [faction] = createResource(getFactions);

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
							<A href="/factions">
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
								Factions
							</A>
						</li>
					</ul>
				</div>
				{faction() ? (
					<div class="mx-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<For each={faction()}>
							{(fct) => <FactionCard fct={fct} />}
						</For>
					</div>
				) : (
					<div class="hero min-h-screen">
						<span class="loading loading-dots loading-lg"></span>
					</div>
				)}
			</div>
		</>
	);
};

export default Factions;
