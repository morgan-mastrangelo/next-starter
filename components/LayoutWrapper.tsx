import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: any) {
    return (
        <div className={"flex min-h-screen flex-col items-center justify-between"}>
            <Navbar />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    )
}
