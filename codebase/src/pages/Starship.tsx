import { useParams } from "@solidjs/router";
import {
	Component,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";

const getUserWithId = async (vin: string) => {
	const { data: starship, error } = await supabase
		.from("starship")
		.select()
		.eq("vin", vin);
	return starship[0];
};

const Starship: Component<{}> = (props) => {
	const params = useParams();
	const [starship] = createResource(() =>
		getUserWithId(params.name.split("%20").join(" "))
	);

	return (
		<>
			<div class={styles.App}>
				{starship() ? (
					<div
						class="hero min-h-screen"
						style={`background-image: url(${starship()?.image});`}
					>
						<div class="hero-overlay bg-opacity-60"></div>
						<div class="hero-content text-center text-neutral-content">
							<div class="max-w-md">
								<div class="flex flex-shrink w-full">
									<div class="grid flex-grow card rounded-box place-items-center">
										<div class="">
											<span class="text-5xl font-bold">
												{starship()?.name}
											</span>
											<div class="mt-4 grid grid-cols-1 gap-2">
												<code class="">
													<div class="text-xl">
														<span class="font-semibold">
															Name:{" "}
														</span>
														{starship()?.name}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Crew:{" "}
														</span>
														{
															starship()
																?.crew
														}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Payload:{" "}
														</span>
														{starship()?.payload}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Price:{" "}
														</span>
														{
															starship()
																?.price
														}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Maximum Speed:{" "}
														</span>
														{starship()?.max_speed}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Fuel Type:{" "}
														</span>
														{starship()?.fuel_type}
													</div>
                          <div class="text-xl">
														<span class="font-semibold">
															Fuel Capacity:{" "}
														</span>
														{starship()?.fuel_capacity}
													</div>
                          <div class="text-xl">
														<span class="font-semibold">
															Manufacturer:{" "}
														</span>
														{starship()?.manufacturer}
													</div>
                           <div class="text-xl">
														<span class="font-semibold">
															Owned By:{" "}
														</span>
														{starship()?.owned_by}
													</div>
												</code>
											</div>
											<a
												class="btn btn-outline btn-primary mt-4"
												href={`https://starwars.fandom.com/wiki/${starship()
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
											{starship()?.description}
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
