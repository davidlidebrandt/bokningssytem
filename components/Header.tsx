import React from "react";
import Image from "next/image";
import logo from "../public/images/logo-color.png"

const Header = () => {
	return (
		<header className="medium-blue-bg">

			<nav>
				<h1>
					<Image
						src={logo}
						width={200}
						height={100}
						alt="Picture of the author"
                        priority={true}
					/>
				</h1>
				<ul></ul>
			</nav>
		</header>
	);
};

export default Header;
