import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar p-2 | flex flex-row justify-between items-center | md:p-4 lg:p-8">

            {/* Site Title & Subtitle */}
            <div className="title">
                <h1 className="font-black text-xl">Do the write thing</h1>
                <h6 className="font-thin">Creative portfolio of JBM</h6>
            </div>

            {/* Links */}
            <ul className="links flex flex-row gap-4">
                <li className="hover:underline"><Link href="/">Home</Link></li>
                <li className="hover:underline"><Link href="/about">About</Link></li>
                <li className="hover:underline"><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
