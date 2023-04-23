import { FC } from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    label: string
    loading: boolean
}

export const Button: FC<ButtonProps> = ({ loading, label, ...props }) => {
    return (
        <button
            {...props}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline focus:ring-gray-500 focus:ring-2"
            disabled={loading}
        >
            <div className="flex justify-center items-center">
                {loading && (
                    <div className="animate-spin h-5 w-5 border-4 border-blue-200 rounded-full border-t-transparent mr-2" />
                )}
                {!loading && <span>{label}</span>}
            </div>
        </button>
    )
}
