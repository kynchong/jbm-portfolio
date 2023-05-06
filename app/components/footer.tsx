import emailIcon from "../../public/icons/square-envelope-solid.svg";
import linkedinIcon from "../../public/icons/linkedin.svg";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="p-2 md:p-4 lg:p-8 w-full | flex flex-row flex-wrap justify-between items-center">
			{/* Copyright */}
			<p className="font-thin text-xs md:text-sm xl:text-base">© 2023 Jonathan Moore</p>

			{/* Links */}
			<ul className="flex flex-row justify-end | font-thin">
				<li className="ml-4">
					<a href="JBM4HIRE@gmail.com">
						<Image src={emailIcon} alt="Email" width={24} />
					</a>
				</li>
				<li className="ml-4">
					<a href="https://www.linkedin.com/in/jonathanbrucemoore/">
						<Image src={linkedinIcon} alt="LinkedIn" width={24} />
					</a>
				</li>
			</ul>
		</div>
	);
}
