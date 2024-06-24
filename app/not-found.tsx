'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()

    const goBack = () => {
        router.back()
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 w-full'>
            <h1 className='text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white'>
                404
            </h1>
            <p className='text-lg text-center text-gray-600 dark:text-gray-400'>
                Oops! The page you&apos;re looking for could not be found.
            </p>
            <div className='flex gap-4 mt-8'>
                <button
                    onClick={goBack}
                    className='rounded bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300'
                >
                    Go Back A Page
                </button>
                <Link
                    href='/'
                    className='rounded bg-cyan-500 px-4 py-2 font-semibold text-white hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300'
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}
