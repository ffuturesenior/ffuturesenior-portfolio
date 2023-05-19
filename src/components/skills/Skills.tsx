import React from 'react'


import { ProgressBar } from './ProgressBar'
import './css/skills.css'
export const Skills=()=>{
    
    return(
        <div className='center'>
            <div className='skills_container'>
                <div className='skills_header'>
                    <h1>Skills</h1><br/>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
                <div className='skills_middle'>
                    <div className='skills_middle_block_1'>
                        <h1>frontend</h1>
                        <ProgressBar barName={'html'} percent={60}/>
                        <ProgressBar barName={'css'} percent={60}/>
                        <ProgressBar barName={'react+ts'} percent={85}/>
                        <ProgressBar barName={'visual libraires'} percent={70}/>
                    </div>
                    <div className='skills_middle_block_2'>
                        <h1>backend</h1>
                        <ProgressBar barName={'MongoDB'} percent={85}/>
                        <ProgressBar barName={'nodeJS'} percent={60}/>
                        <ProgressBar barName={'express-framework'} percent={85}/>
                        <ProgressBar barName={'socket-io'} percent={90}/>
                    </div>
                </div>
            </div>
        </div>
    )
}