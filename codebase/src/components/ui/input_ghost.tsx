import { Component } from "solid-js";

interface InputProps {
	setInput: (value: string) => void;
	defaultValue: string;
	label: string;
}

const GhostInput: Component<InputProps> = (props) => {
	const { setInput, defaultValue, label } = props;
	return (
		<label class="form-control w-full max-w-xs">
			<code class="label">
				<span class="font-bold text-xl">{label}</span>
			</code>
			<input
				type="text"
				placeholder="Type here"
				class="input input-ghost w-full max-w-xs"
				value={defaultValue}
				onChange={(e) => setInput(e.target.value)}
			/>
		</label>
	);
};

export default GhostInput;
