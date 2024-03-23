import { Component, createEffect } from "solid-js";

// const getCharacters = async () => {
// 	return data;
// };

const Characters: Component<{}> = (props) => {
	createEffect(() => {
		console.log("Characters Page");
	});
	return <div>Characters</div>;
};

export default Characters;
