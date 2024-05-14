'use client'
import { PropsWithChildren } from 'react'

export default function Home() {
    const today = new Date()

    function daysInMonth() {
        return new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    function progress(type: 'year' | 'month' | 'week' | 'day') {
        let value

        switch (type) {
            case 'year':
                value = (today.getMonth() / 12) * 100
                break
            case 'month':
                value = (today.getDate() / daysInMonth()) * 100
                break
            case 'week':
                value = (today.getDay() / 7) * 100
                break
            case 'day':
                value = (today.getHours() / 24) * 100
                break
        }
        return value
    }

    return (
        <main className='w-screen h-screen bg-[#191919] flex'>
            <div className='flex flex-col gap-2 w-full max-w-2xl p-4 m-auto'>
                <ProgressBar
                    val={progress('year')}
                    name={'السنة'}
                    color='bg-lime-600'
                />
                <ProgressBar
                    val={progress('month')}
                    name={'الشهر'}
                    color='bg-emerald-600'
                />
                <ProgressBar
                    val={progress('week')}
                    name={'الإسبوع'}
                    color='bg-teal-600'
                />
                <ProgressBar
                    val={progress('day')}
                    name={'اليوم'}
                    color='bg-cyan-600'
                />
            </div>
        </main>
    )
}

const ProgressBar = ({
    val,
    name,
    color,
}: PropsWithChildren & { val: number; name: string; color: string }) => {
    return (
        <div className='flex justify-between align-middle h-fit'>
            <p>{name}</p>
            <div className='min-w-64 w-full max-w-[90%] '>
                <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
                    <div
                        className={`${
                            color ? color : 'bg-blue-600'
                        } text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
                        style={{ width: `${val}%` }}
                    >
                        {val.toFixed(2)}%
                    </div>
                </div>
            </div>
        </div>
    )
}
