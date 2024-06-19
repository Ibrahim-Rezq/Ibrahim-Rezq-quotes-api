import updateQuoteAction from '@/utils/server-actions/updateQuoteAction'

const isRtlText = require('is-rtl-text')

interface QuoteUpdateFormProps {
    slug: number
    quote: Quote
}
const QuoteUpdateForm: React.FC<QuoteUpdateFormProps> = ({ slug, quote }) => {
    const isRTL = isRtlText(quote.content)

    return (
        <div className='m-auto w-full min-w-96 max-w-3xl p-4'>
            <form
                className='max-w-sm mx-auto dark:bg-gray-900 rounded-lg py-2 px-4'
                action={updateQuoteAction}
            >
                <input
                    type='text'
                    id='slug'
                    name='slug'
                    className='hidden'
                    required
                    defaultValue={slug}
                />
                <div className='mb-5'>
                    <label
                        htmlFor='content'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        The Quote
                    </label>
                    <textarea
                        id='content'
                        name='content'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-h-28'
                        placeholder='You do not rise to the level of your goals. You fall to the level of your systems.'
                        required
                        defaultValue={quote.content}
                        dir={isRTL ? 'rtl' : 'ltr'}
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
                        defaultValue={quote.author}
                        dir={isRTL ? 'rtl' : 'ltr'}
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
                        defaultValue={quote.source}
                        dir={isRTL ? 'rtl' : 'ltr'}
                    />
                </div>
                <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default QuoteUpdateForm
