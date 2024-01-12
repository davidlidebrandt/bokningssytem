import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";

const Footer = () => {
	return (
		<footer className="medium-blue-bg py-10 px-12 light-c flex gap-16 text-sm">
			<Image
				className="rounded"
				src={logo}
				width={150}
				height={25}
				alt="Logo"
				priority={true}
			/>
			<div>
				<h3 className="mb-4 font-bold">Contact</h3>
				<div className="mb-2">Phone: 04224242</div>
				<div>Email: easybooking@support.com</div>
			</div>
		</footer>
	);
};

export default Footer;
