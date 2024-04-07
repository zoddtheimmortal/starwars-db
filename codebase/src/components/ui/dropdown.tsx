import { Component, JSX, createResource } from "solid-js";
import { Json } from "../../utils/types";
import { create } from "domain";

interface DropdownProps {
	name: string;
	getOptions: () => Promise<Array<string>>;
}

const Dropdown: Component<DropdownProps> = (props) => {
	const { name, getOptions } = props;
	const [options] = createResource(getOptions);
	return (
		<div>
			<div class="label">
				<span class="label-text">Select {name}</span>
			</div>
			<select class="select select-bordered w-full max-w-xs">
				<option disabled selected>
					{name}
				</option>
				{options()?.map((option: string & {}) => (
					<option>{option}</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
