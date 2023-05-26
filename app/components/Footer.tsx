import emailIcon from "../../public/icons/square-envelope-solid.svg";
import linkedinIcon from "../../public/icons/linkedin.svg";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="fixed z-50 bottom-0 right-0 | p-2 flex flex-row justify-center items-center">
			{/* Copyright */}
			<p className="font-thin text-xs md:text-sm xl:text-base">© 1965 D. Whitman</p>

			{/* Links */}
			<ul className="flex flex-row justify-end | font-thin">
				<li className="ml-4">
					<a href="dondraper@madman.com">
						<Image src={emailIcon} alt="Email" width={24} />
					</a>
				</li>
				<li className="ml-4">
					<a href="https://www.linkedin.com/in/dickwhitman/">
						<Image src={linkedinIcon} alt="LinkedIn" width={24} />
					</a>
				</li>
			</ul>
		</footer>
	);
}
