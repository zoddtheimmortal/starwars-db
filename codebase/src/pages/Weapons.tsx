import {
	Component,
	For,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";
import Search from "../components/ui/search";
import { A, useNavigate } from "@solidjs/router";
import Links from "../assets/links.service";

async function getWeapons() {
	let { data: weapon, error } = await supabase.from("weapon").select();
	return weapon;
}

const getQuery = async (query: string) => {
	if (query === "") return getWeapons();
	const { data: people, error } = await supabase
		.from("weapon")
		.select()
		.textSearch("fulltext_weapon", query);

	if (error) console.error(error);
	return weapon;
};

const WeaponCard: Component<{ wpn: any }> = (props) => {
	const image: string = props.wpn.image ? props.wpn.image : Links.weapon;
	return (
		<div>
			<div class="card w-84 h-96 bg-base-100 shadow-xl image-full bg-contain">
				<figure>
					<img src={image} alt={props.wpn.name} class="" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-bold text-3xl">
						{props.wpn.name}
					</h2>
					<code>
						<div class="line-clamp-1">Damage: {props.wpn.damage}</div>
						<div class="line-clamp-1">Type: {props.wpn.type}</div>
						<div class="line-clamp-1">Manufacturer: {props.wpn.manufacturer}</div>
						<div class="line-clamp-1">Range: {props.wpn.range}</div>
					</code>
					<div class="card-actions justify-end mt-1">
						<A
							href={`/weapon/${props.wpn.model_no}`}
							class="btn btn-primary"
						>
							Know More
						</A>
					</div>
				</div>
			</div>
		</div>
	);
};

const Weapons: Component<{}> = (props) => {
	const [query, setQuery] = createSignal("");
	const [weapon, { refetch }] = createResource(() => getQuery(query()));
	const nav = useNavigate();

	const handleSearchSubmit = (value: string) => {
		setQuery(value);
		refetch();
	};

	return (
		<>
			<div class={styles.App}>
				<Search onSubmit={handleSearchSubmit} />
				<div class="text-sm breadcrumbs mx-6 mb-2">
					<ul>
						<li>
							<a href="/home" onClick={() => nav("/home")}>
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
							</a>
						</li>
						<li>
							<a
								href="/weapons"
								onClick={() => nav("/weapons")}
							>
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
							    Weapons
							</a>
						</li>
					</ul>
				</div>
				{weapon() ? (
					<div class="mx-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<For each={weapon()}>
							{(wpn) => <WeaponCard wpn={wpn} />}
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

export default Weapons;
