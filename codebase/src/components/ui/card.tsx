import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";

const Card: Component<{ title: string; src: string; children: JSX.Element }> = (
	props
) => {
	const navigate = useNavigate();
	return (
		<div>
			<div class="z-0 card hover:scale-105 w-84 h-96 bg-base-100 shadow-xl image-full bg-contain">
				<figure>
					<img src={props.src} alt={props.title} class="size-full" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-bold text-3xl">{props.title}</h2>
					<p>{props.children}</p>
					<div class="card-actions justify-end mt-1">
						<button
							class="btn btn-primary"
							onClick={() =>
								navigate(`/${props.title.toLowerCase()}`)
							}
						>
							Know More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
