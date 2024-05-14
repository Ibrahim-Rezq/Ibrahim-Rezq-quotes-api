'use client'
import Quotes from '../data.json'

export default function Home() {
    const quote = Quotes[Math.floor(Math.random() * Quotes.length)]

    return (
        <main className='w-screen h-screen flex bg-[#191919] '>
            <blockquote className='m-auto p-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 max-w-2xl'>
                <p className='text-xl italic font-medium leading-relaxed '>
                    &quot;{quote.content}&quot;
                </p>
                <cite>- {quote.author}</cite>
                <br />
                {/* <cite className='ps-4'>- {quote.source}</cite> */}
            </blockquote>
        </main>
    )
}
