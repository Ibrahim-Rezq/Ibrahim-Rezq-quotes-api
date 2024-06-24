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
            <form className='max-w-md mx-auto' action={updateQuoteAction}>
                <input
                    type='text'
                    id='slug'
                    name='slug'
                    className='hidden'
                    required
                    defaultValue={slug}
                />
                <div className='relative z-0 w-full mb-5 group'>
                    <textarea
                        id='content'
                        name='content'
                        placeholder=''
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer min-h-40'
                        required
                        defaultValue={quote.content}
                        dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    <label
                        htmlFor='content'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                        The Quote
                    </label>
                </div>

                <div className='grid md:grid-cols-2 md:gap-6'>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='text'
                            id='author'
                            name='author'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=''
                            required
                            defaultValue={quote.author}
                            dir={isRTL ? 'rtl' : 'ltr'}
                        />
                        <label
                            htmlFor='author'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            The Quote Author
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='text'
                            id='source'
                            name='source'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=''
                            defaultValue={quote.source}
                            dir={isRTL ? 'rtl' : 'ltr'}
                        />
                        <label
                            htmlFor='source'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            The Quote Source
                        </label>
                    </div>
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
