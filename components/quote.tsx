import React, { PropsWithChildren } from 'react'
const isRtlText = require('is-rtl-text')

interface QuoteProps extends PropsWithChildren {
    quote: Quote
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
    const { content, author, source } = quote
    const isRTL = isRtlText(content)

    return (
        <figure className='max-w-screen-md mx-auto text-center'>
            <svg
                className='w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 18 14'
            >
                <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
            </svg>
            <blockquote>
                <p
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className='text-2xl italic font-medium text-gray-900 dark:text-white'
                >
                    &quot;{content}&quot;
                </p>
            </blockquote>
            <figcaption className='flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse'>
                {/* <img
                    className='w-6 h-6 rounded-full'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                    alt='profile picture'
                /> */}
                <div
                    className='flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700'
                    dir={isRTL ? 'rtl' : 'ltr'}
                >
                    <cite className='pe-3 font-medium text-gray-900 dark:text-white'>
                        {author}
                    </cite>
                    <cite className='ps-3 text-sm text-gray-500 dark:text-gray-400'>
                        {source}{' '}
                    </cite>
                </div>
            </figcaption>
        </figure>
        // <blockquote
        //     dir={isRTL ? 'rtl' : 'ltr'}
        //     className='m-auto p-4 border-s-4 border-transparent bg-transparent dark:border-transparent dark:bg-transparent w-full max-w-2xl'
        // >
        //     <p className='text-xl italic font-medium leading-relaxed'>
        //         &quot;{content}&quot;
        //     </p>
        //     <cite>- {author}</cite>
        //     {source && (
        //         <>
        //             <br />
        //             <cite className='ps-4'>- {source}</cite>
        //         </>
        //     )}
        // </blockquote>
    )
}

export default Quote
