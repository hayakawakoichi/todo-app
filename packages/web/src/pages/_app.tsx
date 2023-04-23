import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

import { client } from '@/lib/ApolloClient'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </UserProvider>
    )
}
