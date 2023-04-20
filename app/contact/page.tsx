import pic from '../../public/_mg_3639.jpg'
import Image from 'next/image'

export default function Contact() {
  return (
    <section className="w-full h-full">

      <div className="w-full h-full relative">

        {/* Image */}
        <Image src={pic} alt="Contact background image" fill={true} className="w-full object-cover" />

        {/* Contact Form */}
        <form
          // action={FORM_ENDPOINT}
          // onSubmit={handleSubmit}
          className="absolute top-1/4 lg:top-1/4 lg:left-1/3 lg:-translate-x-1/2 | p-2 max-w-xl w-full h-max | bg-black bg-opacity-50 rounded-lg"
          method="POST"
          target="_blank"
        >
          <h1 className="p-2 my-h1 text-center text-white text-4xl">Contact Jonathan</h1>
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Your message"
              name="message"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <button
              className="bg-yellow-500 text-white active:bg-yellow-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>

      </div>


    </section>
  )
}