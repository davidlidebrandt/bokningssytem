import Image from "next/image";
import heroImage from "../public/images/calendar-cropped.jpg";

export default function Home() {
	return (
		<main className="grid justify-items-center">
			<section className="max-w-6xl max-h-max">
        <Image src={heroImage} alt="hero image"></Image>
      </section>
			<section className="max-w-6xl light-blue-bg w-full grid justify-items-center dark-blue-c p-6">
        <h2 className="font-bold">Find your company</h2>
        <p>Scroll through all registered companies and make your booking now</p>
        <button className="rounded medium-blue-bg light-c px-14 py-3">Book Now</button>
      </section>
			<section className="max-w-6xl"></section>
			<section className="max-w-6xl"></section>
		</main>
	);
}
