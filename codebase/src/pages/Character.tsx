import { useParams } from "@solidjs/router";
import {
	Component,
	createEffect,
	createResource,
	createSignal,
} from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";
import GhostInput from "../components/ui/input_ghost";
import Dropdown from "../components/ui/dropdown";
import FactionService from "../apis/faction.service";
import GhostDropdown from "../components/ui/dropdown_ghost";
import PlanetService from "../apis/planet.service";
import CharacterService from "../apis/character.service";
import GhostTextArea from "../components/ui/textarea_ghost";

const getUserWithId = async (id: string) => {
	const { data: people, error } = await supabase
		.from("people")
		.select()
		.eq("pin", id);
	return people[0];
};

const updateUserWithId = async (id: string, data: any) => {
	if (!data || Object.keys(data).length === 0) return;
	const { data: people, error } = await supabase
		.from("people")
		.update(data)
		.eq("pin", id);
	if (error) console.error(error);
	else return people;
};

const [edit, setEdit] = createSignal(false);

const EditForm: Component<{ people: any; refetch: () => void }> = (props) => {
	const { people, refetch } = props;
	const [description, setDescription] = createSignal(people().description);
	const [gender, setGender] = createSignal(people().gender);
	const [faction, setFaction] = createSignal(people().faction);
	const [personality, setPersonality] = createSignal(people().person);
	const [birth_year, setBirthYear] = createSignal(people().birth_year);
	const [planet, setPlanet] = createSignal(people().birth_planet);
	const [height, setHeight] = createSignal(people().height);
	const [weight, setWeight] = createSignal(people().weight);

	const formData = () => {
		let data: any = {};
		if (description() !== people().description) {
			data.description = description();
		}
		if (gender() !== people().gender) data.gender = gender();
		if (faction() !== people().faction) data.faction = faction();
		if (personality() !== people().personality)
			data.personality = personality();
		if (birth_year() !== people().birth_year)
			data.birth_year = birth_year();
		if (planet() !== people().birth_planet) data.birth_planet = planet();
		if (height() !== people().height) data.height = height();
		if (weight() !== people().weight) data.weight = weight();
		return data;
	};

	return (
		<div class="flex flex-shrink w-full">
			<div class="grid flex-grow card rounded-box place-items-center mx-6">
				<div class="">
					<code>
						<span class="text-5xl font-bold">{people().name}</span>
					</code>

					<div class="mt-4 grid grid-cols-1 gap-2">
						<GhostInput
							defaultValue={people().birth_year}
							setInput={setBirthYear}
							label="Birth Year"
						/>
						<div class="text-xl">
							<GhostDropdown
								name="Faction"
								getOptions={FactionService.getFactionNames}
								setOptions={setFaction}
								selected={people().faction}
							/>
						</div>
						<div class="text-xl">
							<GhostDropdown
								name="Birth Planet"
								getOptions={PlanetService.getPlanetNames}
								setOptions={setPlanet}
								selected={people().birth_planet}
							/>
						</div>
						<div class="text-xl">
							<GhostDropdown
								name="Personality"
								getOptions={CharacterService.getPersonality}
								setOptions={setPersonality}
								selected={people().personality}
							/>
						</div>
						<div class="text-xl">
							<GhostDropdown
								name="Gender"
								getOptions={CharacterService.getGender}
								setOptions={setGender}
								selected={people().gender}
							/>
						</div>
						<div class="text-xl">
							<GhostInput
								defaultValue={people().height + "cm"}
								label="Height"
								setInput={setHeight}
							/>
						</div>
						<div class="text-xl">
							<GhostInput
								defaultValue={people().weight + "kg"}
								label="Weight"
								setInput={setWeight}
							/>
						</div>
					</div>
					<div
						class="btn btn-outline btn-primary mt-2"
						onClick={() => {
							setEdit(!edit());
							updateUserWithId(people().pin, formData());
							refetch();
							window.location.reload();
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-cloud-upload"
						>
							<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
							<path d="M12 12v9" />
							<path d="m16 16-4-4-4 4" />
						</svg>
						Save
					</div>
				</div>
			</div>
			<div class="divider divider-horizontal" />
			<div class="grid flex-grow">
				<GhostTextArea
					label="Description"
					setInput={setDescription}
					defaultValue={people().description}
				/>
			</div>
		</div>
	);
};

const Character: Component<{}> = (props) => {
	const params = useParams();
	const [people, { refetch }] = createResource(() =>
		getUserWithId(params.id)
	);

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
								{!edit() ? (
									<div class="flex flex-shrink w-full">
										<div class="grid flex-grow card rounded-box place-items-center">
											<div class="">
												<div>
													<span class="text-5xl font-bold">
														{people().name}
													</span>
												</div>

												<div class="mt-4 grid grid-cols-1 gap-2">
													<code class="">
														<div class="text-xl">
															<span class="font-semibold">
																Birth_Year:{" "}
															</span>
															{
																people()
																	.birth_year
															}
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
															{
																people()
																	?.birth_planet
															}
														</div>
														<div class="text-xl">
															<span class="font-semibold">
																Personality:{" "}
															</span>
															{
																people()
																	?.personality
															}
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
												<div
													class="btn btn-outline btn-primary mt-2"
													onClick={() => {
														setEdit(!edit());
													}}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
														class="lucide lucide-file-pen-line w-6 h-6"
													>
														<path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
														<path d="M8 18h1" />
														<path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" />
													</svg>
													Edit
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
								) : (
									<EditForm
										people={people}
										refetch={refetch}
									/>
								)}
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
