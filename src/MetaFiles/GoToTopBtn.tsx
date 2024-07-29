import React, { useState, useEffect } from 'react'
import arrow_up3 from '../StaticFiles/arrow_up3.png'
// import arrow_up_orange from '../StaticFiles/arrow_up_orange.png'
// import arrow_up1 from '../StaticFiles/arrow_up1.png'
// import arrow_up2 from '../StaticFiles/arrow_up2.png'







const GoToTopBtn = ( ) => {

    // setting up state.
    const [ showScrollTopBtn, setShowScrollTopBtn ] = useState( false )

    // checking distance scrolled from top of page to reveal or hide scroll button
    window.addEventListener('scroll', () => {
        if( window.scrollY > 1224 ) {
            setShowScrollTopBtn( true )
        }
        else {
            setShowScrollTopBtn( false )
        }
    })

    // useEffect(() => {
    //     if( window.scrollY > 1224 ) {
    //         setShowScrollTopBtn( true )
    //     }
    //     else {
    //         setShowScrollTopBtn( false )
    //     }
    // }, [ showScrollTopBtn ])


    // scroll to top function.
    const ScrollToTop = ( ) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    


    return (
        <div>
        {
            showScrollTopBtn === true?  
            // <div className='bg-slate-100 border-[#ec5b53] border-2 rounded-full p-2 
            //                   fixed bottom-7 right-3 cursor-pointer animate-pulse'>
            //     <img className='w-6' src={ arrow_up_orange } alt='arrow-up' onClick={ ScrollToTop } />
            // </div>

            <div className='bg-[#ec5b53] text-white rounded-full p-2 fixed bottom-7 right-3 cursor-pointer animate-pulse'>
                <img className='w-6' src={ arrow_up3 } alt='arrow-up' onClick={ ScrollToTop } />
            </div>
            :
            <div>
                { null }
            </div>

        }
        </div>
    )

}


export default GoToTopBtn