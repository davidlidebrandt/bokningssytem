import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/logo.png"
import Link from "next/link";

const Header = () => {
	const [showHamburger, setShowHamburger] = useState(true);
	const toggle = ()=> {setShowHamburger(!showHamburger)};

	return (
		<header className="medium-blue-bg py-6 px-12 light-c text-sm">

			<nav className="lg:flex items-center">
				<h1 className={`inline-block mb-3 ${showHamburger? "" : "hidden"}`}>
					<Image
						className="rounded"
						src={logo}
						width={150}
						height={25}
						alt="Logo"
                        priority={true}
					/>
				</h1>
				<button className={`lg:hidden float-right align-bottom ${showHamburger? "": "hidden"}`} onClick={toggle}>
					<div className="w-3 h-1 light-bg mb-2"></div>
					<div className="w-5 h-1 light-bg mb-2"></div>
					<div className="w-5 h-1 light-bg mb-2"></div>
					<div>Menu</div>
				</button>
				<button className={`float-right align-bottom ${showHamburger? "hidden": ""}`} onClick={toggle}>
					<div className="w-5 h-1 light-bg mb-2 rotate-45">
						<div className="w-5 h-1 light-bg -rotate-90"></div>
					</div>
					<div className="mt-4">Close</div>
				</button>
				<ul className={`${showHamburger? "hidden": ""}`}>
					<li className="mt-4"><Link href="/booking">Book Now</Link></li>
					<li className="mt-4 place-self-start"><Link href="/about">About Us</Link></li>
					<li className="mt-4"><Link href="/register">Register Now</Link></li>
					<li className="mt-4"><Link href="/login">Log In</Link></li>
				</ul>
				<ul className={`hidden lg:flex gap-16 px-16 w-full`}>
					<li className="mt-4"><Link href="/booking">Book Now</Link></li>
					<li className="mt-4"><Link href="/about">About Us</Link></li>
					<li className="mt-4 ml-28"><Link href="/register">Register Now</Link></li>
					<li className="mt-4"><Link href="/login">Log In</Link></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
