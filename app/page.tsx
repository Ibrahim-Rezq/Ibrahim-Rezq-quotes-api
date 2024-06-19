export const dynamic = 'force-dynamic'
import Quote from '@/components/quote'
import { getRandomQuote } from '@/utils/quote'
import { redirect } from 'next/navigation'

export default async function Home() {
    const quote = await getRandomQuote()
    if (!quote) redirect('/404')
    return <Quote quote={quote} />
}
