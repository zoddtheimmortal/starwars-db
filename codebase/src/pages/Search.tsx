import { Component } from "solid-js";
import styles from "../style.module.css";

const Search: Component<{}> = (props) => {
	return (
		<div class={styles.App}>
			<div class="hero min-h-screen bg-base-100">
				<div class="hero-content text-center">
					<div class="max-w-full">
						<h1 class="text-4xl font-bold mb-4">Search</h1>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
							<label class="form-control w-96 max-w-xs">
								<div class="label">
									<span class="label-text">
										Search With Keywords
									</span>
								</div>
								<input
									type="text"
									placeholder="Type here"
									class="input input-bordered"
								/>
							</label>
							<div class="card w-[26rem] bg-base-200 shadow-sm">
								<div class="card-body">
									<h2 class="card-title">Search In</h2>
									<div class="grid grid-cols-3 gap-2">
										<div class="form-control">
											<label class="label cursor-pointer">
												<span class="label-text">
													Characters
												</span>
												<input
													type="radio"
													name="radio-10"
													class="radio radio-primary"
													checked
												/>
											</label>
										</div>
										<div class="form-control">
											<label class="label cursor-pointer">
												<span class="label-text">
													Factions
												</span>
												<input
													type="radio"
													name="radio-10"
													class="radio radio-primary"
												/>
											</label>
										</div>
										<div class="form-control">
											<label class="label cursor-pointer">
												<span class="label-text">
													Starships
												</span>
												<input
													type="radio"
													name="radio-10"
													class="radio radio-primary"
												/>
											</label>
										</div>
										<div class="form-control">
											<label class="label cursor-pointer">
												<span class="label-text">
													Duels
												</span>
												<input
													type="radio"
													name="radio-10"
													class="radio radio-primary"
												/>
											</label>
										</div>
										<div class="form-control">
											<label class="label cursor-pointer">
												<span class="label-text">
													Weapons
												</span>
												<input
													type="radio"
													name="radio-10"
													class="radio radio-primary"
												/>
											</label>
										</div>
										<div class="form-control">
											<label class="label cursor-pointer">
												<span class="label-text">
													Species
												</span>
												<input
													type="radio"
													name="radio-10"
													class="radio radio-primary"
												/>
											</label>
										</div>
										<div class="form-control">
											<label class="label cursor-pointer">
												<span class="label-text">
													Planets
												</span>
												<input
													type="radio"
													name="radio-10"
													class="radio radio-primary"
												/>
											</label>
										</div>
										<div class="form-control">
											<label class="label cursor-pointer">
												<span class="label-text">
													Droids
												</span>
												<input
													type="radio"
													name="radio-10"
													class="radio radio-primary"
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
		</div>
	);
};

export default Search;
