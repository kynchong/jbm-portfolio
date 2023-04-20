import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar p-2 | flex flex-row justify-between items-start | md:p-4 lg:p-8">

            {/* Site Title & Subtitle */}
            <div className="title flex flex-col">
                <h1 className="font-serif font-black text-9xl">Do the<br />write<br />thing</h1>
                <h6 className="p-2 font-thin text-9xl">Creative<br/>portfolio<br/>of<br/>JBM</h6>
                {/* Links */}
                <ul className="links p-4 | flex flex-col gap-4">
                    <li className="hover:underline"><Link href="/">— Home</Link></li>
                    <li className="hover:underline"><Link href="/about">— About</Link></li>
                    <li className="hover:underline"><Link href="/contact">— Contact</Link></li>
                </ul>
            </div>


        </div>
    );
}
