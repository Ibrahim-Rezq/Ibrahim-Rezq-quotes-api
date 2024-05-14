import { NextResponse } from 'next/server'
import Quotes from '../../../data.json'
export async function GET(request: Request) {
    const quote = Quotes[Math.floor(Math.random() * Quotes.length)]
    return new NextResponse(JSON.stringify(quote))
}
