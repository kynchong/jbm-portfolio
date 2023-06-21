import profilePic from "../../public/profile/BW_BR_Smile.jpg";
import Image from "next/image";
import { headingFont } from "../utils/fonts";
import { JsxElement } from "typescript";

const contactData = [
	{ id: 0, icon: "📞", text: "Call me", data: <span className="whitespace-nowrap">(714) 274-3077</span> },
	{ id: 1, icon: "✉️", text: "Email me", data: <a href="mailto:JBM4HIRE@gmail.com">JBM4HIRE@gmail.com</a> },
	{ id: 2, icon: "💻", text: "Stalk me", data: <a href="https://www.linkedin.com/in/jonathanbrucemoore/">LinkedIn</a> },
];

type ContactCardProps = {
	id: number;
	icon: string;
	text: string;
	data: JSX.Element;
};

const ContactCard = ({ id, icon, text, data }: ContactCardProps) => {
	return (
		<li className="w-full | flex flex-row justify-start items-center gap-8">
			<div className="text-8xl">{icon}</div>
			<div className="flex flex-col justify-center items-start">
				<div className="text-left text-2xl">{text}</div>
				<div className="whitespace-nowrap text-5xl font-black">{data}</div>
			</div>
		</li>
	);
};

export default function Contact() {
	return (
		<section className="w-full h-full | flex flex-col justify-center items-center">
			{/* Contact Info */}
			<div>
				<ul className="flex flex-col flex-wrap justify-center items-start | gap-16">
					{contactData.map((contact) => (
						<ContactCard key={contact.id} {...contact} />
					))}
				</ul>
			</div>
		</section>
	);
}
