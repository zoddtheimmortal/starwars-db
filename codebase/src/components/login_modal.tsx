import { Box, Modal, Typography } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";
import { supabase } from "../utils/supabase";

export default function BasicModal() {
	const [open, setOpen] = createSignal(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const theme = useTheme();
	let email = "";

	const handleSignInWithGoogle = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: `${window.location.origin}/home`,
			},
		});
	};

	const handleSignInWithMagicLink = async (e: Event) => {
		e.preventDefault();
		const { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				shouldCreateUser: true,
				emailRedirectTo: `${window.location.origin}/home`,
			},
		});
		if (error) {
			console.error(error);
			document.getElementById("my_modal_2")?.showModal();
		} else {
			document.getElementById("my_modal_3")?.showModal();
		}
	};

	return (
		<div class="rounded-xl">
			<button onClick={handleOpen} class="btn btn-primary px-6">
				<span class="font-bold">Get Started</span>
			</button>
			<Modal
				open={open()}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: theme.palette.background.paper,
						border: "2px solid #000",
						boxShadow: "24px",
						p: 4,
					}}
				>
					<Typography id="modal-modal-title" component="h2">
						<div class="font-bold">Login</div>
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<div class="grid grid-rows-1">
							<button
								class="btn btn-primary"
								onClick={handleSignInWithGoogle}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-badge-check"
								>
									<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
									<path d="m9 12 2 2 4-4" />
								</svg>
								Login with Google
							</button>
						</div>
						<div class="divider" />
						<form onSubmit={(e) => handleSignInWithMagicLink(e)}>
							<div class="grid grid-rows-1 gap-3">
								<label class="input input-bordered flex items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="currentColor"
										class="w-4 h-4 opacity-70"
									>
										<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
										<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
									</svg>
									<input
										type="text"
										class="grow"
										placeholder="Email"
										onChange={(e) =>
											(email = e.target.value)
										}
									/>
								</label>
								<button class="btn btn-success">
									Sign In With Magic Link
								</button>
							</div>
						</form>
						<dialog id="my_modal_2" class="modal modal-bottom">
							<div class="modal-box">
								<div>
									<span>
										Invalid email address, please try again.
									</span>
								</div>
							</div>
							<form method="dialog" class="modal-backdrop">
								<button>close</button>
							</form>
						</dialog>
						<dialog id="my_modal_3" class="modal modal-bottom">
							<div class="modal-box">
								<div>
									<span>
										Email Sent! Please check your inbox.
									</span>
								</div>
							</div>
							<form method="dialog" class="modal-backdrop">
								<button>close</button>
							</form>
						</dialog>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
