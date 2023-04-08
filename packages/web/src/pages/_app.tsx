import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                fontFamily: 'Inter, sans-serif',
                colorScheme: 'light',
            }}
        >
            <Component {...pageProps} />
        </MantineProvider>
    )
}
