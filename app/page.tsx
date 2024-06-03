export const dynamic = 'force-dynamic'
import { getAllQuotes } from '@/utils/quote'

export default async function Home() {
    const quotes = await getAllQuotes()
    const { content, author, source } =
        quotes[Math.floor(Math.random() * quotes.length)]

    return (
        <main className='w-screen h-screen flex bg-[#19191900] '>
            <blockquote className='m-auto p-4 border-s-4 border-[#00000000] bg-[#00000000] dark:border-[#00000000] dark:bg-[#00000000] max-w-2xl'>
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
