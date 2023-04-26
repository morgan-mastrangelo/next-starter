import '@/styles/globals.css'
import '@/styles/customized.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import LayoutWrapper from "@/components/LayoutWrapper";

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <ThemeProvider>
            <LayoutWrapper>
                <Component {...pageProps} />
            </LayoutWrapper>
        </ThemeProvider>
    )
}
