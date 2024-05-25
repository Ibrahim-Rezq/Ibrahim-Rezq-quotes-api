export const dynamic = 'force-dynamic'
import { getAllQuotes } from '@/utils/quote'

export default async function Home() {
    const quotes = await getAllQuotes()
    const { content, author, source } =
        quotes[Math.floor(Math.random() * quotes.length)]

    return (
        <main className='w-screen h-screen flex bg-[#191919] '>
            <blockquote className='m-auto p-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 max-w-2xl'>
                <p className='text-xl italic font-medium leading-relaxed '>
                    &quot;{content}&quot;
                </p>
                <cite>- {author}</cite>
                {source && <br />} {/* Only render br if source exists */}
                {source && <cite className='ps-4'>- {source}</cite>}
            </blockquote>
        </main>
    )
}
