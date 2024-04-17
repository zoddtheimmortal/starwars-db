import { Component, Show, createSignal } from "solid-js";
import styles from "../style.module.css";
import CharacterService from "../apis/character.service";
import FactionService from "../apis/faction.service";
import StarshipService from "../apis/starship.service";
const [filters, setFilters] = createSignal(
	<div class="card w-full bg-base-200 shadow-sm">
		<div class="card-body">
			<h2 class="card-title">Select An Entity</h2>
			<p>Please Select An Entity To View Its Filtering Options</p>
		</div>
	</div>
);

const handleFilterChange = (selectedOption: string) => {
	let filterOptions = <div></div>;

	switch (selectedOption) {
		case "Characters":
			filterOptions = CharacterService.getFilterDrawer();
			break;
		case "Factions":
			filterOptions = FactionService.getFilterDrawer();
			break;
		case "Starships":
			filterOptions = StarshipService.getFilterDrawer();
			break;
		default:
			filterOptions = <div>Invalid Option</div>;
			break;
	}

	setFilters(filterOptions);
};

const Search: Component<{}> = (props) => {
	const [selectedOption, setSelectedOption] = createSignal<string>("");

	const handleSelectChange = (event: Event) => {
		const target = event.target as HTMLSelectElement;
		setSelectedOption(target.value);
		handleFilterChange(target.value);
	};

	return (
		<div class={styles.App}>
			<div class="hero min-h-screen bg-base-100">
				<div class="hero-content text-center">
					<div class="center">
						<div class="grid grid-cols-1 gap-6">
							<div class="gap-6">
								<label class="form-control w-full max-w-xs">
									<div class="label">
										<span class="label-text">
											Search In
										</span>
										<span class="label-text-alt">
											Select Entity
										</span>
									</div>
									<select
										class="select select-bordered"
										onChange={handleSelectChange}
									>
										<option disabled selected>
											Pick one
										</option>
										<option>Characters</option>
										<option>Factions</option>
										<option>Starships</option>
										<option>Duels</option>
										<option>Weapons</option>
										<option>Species</option>
										<option>Planets</option>
										<option>Droids</option>
									</select>
								</label>
							</div>
							<div class="mb-4">{filters()}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
