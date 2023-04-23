import React, { FC, useState } from 'react'

import { useUser } from '@auth0/nextjs-auth0/client'

import { MenuButton } from './MenuButton'

export const Header: FC = () => {
    const [showRightMenu, setShowRightMenu] = useState(false)
    const { user } = useUser()

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-white font-bold text-xl">
                                TODO アプリ
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <MenuButton label="Dashboard" path="/" />
                                <MenuButton label="Team" path="/task/team" />
                            </div>
                        </div>
                    </div>

                    <div className="ml-4 flex items-center md:ml-6">
                        <div className="ml-3 relative md:hidden">
                            <button
                                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                onClick={() =>
                                    setShowRightMenu((prev) => !prev)
                                }
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="ml-3 relative hidden md:block">
                            <button
                                className="p-4 flex items-center space-x-4 hover:bg-gray-700 transition duration-400 ease-in-out rounded-md"
                                onClick={() =>
                                    setShowRightMenu((prev) => !prev)
                                }
                            >
                                <img
                                    src={user?.picture || ''}
                                    alt="icon"
                                    className="w-8 h-8 rounded-full"
                                />
                                <h2 className="text-sm font-bold text-gray-300">
                                    {user?.name}
                                </h2>
                            </button>
                        </div>

                        {showRightMenu && (
                            <div className="absolute right-0 mt-40 w-48 rounded-md shadow-lg">
                                <div className="py-1 rounded-md bg-white shadow-xs">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                    >
                                        Profile
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                    >
                                        Settings
                                    </a>
                                    {!user && (
                                        <a
                                            href="/api/auth/login"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                        >
                                            Sign in
                                        </a>
                                    )}
                                    {user && (
                                        <a
                                            href="/api/auth/logout"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
