import { Component, createResource } from "solid-js";
import { supabase } from "../utils/supabase";
import Links from "../assets/links.service";
import { useNavigate } from "@solidjs/router";

const getSession = async () => {
	const { data, error } = await supabase.auth.getSession();
	if (error) {
		console.error(error);
	}
	return data.session?.user.user_metadata;
};

const logOut = async () => {
	const { error } = await supabase.auth.signOut();
	if (error) console.error(error);
};

const Avatar: Component<{}> = () => {
	const [session] = createResource(getSession);
	const nav = useNavigate();
	return (
		<div>
			<div class="dropdown">
				<div
					tabindex="0"
					role="button"
					class="btn btn-ghost btn-circle"
				>
					<div class="avatar">
						<div class="opacity-70 w-8 mx-1 rounded-full ring ring-primary ring-offset-1">
							<img
								src={
									session()?.avatar_url
										? session()?.avatar_url
										: Links.default_user
								}
							/>
						</div>
					</div>
				</div>
				<ul
					tabindex="0"
					class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a>Dashboard</a>
					</li>
					<li>
						<a
							onClick={() => {
								logOut();
								nav("/");
							}}
						>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

const UserService = { getSession, Avatar };

export default UserService;
