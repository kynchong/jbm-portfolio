import pic from "../../public/vintage-phone.jpg";
import Image from "next/image";

export default function Contact() {
	return (
		<section className="w-full h-full | flex flex-col justify-center items-center">
			{/* Background Image */}
			{/* <Image
				className="absolute inset-0 -z-50 | object-cover | pointer-events-none"
				src={pic}
				sizes="(max-width: 768px) 50vw, 100vw"
				alt="Contact background image"
				placeholder="blur"
				blurDataURL={pic.blurDataURL}
				fill={true}
			/> */}
			{/* Contact Form */}
			<form
				// action={FORM_ENDPOINT}
				// onSubmit={handleSubmit}
				className="p-2 w-full h-full max-w-2xl max-h-96"
				method="POST"
				target="_blank"
			>
				<h1 className="p-4 text-center text-text text-4xl">Write me!</h1>
				<div className="mb-3 pt-0">
					<input
						type="text"
						placeholder="Your name"
						name="name"
						className="px-3 py-3 placeholder-primary text-text relative bg-secondary bg-opacity-50 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
						required
					/>
				</div>
				<div className="mb-3 pt-0">
					<input
						type="email"
						placeholder="Email"
						name="email"
						className="px-3 py-3 placeholder-primary text-text relative bg-secondary bg-opacity-50 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
						required
					/>
				</div>
				<div className="mb-3 pt-0">
					<textarea
						placeholder="Your message"
						name="message"
						rows={10}
						className="px-3 py-3 placeholder-primary text-text relative bg-secondary bg-opacity-50 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
						required
					/>
				</div>
				<div className="mb-3 pt-0">
					<button
						className="bg-primary text-white active:bg-accent font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="submit"
					>
						Send a message
					</button>
				</div>
			</form>
		</section>
	);
}
