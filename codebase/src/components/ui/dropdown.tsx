import { Component, JSX, createResource } from "solid-js";
import { Json } from "../../utils/types";
import { create } from "domain";

interface DropdownProps {
	name: string;
	getOptions: () => Promise<Array<string>>;
	setOptions: (options: string) => void;
}

const Dropdown: Component<DropdownProps> = (props) => {
	const { name, getOptions, setOptions } = props;
	const [options] = createResource(getOptions);
	return (
		<div>
			<div class="label">
				<span class="label-text">Select {name}</span>
			</div>
			<select
				class="select select-bordered w-full max-w-xs"
				onInput={(e) => {
					{
						if (e.target.value === "None") setOptions("");
						else setOptions(e.target.value);
					}
				}}
			>
				<option disabled selected>
					{name}
				</option>
				{options()?.map((option: string & {}) => (
					<option>{option}</option>
				))}
				<option>None</option>
			</select>
		</div>
	);
};

export default Dropdown;
