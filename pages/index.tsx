import {Inter} from 'next/font/google'
import Image from "next/image"
import JSConfetti from "js-confetti";

import banner from '@/assets/banner.jpg'
import avatar from '@/assets/avatar.jpg'
import ProfileText from "@/components/shared-components/ProfileText";
import Button from "@/components/shared-components/Button";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    // const jsConfetti = new JSConfetti();

    return (
        <main>
            <div className={"custom-profile"}>
                <Image
                    src={banner}
                    alt={"Banner Image"}
                    width={512}
                />

                <Image
                    src={avatar}
                    alt={"Avatar"}
                    width={160}
                    className={"rounded-full -mt-28 shadow-2xl"}
                />

                <div className={"w-full p-8"}>
                    <ProfileText title={"Full Name"} content={"Morgan"}/>
                    <ProfileText title={"Email"} content={"mmastrangelo@gmail.com"}/>
                    <ProfileText title={"Registered"} content={"04/24/2020"}/>
                </div>
            </div>
        </main>
    )
}
