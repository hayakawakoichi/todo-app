import { NextApiRequest, NextApiResponse } from 'next'

import { getAccessToken } from '@auth0/nextjs-auth0'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { accessToken } = await getAccessToken(req, res)
        res.status(200).json({ accessToken })
    } catch (error) {
        console.error(
            'An error occurred while trying to get an access token:',
            error
        )
        res.status(error.status || 500).end(error.message)
    }
}
