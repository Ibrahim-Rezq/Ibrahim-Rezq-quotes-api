import React, { PropsWithChildren } from 'react'
import Quote from './quote'
import Link from 'next/link'

interface QuoteProps extends PropsWithChildren {
    quote: Quote
}

const QuoteEdit: React.FC<QuoteProps> = ({ quote }) => {
    return (
        <div>
            <Quote quote={quote} />
            <div className='flex justify-center items-center gap-4'>
                <Link
                    href={`quotes/edit/${quote.id}`}
                    className='text-emerald-500 dark:text-emerald-300'
                >
                    Edit
                </Link>
                <Link
                    href={`quotes/delete/${quote.id}`}
                    className='text-red-500 dark:text-red-300'
                >
                    Delete
                </Link>
            </div>
        </div>
    )
}

export default QuoteEdit
