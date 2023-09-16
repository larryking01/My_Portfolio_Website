import React from 'react'


import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


const LearnTailwind = ( ) => {

    const percentage = 80


    return (
            <div>
                <CircularProgressbar value={ percentage } text={`${ percentage }%`} />

            </div>

    )

}


export default LearnTailwind
