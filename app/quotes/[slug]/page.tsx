import Quote from '@/components/quote'
import { getQuoteById } from '@/utils/quote'
import { redirect } from 'next/navigation'

export default async function SingleQuote({
    params,
}: {
    params: { slug: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    if (typeof Number(params.slug) === 'number') {
        const quote = await getQuoteById(Number(params.slug))
        if (quote) return <Quote quote={quote} />
        return redirect('/404')
    } else {
        console.log('the path is wrong')
    }
}
