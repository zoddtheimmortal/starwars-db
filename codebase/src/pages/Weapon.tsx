import { useParams } from "@solidjs/router";
import {
	Component,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";

const getUserWithId = async (model_no: string) => {
	const { data: weapon, error } = await supabase
		.from("weapon")
		.select()
		.eq("model_no", model_no);
	return weapon[0];
};

const Weapon: Component<{}> = (props) => {
	const params = useParams();
	const [weapon] = createResource(() =>
		getUserWithId(params.model_no)
	);

	return (
		<>
			<div class={styles.App}>
				{weapon()? (
					<div
						class="hero min-h-screen"
						style={`background-image: url(${weapon()?.image});`}
					>
						<div class="hero-overlay bg-opacity-60"></div>
						<div class="hero-content text-center text-neutral-content">
							<div class="max-w-md">
								<div class="flex flex-shrink w-full">
									<div class="grid flex-grow card rounded-box place-items-center">
										<div class="">
											<span class="text-5xl font-bold">
												{weapon()?.name}
											</span>
											<div class="mt-4 grid grid-cols-1 gap-2">
												<code class="">
													<div class="text-xl">
														<span class="font-semibold">
															Name:{" "}
														</span>
														{weapon()?.name}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Damage:{" "}
														</span>
														{
															weapon()?.damage
														}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Type:{" "}
														</span>
														{ weapon()?.type}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Manufacturer:{" "}
														</span>
														{
															weapon()?.manufacturer
														}
													</div>
													<div class="text-xl">
														<span class="font-semibold">
															Range:{" "}
														</span>
														{weapon()?.range}
													</div>
													
					
												</code>
											</div>
											<a
												class="btn btn-outline btn-primary mt-4"
												href={`https://starwars.fandom.com/wiki/${weapon()
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
											{weapon()?.description}
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

export default Weapon;
