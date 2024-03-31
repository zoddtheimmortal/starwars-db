import { Component, createSignal } from "solid-js";

interface SearchProps {
	onSubmit: (value: string) => void;
}

const Search: Component<SearchProps> = (props) => {
	const [value, setValue] = createSignal("");

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		props.onSubmit(value());
	};

	return (
		<div>
			<form class="m-6 mb-4" onSubmit={handleSubmit}>
				<label class="input input-bordered bg-base-300 flex items-center gap-2">
					<input
						type="text"
						class="grow"
						placeholder="Search"
						onInput={(e: any) => setValue(e.target.value)}
					/>
					<button class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4 opacity-70"
						>
							<path
								fill-rule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</label>
			</form>
		</div>
	);
};

export default Search;
