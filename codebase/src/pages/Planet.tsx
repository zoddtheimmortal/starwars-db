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
	const { data: planet, error } = await supabase
		.from("planet")
		.select()
		.eq("name", name);
	return planet[0];
};

const Planet: Component<{}> = (props) => {
	const params = useParams();
	const [planet] = createResource(() =>
		getUserWithId(params.name.split("%20").join(" "))
	);

	return (
		<>
			<div class={styles.App}>
				{planet() ? (
					<div
						class="hero min-h-screen"
						style={`background-image: url(${planet()?.image});`}
					>
						<div class="hero-overlay bg-opacity-60"></div>
						<div class="hero-content text-center text-neutral-content">
							<div class="max-w-md">
								<div class="flex flex-shrink w-full">
									<div class="grid flex-grow card rounded-box place-items-center">
										<div class="">
											<span class="text-5xl font-bold">
												{planet()?.name}
											</span>
											<div class="mt-4 grid grid-cols-1 gap-2">
												<code class="">
													<div class="text-xl">
														<span class="font-semibold">
															Name:{" "}
														</span>
														{planet()?.name}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Crew:{" "}
														</span>
														{planet()?.gravity}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Payload:{" "}
														</span>
														{planet()?.population}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Price:{" "}
														</span>
														{planet()?.galaxy}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Maximum Speed:{" "}
														</span>
														{
															planet()
																?.orbital_speed
														}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Fuel Type:{" "}
														</span>
														{planet()?.terrain}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Fuel Capacity:{" "}
														</span>
														{planet()?.climate}
													</div>
												</code>
											</div>
											<a
												class="btn btn-outline btn-primary mt-4"
												href={`https://starwars.fandom.com/wiki/${planet()
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
											{planet()?.description}
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

export default Planet;
