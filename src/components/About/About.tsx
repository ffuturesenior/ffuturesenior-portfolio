import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './css/about_css.css'
import { Img } from '../img'

export const About=()=>{
    
    return(
        <div className='center'>
            <div className='about_container'>
                <div className='about_header'>
                    <h1>about</h1><br/>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
                <div className='about_main'>
                    <div>
                        <Img imgPath='usy.jpg' height='300px' width='300px'/>
                    </div>
                    <div className='p-3 pt-1'>
                        <div>
                            <h2>Web Developer.</h2>
                            <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </span>
                        </div>
                        <div>
                            <div className='about_main_flex'>
                                <ul className='about_main_flex_list-item no-bullet'>
                                    <li><ChevronRightIcon/><strong>Birthday:</strong> 18 june 2005</li>
                                    <li><ChevronRightIcon/><strong>Website:</strong> doom097.github.io</li>
                                    <li><ChevronRightIcon/><strong>City:</strong>Bilhorod-Dnistrovskiy</li>
                                </ul>
                                <ul className='about_main_flex_list-item no-bullet'>
                                    <li><ChevronRightIcon/><strong>Degree:</strong> react dev</li>
                                    <li><ChevronRightIcon/><strong>Email:</strong> shamray.ruslan068@gmail.com</li>
                                    <li><ChevronRightIcon/><strong>Freelance:</strong> Available</li>
                                </ul>
                            </div>
                            <span>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}