import { redirect } from 'next/navigation'
import { deleteQuote } from '../quote'

export default async function deleteQuoteAction(formData: FormData) {
    'use server'

    const id = Number(formData.get('slug'))

    if (!isNaN(id)) {
        try {
            await deleteQuote(id)
        } catch (error) {
            console.error('Failed to delete quote:', error)
        } finally {
            redirect(`/quotes`)
        }
    } else {
        console.error('Invalid ID:', id)
    }
}
