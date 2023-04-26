import { useTheme } from "next-themes"

export default function Test() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    return (
        <div>
            <h1 className="bg-blue-400 text-8xl p-32">This is the title</h1>
            <button className="w-[256px] p-16 bg-[#4caf50]">Hello</button>
        </div>
    )
}