export const dynamic = 'force-dynamic'
import Quote from '@/components/quote'
import { getAllQuotes } from '@/utils/quote'
import { redirect } from 'next/navigation'

export default async function Quotes() {
    let quotes = []

    try {
        quotes = await getAllQuotes()
    } catch (error) {
        console.error('Failed to fetch quotes:', error)
        return redirect('/404')
    }

    return (
        <main className='w-screen h-screen flex flex-col justify-start items-start'>
            {quotes.map((quote) => (
                <Quote key={quote.content} quote={quote} />
            ))}
        </main>
    )
}
