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
	const { data: species, error } = await supabase
		.from("species")
		.select()
		.eq("name", name);
	return species[0];
};

const Species: Component<{}> = (props) => {
	const params = useParams();
	const [species] = createResource(() =>
		getUserWithId(params.name.split("%20").join(" "))
	);

	return (
		<>
			<div class={styles.App}>
				{species() ? (
					<div
						class="hero min-h-screen"
						style={`background-image: url(${species()?.image});`}
					>
						<div class="hero-overlay bg-opacity-60"></div>
						<div class="hero-content text-center text-neutral-content">
							<div class="max-w-md">
								<div class="flex flex-shrink w-full">
									<div class="grid flex-grow card rounded-box place-items-center">
										<div class="">
											<span class="text-5xl font-bold">
												{species()?.name}
											</span>
											<div class="mt-4 grid grid-cols-1 gap-2">
												<code class="">
													<div class="text-xl">
														<span class="font-semibold">
															Name:{" "}
														</span>
														{species()?.name}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Lifespan:{" "}
														</span>
														{species()?.lifespan}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Eye Colour:{" "}
														</span>
														{species()?.eye_colour}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Hair Colour:{" "}
														</span>
														{species()?.hair_colour}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Skin Colour:{" "}
														</span>
														{species()?.skin_colour}
													</div>
												</code>
											</div>
											<a
												class="btn btn-outline btn-primary mt-4"
												href={`https://starwars.fandom.com/wiki/${species()
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
											{species()?.description}
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

export default Species;
