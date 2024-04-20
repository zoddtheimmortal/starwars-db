import { Component, JSX, createResource } from "solid-js";
import { Json } from "../../utils/types";
import { create } from "domain";

interface DropdownProps {
	name: string;
	getOptions: () => Promise<Array<string>>;
	setOptions: (options: string) => void;
	selected: string;
}

const GhostDropdown: Component<DropdownProps> = (props) => {
	const { name, getOptions, setOptions, selected } = props;
	const [options] = createResource(getOptions);
	return (
		<div>
			<div class="label">
				<span class="text-xl font-bold">{name}</span>
			</div>
			<select
				class="select select-ghost w-full max-w-xl"
				onInput={(e) => {
					{
						if (e.target.value === "None") setOptions("");
						else setOptions(e.target.value);
					}
				}}
			>
				{options()?.map((option: string & {}) => (
					<option selected={option === selected}>{option}</option>
				))}
				<option>None</option>
			</select>
		</div>
	);
};

export default GhostDropdown;
