import Card from "@/components/shared-components/Card";
import Input from "@/components/shared-components/Input";
import { BsFillCreditCardFill, BsFillEnvelopeFill } from "react-icons/bs";
import Button from "@/components/shared-components/Button";
import Link from "next/link";

export default function Login() {
    return (
        <Card>
            <h1 className={"font-bold text-4xl p-4"}>SIGN IN</h1>

            <form>
                <Input type={"text"} label={"Email"} name={"email"} icon={<BsFillEnvelopeFill />} />
                <Input type={"password"} label={"Password"} name={"password"} icon={<BsFillCreditCardFill />} />

                <Button>LOGIN</Button>
            </form>

            <p className={"text-center"}>
                You don't have an account?<br />
                Go to <Link href={"/auth/register"} className={"hover:text-blue-700 hover:underline"}>Sign up</Link>
            </p>
        </Card>
    )
}