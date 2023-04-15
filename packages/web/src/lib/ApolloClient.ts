import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const requestAccessToken = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/session`
    )

    if (res.ok) {
        const { accessToken } = await res.json()
        return accessToken
    }

    return null
}

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/graphql`,
})

const authLink = setContext(async (_, { headers }) => {
    const token = await requestAccessToken()
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
        },
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})
