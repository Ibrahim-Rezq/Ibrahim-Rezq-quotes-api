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
                className='max-w-md mx-auto px-4 py-2'
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
                <label className='form-control w-full m-auto mb-4'>
                    <div className='label'>
                        <span className='label-text'>What is your name?</span>
                    </div>
                    <textarea
                        id='content'
                        name='content'
                        placeholder=''
                        className='textarea textarea-bordered h-24'
                        required
                        defaultValue={quote.content}
                        dir={isRTL ? 'rtl' : 'ltr'}
                    />
                </label>
                <div className='flex gap-4 mb-4'>
                    <label className='form-control w-full max-w-xs'>
                        <div className='label'>
                            <span className='label-text'>
                                What is your name?
                            </span>
                        </div>
                        <input
                            type='text'
                            id='author'
                            name='author'
                            className='input input-bordered w-full max-w-xs'
                            placeholder=''
                            required
                            defaultValue={quote.author}
                            dir={isRTL ? 'rtl' : 'ltr'}
                        />
                    </label>

                    <label className='form-control w-full max-w-xs'>
                        <div className='label'>
                            <span className='label-text'>
                                What is your name?
                            </span>
                        </div>
                        <input
                            type='text'
                            id='source'
                            name='source'
                            className='input input-bordered w-full max-w-xs'
                            placeholder=''
                            defaultValue={quote.source}
                            dir={isRTL ? 'rtl' : 'ltr'}
                        />
                    </label>
                </div>

                <button
                    type='submit'
                    className='btn btn-outline btn-primary !rounded-xl'
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default QuoteUpdateForm
