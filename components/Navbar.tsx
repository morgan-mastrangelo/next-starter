import logo from '@/public/next.svg';
import Image from "next/image";
import NavLinks from '@/data/NavLinks';
import Link from "next/link";

export default function Navbar() {
    const gotoHome = () => {
        window.location.href = "/";
    }

    return (
        <div className={"flex justify-between items-center w-full h-auto pl-8 pr-8 bg-teal-500"}>
            <Image
                src={logo}
                alt={"logo"}
                width={128}
                onClick={gotoHome}
                className={"cursor-pointer"}
                priority={true}
            />

            <div className={"flex font-"}>
                {
                    NavLinks.map((navLink: any) =>
                        <Link
                            key={navLink.id}
                            className={"p-4 font-bold text-[14px] transition-all hover:bg-black hover:text-white"}
                            href={navLink.href}
                        >
                            {navLink.title}
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
