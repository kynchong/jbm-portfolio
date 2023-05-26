import img from "../../public/profile/ang.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface CalloutProps {
	x: string;
	y: string;
	msg: string;
}

function Callout({ x, y, msg }: CalloutProps) {
	return (
		<motion.div
			className={`absolute w-1 h-1 | border-8 border-red-500 | bg-black bg-opacity-70 | overflow-hidden flex flex-col justify-center items-center`}
			initial={{ x: x, y: y }}
			whileHover={{ width: "max-content", height: "min-content", rotate: 0 }}
		>
			<p className="w-max h-max text-white p-4">{msg}</p>
		</motion.div>
	);
}

export default function About() {
	return (
		<section className="w-full h-full | flex flex-col justify-center items-center | overflow-hidden">
			<div className="relative w-2/3 h-2/3">
				<Image className="object-contain" fill={true} src={img} alt="Ang" />
				<Callout x="0" y="0" msg="This is a test of the emergency broadcast system." />
				<Callout x="100px" y="-100px" msg="Another message." />
			</div>
		</section>
	);
}
