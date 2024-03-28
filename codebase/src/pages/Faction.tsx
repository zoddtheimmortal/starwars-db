import { useParams } from "@solidjs/router";
import {
	Component,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";
import Search from "../components/ui/search";
import { Skeleton } from "@suid/material";

const getUserWithId = async (id: string) => {
	const { data: faction, error } = await supabase
		.from("faction")
		.select()
		.eq("name", id);
	return faction[0];
};

const Character: Component<{}> = (props) => {
	const params = useParams();
	const [faction] = createResource(() => getUserWithId(params.id));

	createEffect(() => {
		console.log(faction());
	});

	return (
		<>
			<div class={styles.App}>
				{faction() ? (
					<div
						class="hero min-h-screen"
						style={`background-image: url(${faction().image});`}
					>
						<div class="hero-overlay bg-opacity-60"></div>
						<div class="hero-content text-center text-neutral-content">
							<div class="max-w-md">
								<div class="flex flex-shrink w-full">
									<div class="grid flex-grow card rounded-box place-items-center">
										<div class="">
											<span class="text-5xl font-bold">
												{faction().name}
											</span>
											<div class="mt-4 grid grid-cols-1 gap-2">
												<code class="">
													<div class="text-xl">
														<span class="font-semibold">
															Date_of_Inception:{" "}
														</span>
														{faction().doi}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Advancement_Level:{" "}
														</span>
														{faction()?.advancement_level}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Droid_Count:{" "}
														</span>
														{faction().droid_count}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Weapon_Count:{" "}
														</span>
														{faction()?.weapon_count}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Base_Planet:{" "}
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
												href={`https://starwars.fandom.com/wiki/${people()
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

export default Character;
