import Link from "next/link";
import React from "react";

function register() {
	return (
		<main className="light-blue-bg">
			<section className="grid place-items-center w-full">
				<div className="medium-blue-bg w-11/12 my-16 rounded-md grid place-items-center light-c md:max-w-3xl">
					<h2 className="my-10 font-bold text-xl">
						Register your company
					</h2>
					<form className="text-sm w-full grid place-items-center md:w-4/5">
						<div className="w-4/5 md:flex gap-3 md:mb-2">
							<label className="block text-nowrap min-w-28" htmlFor="companyName">
								Company name
							</label>
							<input
								className="block mb-3 rounded-lg w-full text-lg dark-blue-c md:w-auto md:grow"
								id="companyName"
								name="companyName"
								type="text"
							/>
						</div>
						<div className="w-4/5 md:flex gap-3 md:mb-2">
							<label className="block text-nowrap min-w-28" htmlFor="email">
								Email
							</label>
							<input
								className="block mb-3 rounded-lg w-full text-lg dark-blue-c md:w-auto md:grow"
								id="email"
								name="email"
								type="text"
							/>
						</div>
						<div className="w-4/5 md:flex gap-3 md:mb-2">
							<label className="block text-nowrap min-w-28" htmlFor="password">
								Password
							</label>
							<input
								className="block mb-3 rounded-lg w-full text-lg dark-blue-c md:w-auto md:grow"
								id="password"
								name="password"
								type="text"
							/>
						</div>
						<div className="w-4/5 md:flex gap-3">
							<label className="block text-nowrap min-w-28" htmlFor="confirmPassword">
								Confirm password
							</label>
							<input
								className="block mb-5 rounded-lg w-full text-lg dark-blue-c md:w-auto md:grow"
								id="confirmPassword"
								name="confirmPassword"
								type="text"
							/>
						</div>
						<button
							className="mt-6 light-blue-bg dark-blue-c m-auto block py-1 px-12 rounded-lg"
							type="submit"
						>
							Register now
						</button>
					</form>
					<div className="my-10 text-sm">
						<span>Already registered?</span>
						<Link className="inline ml-2 font-bold underline" href="/login">
							Log In
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}

export default register;
