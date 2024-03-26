import { Component } from "solid-js";

const Skeleton: Component<{}> = (props) => {
	return (
		<div class="rounded-xl w-84 h-96 bg-base-100 shadow-xl image-full bg-contain">
			<div class="flex flex-col gap-4 w-84 h-96 p-6">
				<div class="skeleton h-96 w-full"></div>
				<div class="skeleton h-8 w-28"></div>
				<div class="skeleton h-4 w-full"></div>
				<div class="skeleton h-4 w-full"></div>
			</div>
		</div>
	);
};

export default Skeleton;
