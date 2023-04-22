import { FC, useCallback, useMemo } from 'react'

import { useRouter } from 'next/router'

type MenuButtonProps = {
    label: string
    path: string
    onClick?: () => void
}

export const MenuButton: FC<MenuButtonProps> = ({ label, path }) => {
    const router = useRouter()

    const onClickButton = useCallback(() => {
        router.push(path)
    }, [path, router])

    const isSelect = useMemo(
        () => router.pathname === path,
        [path, router.pathname]
    )

    return (
        <button
            className={`${
                isSelect
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            } px-3 py-2 rounded-md text-sm font-medium`}
            onClick={onClickButton}
        >
            {label}
        </button>
    )
}
