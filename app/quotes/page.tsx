export const dynamic = 'force-dynamic'
import QuoteEdit from '@/components/quote-edit'
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
        <main className='w-full min-h-full flex flex-col justify-start items-start py-8 px-4 gap-6'>
            {quotes.map((quote, i) => (
                <div className='w-full' key={quote.content}>
                    {/* the number of the quote
                     <h2 className='text-bold text-3xl text-center text-gray-400 dark:text-gray-600'>
                        {i + 1}
                    </h2> */}
                    <QuoteEdit quote={quote} />
                    <hr className='mt-4 border-gray-400 dark:border-gray-600' />
                </div>
            ))}
        </main>
    )
}
