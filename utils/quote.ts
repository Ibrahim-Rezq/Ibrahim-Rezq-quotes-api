import prisma from './prisma'

// Create Quote function (uses type for clarity)
export async function createQuote(data: Quote): Promise<Quote> {
    return await prisma.quote.create({ data })
}

// Get all quotes
export async function getAllQuotes(): Promise<Quote[]> {
    return await prisma.quote.findMany()
}

// Get quote by ID
export async function getQuoteById(id: number): Promise<Quote | null> {
    return await prisma.quote.findUnique({ where: { id } })
}

// Update quote
export async function updateQuote(
    id: number,
    data: Partial<Quote>
): Promise<Quote> {
    return await prisma.quote.update({ where: { id }, data })
}

// Delete quote
export async function deleteQuote(id: number): Promise<Quote> {
    return await prisma.quote.delete({ where: { id } })
}

// Get random quote
export async function getRandomQuote(): Promise<Quote | null> {
    const quotes = await getAllQuotes()

    if (!quotes.length) return null

    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}
