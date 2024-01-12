import Image from "next/image";
import heroImage from "../public/images/calendar-cropped.jpg";
import Link from "next/link";

export default function Home() {
	return (
		<main className="grid m-auto max-w-6xl justify-items-center lg:grid-cols-3 lg:grid-rows-2">
			<section className="lg:col-span-3">
        <Image src={heroImage} alt="hero image" style={{height: '100%'}}></Image>
      </section>
			<section className="light-blue-bg w-full grid justify-items-center dark-blue-c p-6">
        <h2 className="font-bold mb-4">Find your company</h2>
        <p className="mx-4">Scroll through all registered companies and make your booking now</p>
        <Link href="/booking" className="rounded-md medium-blue-bg light-c px-14 py-2 my-4 h-12">Book Now</Link>
      </section>
			<section className="dark-blue-bg w-full grid justify-items-center light-c p-6">
        <h2 className="font-bold mb-4">Want to register your business?</h2>
        <p className="mx-4">Do as many other companies and register your company and let us handle all your bookings for you</p>
        <Link href="/register" className="rounded-md medium-blue-bg light-c px-14 py-2 my-4 h-12">Register Now</Link>
      </section>
      <section className="light-bg w-full grid justify-items-center dark-blue-c p-6">
        <h2 className="font-bold mb-4">Learn More</h2>
        <p className="mx-4">Read more about our company and what makes us unique</p>
        <Link href="/about" className="rounded-md medium-blue-bg light-c px-14 py-2 my-4 h-12">About Us</Link>
      </section>
		</main>
	);
}
