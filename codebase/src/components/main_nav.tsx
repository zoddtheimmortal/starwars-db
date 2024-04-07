import { Component } from "solid-js";
import Theme_Button from "./ui/theme_button";
import { A, useNavigate } from "@solidjs/router";

const Nav: Component<{}> = (props) => {
	const navigate = useNavigate();

	return (
		<div class="navbar bg-base-300">
			<div class="navbar-start">
				<div class="dropdown">
					<div
						tabindex="0"
						role="button"
						class="btn btn-ghost btn-circle"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</div>
					<ul
						tabindex="0"
						class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<A href="/search">Search</A>
						</li>
						<li>
							<A href="/home">Home</A>
						</li>
					</ul>
				</div>
			</div>
			<div class="navbar-center">
				<a class="btn btn-ghost text-xl">
					<code>starwars-db</code>
				</a>
			</div>
			<div class="navbar-end">
				<div class="dropdown dropdown-hover">
					<div tabindex="0" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-book-open"
						>
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
						</svg>
					</div>
					<ul
						tabindex="0"
						class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<div onClick={() => navigate("/characters")}>
								Characters
							</div>
						</li>
						<li>
							<div onClick={() => navigate("/factions")}>
								Factions
							</div>
						</li>
						<li>
							<div onClick={() => navigate("/starships")}>
								Starships
							</div>
						</li>
						<li>
							<div onClick={() => navigate("/planets")}>
								Planets
							</div>
						</li>
					</ul>
				</div>
				<Theme_Button />
			</div>
		</div>
	);
};

export default Nav;
