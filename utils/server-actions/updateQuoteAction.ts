import { redirect } from 'next/navigation'
import { updateQuote } from '../quote'

export default async function updateQuoteAction(formData: FormData) {
    'use server'

    const rawFormData = {
        content: formData.get('content')?.toString() || '',
        author: formData.get('author')?.toString() || '',
        source: formData.get('source')?.toString() || '',
    }
    const id = Number(formData.get('slug'))

    if (!isNaN(id)) {
        try {
            await updateQuote(id, rawFormData)
        } catch (error) {
            console.error('Failed to update quote:', error)
        } finally {
            redirect(`/quotes/${id}`)
        }
    } else {
        console.error('Invalid ID:', id)
    }
}
