const getOptions = () => {
	return (
		<div>
			<div class="card w-full bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Character Filtering Options</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">Search Name</span>
								</div>
								<input
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
								/>
								<div class="label">
									<span class="label-text-alt">
										Set Character Name
									</span>
								</div>
							</label>
						</div>
						<div>
							<div class="label">
								<span class="label-text">Select Gender</span>
							</div>
							<select class="select select-bordered w-full max-w-xs">
								<option disabled selected>
									Gender
								</option>
								<option>Male</option>
								<option>Female</option>
								<option>Both</option>
							</select>
						</div>
						<div>
							<div class="label">
								<span class="label-text">Set Max Height</span>
							</div>
							<input
								type="range"
								min="30"
								max="250"
								value="200"
								class="range range-sm"
							/>
							<div class="w-full flex justify-between text-xs px-2">
								<span>30</span>
								<span>250</span>
							</div>
						</div>
						<div>
							<div class="label">
								<span class="label-text">Set Max Weight</span>
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
								<span>200</span>
							</div>
						</div>
						<div>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">
										Set Birth Year Range
									</span>
								</div>
								<div class="grid grid-cols-3 gap-2">
									<div>
										<input
											type="text"
											placeholder="Min Year"
											class="input input-bordered w-full max-w-xs"
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Minimum Year
											</span>
										</div>
									</div>
									<div class="divider" />
									<div>
										<input
											type="text"
											placeholder="Max Year"
											class="input input-bordered w-full max-w-xs"
										/>
										<div class="label">
											<span class="label-text-alt">
												Set Maximum Year
											</span>
										</div>
									</div>
								</div>
							</label>
						</div>
						<div>
							<div class="label">
								<span class="label-text">
									Select Personality
								</span>
							</div>
							<select class="select select-bordered w-full max-w-xs">
								<option disabled selected>
									Basic
								</option>
								<option>Revolutionary</option>
								<option>Aggressive</option>
								<option>Powerful</option>
								<option>Calculated</option>
								<option>Business Acumen</option>
								<option>Leadership</option>
								<option>Strong - willed</option>
								<option>Calm</option>
								<option>Mighty</option>
								<option>Timid</option>
								<option>Ferocious</option>
								<option>Confident</option>
								<option>Stoic</option>
								<option>Cunning</option>
								<option>Courageous</option>
								<option>Relaxed</option>
								<option>Comicful</option>
							</select>
						</div>
					</div>
					<div>
						<div class="mt-2 card w-full bg-base-300 shadow-sm">
							<div class="card-body">
								<h2 class="card-title">Faction</h2>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label class="form-control w-full max-w-xs">
											<div class="label">
												<span class="label-text">
													Filter With Faction
												</span>
											</div>
											<input
												type="text"
												placeholder="Faction Name"
												class="input input-bordered w-full max-w-xs"
											/>
										</label>
									</div>
									<div>
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
									</div>
									<div>
										<div class="label">
											<span class="label-text">
												Set Max Droid Count
											</span>
										</div>
										<input
											type="range"
											min="0"
											max="3000"
											value="2000"
											class="range range-sm"
											step="250"
										/>
										<div class="w-full flex justify-between text-xs px-2">
											<span>0</span>
											<span>3000</span>
										</div>
									</div>
									<div>
										<div class="label">
											<span class="label-text">
												Set Max Weapon Count
											</span>
										</div>
										<input
											type="range"
											min="0"
											max="3000"
											value="1800"
											class="range range-sm"
											step="250"
										/>
										<div class="w-full flex justify-between text-xs px-2">
											<span>0</span>
											<span>3000</span>
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
										<div class="label">
											<span class="label-text">
												Select Galaxy
											</span>
										</div>
										<select class="select select-bordered w-full max-w-xs">
											<option disabled selected>
												Galaxy
											</option>
											<option>Tarabba sector</option>
											<option>Raioballo sector</option>
											<option>Gordian Reach</option>
											<option>Mid Rim Territories</option>
											<option>Calamari sector</option>
											<option>Western Reaches</option>
											<option>Kessel sector</option>
											<option>Core Worlds</option>
											<option>Quelli sector</option>
											<option>
												Outer Rim Territories
											</option>
											<option>Chommell sector</option>
											<option>The Slice</option>
											<option>Moddell sector</option>
											<option>Wild Space</option>
											<option>Anoat sector</option>
										</select>
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

const CharacterService = {
	getOptions,
};

export default CharacterService;
