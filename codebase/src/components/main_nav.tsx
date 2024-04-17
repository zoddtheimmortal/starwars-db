import { Component } from "solid-js";
import Theme_Button from "./ui/theme_button";
import { A, useNavigate } from "@solidjs/router";
import UserService from "../apis/user.service";

const Nav: Component<{}> = (props) => {
	const navigate = useNavigate();

	return (
		<div class="navbar bg-base-300 z-20">
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
				<UserService.Avatar />
				<Theme_Button />
			</div>
		</div>
	);
};

export default Nav;
