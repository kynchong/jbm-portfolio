import pic from "../../public/profile/BW_BR_Smile.jpg";
import Image from "next/image";

export default function Contact() {
	return (
		<section className="w-full h-full relative">
			{/* Background Image */}
			<Image
				className="absolute inset-0 | object-cover | pointer-events-none"
				src={pic}
				sizes="(max-width: 768px) 50vw, 100vw"
				alt="Contact background image"
				placeholder="blur"
				blurDataURL={pic.blurDataURL}
				fill={true}
			/>
			<div className="absolute top-0 left-0 | w-full h-full | flex flex-col sm:flex-row justify-center items-center">
				{/* Misc Info */}
				<div className="p-8 basis-1/2 h-auto">
					<h1 className="p-2 text-center text-white text-4xl">Information</h1>
					<p className="w-full text-white">
						I enjoy working with dedicated creatives from businesses that make the world beautiful We can do
						so much together Let's talk Phone If you want mail: @gawameriadgmail.com If you want to hear my
						voice: +1 424 675 1227 It you want to be intivenceo meadogawa I you want to see me irit be at
						went a oreon
					</p>
				</div>

				{/* Contact Form */}
				<form
					// action={FORM_ENDPOINT}
					// onSubmit={handleSubmit}
					className="p-8 basis-1/2"
					method="POST"
					target="_blank"
				>
					<h1 className="p-2 text-center text-white text-4xl">Write me a message!</h1>
					<div className="mb-3 pt-0">
						<input
							type="text"
							placeholder="Your name"
							name="name"
							className="px-3 py-3 placeholder-gray-500 text-white relative bg-black bg-opacity-40 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
							required
						/>
					</div>
					<div className="mb-3 pt-0">
						<input
							type="email"
							placeholder="Email"
							name="email"
							className="px-3 py-3 placeholder-gray-500 text-white relative bg-black bg-opacity-40 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
							required
						/>
					</div>
					<div className="mb-3 pt-0">
						<textarea
							placeholder="Your message"
							name="message"
							rows={10}
							className="px-3 py-3 placeholder-gray-500 text-white relative bg-black bg-opacity-40 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
							required
						/>
					</div>
					<div className="mb-3 pt-0">
						<button
							className="bg-blue-500 text-white active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="submit"
						>
							Send a message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
