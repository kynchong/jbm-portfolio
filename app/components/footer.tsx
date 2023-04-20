import emailIcon from '../../public/icons/square-envelope-solid.svg'
import linkedinIcon from '../../public/icons/linkedin.svg'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="p-2 box-border w-full | flex flex-row flex-wrap justify-end items-end | md:p-4 lg:p-8">
            <ul className="flex flex-row justify-end | font-thin">
                <p className="font-thin">© 2023 Jonathan Moore</p>
                <li className="ml-4"><a href="JBM4HIRE@gmail.com"><Image src={emailIcon} alt="Email" width={24} /></a></li>
                <li className="ml-4"><a href="https://www.linkedin.com/in/jonathanbrucemoore/"><Image src={linkedinIcon} alt="LinkedIn" width={24} /></a></li>
            </ul>
        </div>
    )
}