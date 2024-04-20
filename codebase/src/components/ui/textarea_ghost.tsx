import { Component } from "solid-js";

interface TextAreaProps {
	setInput: (value: string) => void;
	defaultValue: string;
	label: string;
}

const GhostTextArea: Component<TextAreaProps> = (props) => {
	const { setInput, defaultValue, label } = props;
	return (
		<label class="form-control">
			<code class="label">
				<span class="text-xl font-bold">Edit {label}</span>
			</code>
			<textarea
				class="textarea textarea-ghost h-96 w-96"
				placeholder={label}
				value={defaultValue}
				onChange={(e) => setInput(e.target.value)}
			/>
		</label>
	);
};

export default GhostTextArea;
