import Image from "next/image";
import profilePic from "../../public/ang.png";
import { motion } from "framer-motion";

export default function About() {
	return (
		<section className="p-8 | flex flex-row flex-wrap justify-center items-center">
			{/* Profile image */}
			<div className="">
				<Image
					className="rounded-lg object-cover"
					sizes="(max-width: 768px) 50vw, 100vw"
					src={profilePic}
					alt="Jonathan"
					placeholder="blur"
					blurDataURL={profilePic.blurDataURL}
				/>
			</div>
			{/* Text Content */}
			<div className="lg:p-4 flex-grow max-w-2xl w-full">
				<h1 className="p-4 | font-black text-4xl">About Jonathan</h1>
				<p>
					Jonathan is a natural storyteller, a creative thinker and a problem solver with a skill set that
					encompasses writing and concepting for any and every media channel. An expert wordsmith who speaks
					in a variety of voice and tone, he's passionate about blending creativity, artistry and marketing
					savvy to deliver work that inspires as much as it compels. With that said, Jonathan specializes in:
				</p>
				<ul className="p-4 indent-4 list-inside list-disc">
					<li>Creative conceptin</li>
					<li>Copywriting</li>
					<li>Creative Direction</li>
					<li>Content management</li>
					<li>Screenwriting</li>
					<li>Drinking fancy coffess</li>
				</ul>
				<p>
					He has more than 10 years of creative writing experience in a variety of roles, including in-house,
					for agencies, on spec and everything in between. Feel free to reach out if you have a question, a
					project in mind or if you'd just like to talk shop. Or shoppe.
				</p>
			</div>
		</section>
	);
}
