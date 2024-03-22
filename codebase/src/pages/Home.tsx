import { Component } from "solid-js";
import Nav from "../components/main_nav";
import styles from "../style.module.css";

const Home: Component<{}> = (props) => {
	return (
		<>
			<Nav />
			<div class={styles.App}>Welcome to home</div>
		</>
	);
};

export default Home;
