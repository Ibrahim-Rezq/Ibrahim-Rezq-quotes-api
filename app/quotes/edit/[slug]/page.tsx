import QuoteUpdateForm from '@/components/quote-update-form'
import { getQuoteById } from '@/utils/quote'
import { redirect } from 'next/navigation'

interface QuoteEditPageProps {
    params: { slug: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function QuoteEditPage({ params }: QuoteEditPageProps) {
    const slug = Number(params.slug)

    if (isNaN(slug)) {
        console.error('Invalid path: slug is not a number')
        return redirect('/404')
    }

    const quote = await getQuoteById(slug)

    if (!quote) {
        return redirect('/404')
    }

    return <QuoteUpdateForm slug={slug} quote={quote} />
}
