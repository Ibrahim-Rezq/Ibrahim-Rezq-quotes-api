export const dynamic = 'force-dynamic'
import Quote from '@/components/quote'
import QuoteEdit from '@/components/quote-edit'
import { getAllQuotes } from '@/utils/quote'
import Link from 'next/link'
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
        <main className='w-full min-h-full flex flex-col justify-start items-start py-8 px-4 gap-6'>
            {quotes.map((quote, i) => (
                <div className='w-full' key={quote.content}>
                    <Link href={`quotes/${quote.id}`}>
                        {/* //TODO: change this to QuoteEdit Upon updating Nav Premissions  */}
                        <Quote quote={quote} />
                    </Link>
                    <div className='divider divider-primary'>{i}</div>
                </div>
            ))}
        </main>
    )
}
