import { getAllQuotes } from '@/utils/quote'

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
    const quotes = await getAllQuotes()
    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    return Response.json({ quote })
}
