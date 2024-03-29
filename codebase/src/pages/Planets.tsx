import { Component, For, createResource, createSignal } from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";
import Search from "../components/ui/search";
import { A } from "@solidjs/router";

async function getPlanets() {
	let { data: planets, error } = await supabase.from("planet").select();
	return planets;
}

const PlanetCard: Component<{ ssp: any }> = (props) => {
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
						<div class="line-clamp-1">Gravity: {props.ssp.gravity}</div>
						<div class="line-clamp-1">Population: {props.ssp.population}</div>
						<div class="line-clamp-1">
							Galaxy: {props.ssp.galaxy}
						</div>
						<div class="line-clamp-1">
							Orbital Speed: {props.ssp.orbital_speed}
						</div>
						<div class="line-clamp-1">
							Terrain: {props.ssp.terrain}
						</div>
						<div class="line-clamp-1">
							Climate: {props.ssp.climate}
						</div>
					</code>
					<div class="card-actions justify-end mt-1">
						<A
							class="btn btn-primary"
							href={`/planets/${props.ssp.name}`}
						>
							Know More
						</A>
					</div>
				</div>
			</div>
		</div>
	);
};

const Planets: Component<{}> = (props) => {
	const [planet] = createResource(getPlanets);

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
							<A href="/planets">
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
								Planets
							</A>
						</li>
					</ul>
				</div>
				{planet() ? (
					<div class="mx-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<For each={planet()}>
							{(ssp) => <PlanetCard ssp={ssp} />}
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

export default Planets;
