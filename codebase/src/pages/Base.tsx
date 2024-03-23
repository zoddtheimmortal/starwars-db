import Nav from "../components/main_nav";
import { Component, JSX } from "solid-js";
import Footer from "../components/ui/footer";

const Base: Component<{ children: JSX.Element }> = (props) => {
	return (
		<>
			<Nav />
			<div>{props.children}</div>
			<Footer />
		</>
	);
};

export default Base;
