import React, { FC } from 'react'

import Head from 'next/head'

import { Header } from '../header'

type LayoutProps = {
    children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>TODO アプリ</title>
                <meta
                    name="description"
                    content="This is a Todo App using Next.js, GraphQL, and Auth0."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen bg-stone-50">
                <Header />
                <div className="p-4 max-w-6xl">{children}</div>
            </main>
        </>
    )
}
