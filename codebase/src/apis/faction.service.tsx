import { createResource } from "solid-js";
import { supabase } from "../utils/supabase";
import Dropdown from "../components/ui/dropdown";
import PlanetService from "./planet.service";

const getFactionNames = async () => {
	const { data, error } = await supabase.from("faction").select("name");
	console.log(data);
	return data?.map((item) => item.name);
};

const getPersonality = async () => {
	const { data, error } = await supabase
		.from("distinct_personality")
		.select("*");
	return data?.map((item) => item.personality);
};

const getOptions = () => {
	return (
		<div>
			<div class="card w-full bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Faction Filtering Options</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div>
							<label class="</div>form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">
										Search by Name
									</span>
								</div>
								<input
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
								/>
								<div class="label">
									<span class="label-text-alt">
										Set Faction Name
									</span>
								</div>
							</label>
							<div></div>
						</div>

						<div>
							<div>
								<div class="label">
									<span class="label-text">
										Set Max Weapon Count
									</span>
								</div>
								<input
									type="range"
									min="0"
									max="200"
									value="180"
									class="range range-sm"
								/>
								<div class="w-full flex justify-between text-xs px-2">
									<span>0</span>
									<span>3000</span>
								</div>
							</div>
							<div class="label">
								<span class="label-text">
									Set Max Droid Count
								</span>
							</div>
							<input
								type="range"
								min="30"
								max="250"
								value="200"
								class="range range-sm"
							/>
							<div class="w-full flex justify-between text-xs px-2">
								<span>0</span>
								<span>3000</span>
							</div>
						</div>
						<label class="</div>form-control w-full max-w-xs">
							<div class="label">
								<span class="label-text">
									Search by Base Planet
								</span>
							</div>
							<input
								type="text"
								placeholder="Type here"
								class="input input-bordered w-full max-w-xs"
							/>
							<div class="label">
								<span class="label-text-alt">
									Enter Planet Name
								</span>
							</div>
						</label>
						<label class="form-control w-full max-w-xs">
							<div class="label">
								<span class="label-text">
									Advancement Level
								</span>
							</div>
							<div class="rating center">
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
								/>
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
								/>
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
								/>
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
									checked
								/>
								<input
									type="radio"
									name="rating-1"
									class="mask mask-star"
								/>
							</div>
						</label>
						<div>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">
										Set Inception Time Range
									</span>
								</div>
								<div class="grid grid-cols-3 gap-2">
									<div>
										<input
											type="datetime-local"
											placeholder="Min Year"
											class="input input-bordered w-full max-w-xs"
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Minimum Date
											</span>
										</div>
									</div>
									<div class="divider"></div>
									<div>
										<input
											type="datetime-local"
											placeholder="Max Year"
											class="input input-bordered w-full max-w-xs"
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Maximum Date
											</span>
										</div>
									</div>
								</div>
							</label>
						</div>
					</div>
					<div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Character</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Filter With Name
												</span>
											</div>

											<input
												type="text"
												placeholder="Character Name"
												class="input input-bordered w-full max-w-xs"
											/>
										</label>
										<div>
											<Dropdown
												name="Gender"
												getOptions={getGender}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Planet</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Filter With Planet
												</span>
											</div>
											<input
												type="text"
												placeholder="Planet Name"
												class="input input-bordered w-full max-w-xs"
											/>
										</label>
									</div>
									<div>
										<Dropdown
											name="Galaxy"
											getOptions={PlanetService.getGalaxy}
										/>
									</div>
									<div>
										<div class="label">
											<span class="label-text">
												Set Max Gravity
											</span>
										</div>
										<input
											type="range"
											min="0"
											max="1.5"
											value="1"
											class="range range-sm"
											step="0.1"
										/>
										<div class="w-full flex justify-between text-xs px-2">
											<span>0</span>
											<span>1.5</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Species</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Filter With Species
												</span>
											</div>
											<input
												type="text"
												placeholder="Species Name"
												class="input input-bordered w-full max-w-xs"
											/>
										</label>
									</div>
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Filter With Language
												</span>
											</div>
											<input
												type="text"
												placeholder="Langauge"
												class="input input-bordered w-full max-w-xs"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const FactionService = {
	getOptions,
	getPersonality,
	getFactionNames,
};

export default FactionService;
