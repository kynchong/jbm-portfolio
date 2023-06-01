import profilePic from "../../public/profile/BW_BR_Smile.jpg";
import Image from "next/image";
import { headingFont } from "../utils/fonts";
import { JsxElement } from "typescript";

const contactData = [
	{ id: 0, icon: "📞", text: "Call me at", data: <span className="whitespace-nowrap">(714)274-3077</span> },
	{ id: 1, icon: "✉️", text: "Email me at", data: <a href="mailto:JBM4HIRE@gmail.com">JBM4HIRE@GMAIL.COM</a> },
	{ id: 2, icon: "💻", text: "Find me on", data: <a href="https://www.linkedin.com/in/jonathanbrucemoore/">LINKEDIN</a> },
];

type ContactCardProps = {
	id: number;
	icon: string;
	text: string;
	data: JSX.Element;
};

const ContactCard = ({ id, icon, text, data }: ContactCardProps) => {
	return (
		<li className="w-96 | flex flex-col justify-center items-center gap-8">
			<div className="text-9xl">{icon}</div>
			<div className="flex flex-col items-center">
				<div className="text-left italic">{text}</div>
				<div className="">{data}</div>
			</div>
		</li>
	);
};

export default function Contact() {
	return (
		<section className="w-full h-full | flex flex-col justify-center items-center | gap-20">
			{/* Heading  */}
			<div className="text-center">
				<p className={`${headingFont.className} | text-9xl`}>LET'S CHAT!</p>
			</div>

			{/* Profile Pic */}
			<div className="relative w-80 h-80 rounded-full overflow-hidden">
				<Image
					className="relative block object-cover object-top"
					fill={true}
					sizes="25vw"
					placeholder="blur"
					blurDataURL={profilePic.blurDataURL}
					src={profilePic}
					alt="Jonathan Bruce Moore"
				/>
			</div>

			{/* Contact Info */}
			<div>
				<ul className="flex flex-row flex-wrap justify-center items-center">
					{contactData.map((contact) => (
						<ContactCard key={contact.id} {...contact} />
					))}
				</ul>
			</div>
		</section>
	);
}
