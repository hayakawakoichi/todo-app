import React from 'react'

import { useUser } from '@auth0/nextjs-auth0/client'

import { TaskForm } from '@/components/form'
import { Layout } from '@/components/layout/Layout'

export default function Home() {
    const { user, error, isLoading } = useUser()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <Layout>
            <h1 className="text-2xl">{user?.name} さんのタスク一覧</h1>
            <TaskForm />
        </Layout>
    )
}
