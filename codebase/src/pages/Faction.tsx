import { useParams } from "@solidjs/router";
import {
	Component,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";

const getUserWithId = async (name: string) => {
	const { data: faction, error } = await supabase
		.from("faction")
		.select()
		.eq("name", name);
	return faction[0];
};

const Faction: Component<{}> = (props) => {
	const params = useParams();
	const [faction] = createResource(() =>
		getUserWithId(params.name.split("%20").join(" "))
	);

	createEffect(() => {
		console.log(faction());
	});

	return (
		<>
			<div class={styles.App}>
				{faction() ? (
					<div
						class="hero min-h-screen"
						style={`background-image: url(${faction()?.image});`}
					>
						<div class="hero-overlay bg-opacity-60"></div>
						<div class="hero-content text-center text-neutral-content">
							<div class="max-w-md">
								<div class="flex flex-shrink w-full">
									<div class="grid flex-grow card rounded-box place-items-center">
										<div class="">
											<span class="text-5xl font-bold">
												{faction()?.name}
											</span>
											<div class="mt-4 grid grid-cols-1 gap-2">
												<code class="">
													<div class="text-xl">
														<span class="font-semibold">
															Date of Inception:{" "}
														</span>
														{faction()?.doi}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Advancement Level:{" "}
														</span>
														{
															faction()
																?.advancement_level
														}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Droid Count:{" "}
														</span>
														{faction()?.droid_count}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Weapon Count:{" "}
														</span>
														{
															faction()
																?.weapon_count
														}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Base Planet:{" "}
														</span>
														{faction()?.base_planet}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Leader:{" "}
														</span>
														{faction()?.leader}
													</div>
												</code>
											</div>
											<a
												class="btn btn-outline btn-primary mt-4"
												href={`https://starwars.fandom.com/wiki/${faction()
													?.name.split(" ")
													.join("_")}`}
											>
												Go To Wiki
											</a>
										</div>
									</div>
									<div class="divider divider-horizontal" />
									<div class="grid flex-grow">
										<div class="text-pretty my-24 text-left">
											{faction()?.description}
										</div>
									</div>
								</div>
							</div>
						</div>
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

export default Faction;
