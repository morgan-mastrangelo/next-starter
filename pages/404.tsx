import Card from "@/components/shared-components/Card";
import Link from "next/link";


export default function NotFound() {
    return (
        <Card>
            <h1 className={"font-bold text-8xl"}>404</h1>
            <span className={"w-full h-0.5 mt-2 mb-2 bg-black"} />
            <p className={"p-4 text-3xl"}>Page Not Found</p>
            <Link href={"/"} className={"hover:text-blue-700 hover:underline"}>Go to Home page</Link>
        </Card>
    )
}
