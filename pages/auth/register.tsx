import Card from "@/components/shared-components/Card";
import Input from "@/components/shared-components/Input";
import Button from "@/components/shared-components/Button";

import {BsFillPersonFill, BsFillEnvelopeFill, BsFillCreditCardFill} from "react-icons/bs";
import Link from "next/link";

export default function Register() {
    return (
        <Card>
            <h1 className={"font-bold text-4xl p-4"}>SIGN UP</h1>

            <form>
                <Input type={"text"} label={"First Name"} name={"name"} icon={<BsFillPersonFill />} />
                <Input type={"text"} label={"Last Name"} name={"lastname"} icon={<BsFillPersonFill />} />
                <Input type={"text"} label={"Email"} name={"email"} icon={<BsFillEnvelopeFill />} />
                <Input type={"password"} label={"Password"} name={"password"} icon={<BsFillCreditCardFill />} />
                <Input type={"password"} label={"Confirm Password"} name={"confirm"} icon={<BsFillCreditCardFill />} />

                <Button>REGISTER</Button>
            </form>

            <p className={"text-center"}>
                You already have an account?<br />
                Go to <Link href={"/auth/login"} className={"hover:text-blue-700 hover:underline"}>Sign in</Link>
            </p>
        </Card>
    )
}