import { createQuote } from '@/utils/quote'
import { redirect } from 'next/navigation'

export default function AddQuote() {
    async function CreateQuoteAction(formData: FormData) {
        'use server'
        try {
            const rawFormData = {
                content: formData.get('content')?.toString() ?? '',
                author: formData.get('author')?.toString() ?? '',
                source: formData.get('source')?.toString() ?? '',
            }
            // TODO: Uncomment this when you go public
            // await createQuote(rawFormData)
        } catch (error) {
            console.error('Failed to add quote:', error)
        } finally {
            redirect(`/quotes`)
        }
    }

    return (
        <div className='m-auto w-full min-w-96 max-w-3xl p-4'>
            <form
                className='max-w-sm mx-auto dark:bg-gray-900 rounded-lg py-2 px-4'
                style={{ direction: 'ltr' }}
                action={CreateQuoteAction}
            >
                <div className='mb-5'>
                    <label
                        htmlFor='content'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        The Quote
                    </label>
                    <input
                        type='text'
                        id='content'
                        name='content'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='You do not rise to the level of your goals. You fall to the level of your systems.'
                        required
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='author'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        The Quote Author
                    </label>
                    <input
                        type='text'
                        id='author'
                        name='author'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='James Clear'
                        required
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='source'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        The Quote Source
                    </label>
                    <input
                        type='text'
                        id='source'
                        name='source'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Atomic Habits'
                    />
                </div>
                <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
