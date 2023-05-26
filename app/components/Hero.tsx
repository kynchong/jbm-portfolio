import { Secular_One } from "next/font/google";

const secular_one = Secular_One({ weight: "400", preload: false });

export default function Hero() {
	return (
		<section className="w-full h-full | flex flex-col justify-center items-center | overflow-hidden">
			<div className={`${secular_one.className} relative text-[20vmin] leading-none cursor-default`}>
				<div className="group w-max">
					<span className="">DO</span>
					<div className="fixed inset-0 -z-50 pointer-events-none group-hover:bg-red-500"></div>
				</div>
				<div className="group w-max">
					<span className="">THE</span>
					<div className="fixed inset-0 -z-50 pointer-events-none group-hover:bg-green-500"></div>
				</div>
				<div className="group w-max">
					<span className="">WRITE</span>
					<div className="fixed inset-0 -z-50 pointer-events-none group-hover:bg-blue-500"></div>
				</div>
				<div className="group w-max">
					<span className="">THING</span>
					<div className="fixed inset-0 -z-50 pointer-events-none group-hover:bg-purple-500"></div>
				</div>
			</div>
			<div className="absolute bottom-10 left-1/2 text-4xl">⬇︎</div>
		</section>
	);
}
