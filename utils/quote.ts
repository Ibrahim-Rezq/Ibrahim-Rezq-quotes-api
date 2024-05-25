import db from './db'

// Define type for Quote data
type Quote = {
    content: string
    author: string
    source: string
}

// Create Quote function (uses type for clarity)
export async function createQuote(data: Quote): Promise<Quote> {
    return await db.quote.create({ data })
}

// Get all quotes
export async function getAllQuotes(): Promise<Quote[]> {
    return await db.quote.findMany()
}

// Get quote by ID
export async function getQuoteById(id: number): Promise<Quote | null> {
    return await db.quote.findUnique({ where: { id } })
}

// Update quote
export async function updateQuote(
    id: number,
    data: Partial<Quote>
): Promise<Quote> {
    return await db.quote.update({ where: { id }, data })
}

// Delete quote
export async function deleteQuote(id: number): Promise<Quote> {
    return await db.quote.delete({ where: { id } })
}

// Get random quote
export async function getRandomQuote(): Promise<Quote | null> {
    const quotes = await getAllQuotes()

    if (!quotes.length) return null

    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}
