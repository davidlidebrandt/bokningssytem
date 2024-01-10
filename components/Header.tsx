import React from "react";
import Image from "next/image";
import logo from "../public/images/logo-color.png"

const Header = () => {
	return (
		<header className="medium-blue-bg p-6">

			<nav>
				<h1 className="inline-block mb-3">
					<Image
						className="rounded"
						src={logo}
						width={150}
						height={25}
						alt="Logo"
                        priority={true}
					/>
				</h1>
				<button className="float-right align-bottom">
					<div className="w-3 h-1 light-bg mb-2"></div>
					<div className="w-5 h-1 light-bg mb-2"></div>
					<div className="w-5 h-1 light-bg"></div>
				</button>
				<ul>Book Now</ul>
				<ul>About Us</ul>
				<ul>Register Company</ul>
				<ul>Log In</ul>
			</nav>
		</header>
	);
};

export default Header;
