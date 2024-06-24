import QuoteEdit from '@/components/quote-edit'
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
        if (quote)
            return (
                <main className='min-w-full min-h-full flex justify-center items-center'>
                    <QuoteEdit quote={quote} />
                </main>
            )
        return redirect('/404')
    } else {
        console.log('the path is wrong')
    }
}
