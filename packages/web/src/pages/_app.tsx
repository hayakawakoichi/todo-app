import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

import { client } from '@/lib/ApolloClient'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <ApolloProvider client={client}>
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
            </ApolloProvider>
        </UserProvider>
    )
}
