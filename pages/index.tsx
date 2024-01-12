import Image from "next/image";
import heroImage from "../public/images/calendar-cropped.jpg";

export default function Home() {
	return (
		<main className="grid justify-items-center">
			<section className="max-w-6xl">
        <Image src={heroImage} alt="hero image"></Image>
      </section>
			<section className="max-w-6xl"></section>
			<section className="max-w-6xl"></section>
			<section className="max-w-6xl"></section>
		</main>
	);
}
