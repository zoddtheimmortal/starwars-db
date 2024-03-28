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
import Links from "../assets/links.service";

const getUserWithId = async (id: string) => {
	const { data: people, error } = await supabase
		.from("people")
		.select()
		.eq("pin", id);
	return people[0];
};

const Character: Component<{}> = (props) => {
	const params = useParams();
	const [people] = createResource(() => getUserWithId(params.id));

	return (
		<>
			<div class={styles.App}>
				{people() ? (
					<div
						class="hero min-h-screen"
						style={`background-image: url(${people()?.image});`}
					>
						<div class="hero-overlay bg-opacity-60"></div>
						<div class="hero-content text-center text-neutral-content">
							<div class="max-w-md">
								<div class="flex flex-shrink w-full">
									<div class="grid flex-grow card rounded-box place-items-center">
										<div class="">
											<span class="text-5xl font-bold">
												{people().name}
											</span>
											<div class="mt-4 grid grid-cols-1 gap-2">
												<code class="">
													<div class="text-xl">
														<span class="font-semibold">
															Birth_Year:{" "}
														</span>
														{people().birth_year}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Faction:{" "}
														</span>
														{people()?.faction}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Birth_Planet:{" "}
														</span>
														{people().birth_year}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Personality:{" "}
														</span>
														{people()?.personality}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Gender:{" "}
														</span>
														{people()?.gender}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Height:{" "}
														</span>
														{people()?.height}cm
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Weight:{" "}
														</span>
														{people()?.weight}kg
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
											{people()?.description}
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
