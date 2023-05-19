import React from 'react'

import './css/progress_bar.css'

export const ProgressBar=({barName,percent})=>{

    return(
        <div>
            <div className='progress-description'><p>{barName}</p><p>{percent}%</p></div>
            <div class="progress-bar">
                <div class="progress-line" style={{width:`${percent}%`}}></div>
            </div>
        </div>
        
    )
}