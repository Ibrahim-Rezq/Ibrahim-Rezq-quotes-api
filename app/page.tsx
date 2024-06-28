export const dynamic = 'force-dynamic'
import Quote from '@/components/quote'
import { getRandomQuote } from '@/utils/quote'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
    const quote = await getRandomQuote()
    if (!quote) redirect('/404')
    return (
        <>
            <main className='min-w-full min-h-full flex justify-center items-center'>
                <Link href={`quotes/${quote.id}`}>
                    <Quote quote={quote} />
                </Link>
            </main>
        </>
    )
}
