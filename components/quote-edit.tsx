import React, { PropsWithChildren } from 'react'
import Quote from './quote'
import Link from 'next/link'
import QuoteUpdateForm from './quote-update-form'
import deleteQuoteAction from '@/utils/server-actions/deleteQuoteAction'
interface QuoteProps extends PropsWithChildren {
    quote: Quote
}

const QuoteEdit: React.FC<QuoteProps> = ({ quote }) => {
    return (
        <div>
            <Quote quote={quote} />

            <div className='flex justify-center items-center gap-4 mt-4'>
                <label
                    htmlFor={`quote_edit_modal_${quote.id}`}
                    className='btn btn-outline btn-primary !rounded-xl'
                >
                    Edit
                </label>

                <input
                    type='checkbox'
                    id={`quote_edit_modal_${quote.id}`}
                    className='modal-toggle'
                />
                <div className='modal' role='dialog'>
                    <div className='modal-box'>
                        <QuoteUpdateForm
                            slug={Number(quote.id)}
                            quote={quote}
                        />
                    </div>
                    <label
                        className='modal-backdrop'
                        htmlFor={`quote_edit_modal_${quote.id}`}
                    >
                        Close
                    </label>
                </div>

                <label
                    htmlFor={`quote_delete_modal_${quote.id}`}
                    className='btn btn-outline btn-error !rounded-xl'
                >
                    Delete
                </label>

                <input
                    type='checkbox'
                    id={`quote_delete_modal_${quote.id}`}
                    className='modal-toggle'
                />
                <div className='modal' role='dialog'>
                    <div className='modal-box'>
                        <h3 className='text-lg font-bold text-warning'>
                            Warning!
                        </h3>
                        <p className='py-4'>
                            You are about to delete this quote are you sure
                        </p>
                        <div className='modal-action'>
                            <form action={deleteQuoteAction}>
                                <input
                                    type='text'
                                    id='slug'
                                    name='slug'
                                    className='hidden'
                                    required
                                    defaultValue={quote.id}
                                />
                                <button
                                    type='submit'
                                    className='btn btn-error !rounded-xl'
                                >
                                    Yes
                                </button>
                            </form>
                            <label
                                htmlFor={`quote_delete_modal_${quote.id}`}
                                className='btn btn-info !rounded-xl'
                            >
                                Close
                            </label>
                        </div>
                    </div>
                    <label
                        className='modal-backdrop'
                        htmlFor={`quote_delete_modal_${quote.id}`}
                    >
                        Close
                    </label>
                </div>
            </div>
        </div>
    )
}

export default QuoteEdit
