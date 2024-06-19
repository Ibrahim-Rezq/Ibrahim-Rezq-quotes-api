import React, { PropsWithChildren } from 'react'
const isRtlText = require('is-rtl-text')

interface QuoteProps extends PropsWithChildren {
    quote: {
        content: string
        author: string
        source?: string
    }
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
    const { content, author, source } = quote
    const isRTL = isRtlText(content)

    return (
        <blockquote
            dir={isRTL ? 'rtl' : 'ltr'}
            className='m-auto p-4 border-s-4 border-transparent bg-transparent dark:border-transparent dark:bg-transparent w-full max-w-2xl'
        >
            <p className='text-xl italic font-medium leading-relaxed'>
                &quot;{content}&quot;
            </p>
            <cite>- {author}</cite>
            {source && (
                <>
                    <br />
                    <cite className='ps-4'>- {source}</cite>
                </>
            )}
        </blockquote>
    )
}

export default Quote
