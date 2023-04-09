import { UserProvider } from '@auth0/nextjs-auth0/client'
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
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </MantineProvider>
    )
}
