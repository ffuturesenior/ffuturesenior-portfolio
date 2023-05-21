import react ,{FC}from 'react'
import { closeNav } from '../../helpers/sidebar'
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';


import './css/sidebar.css'

interface props{
    setIsNavOpen:(bool:boolean)=>void
}

export const Sidebar:FC<props>=({setIsNavOpen})=>{

    const closeNavHandler=()=>{
        closeNav()
        setIsNavOpen(false)
    }

    return(
        <>
        <div id="mySidebar" className="sidebar">
            <a href="javascript:void(0)"  className="closebtn" onClick={closeNavHandler}>&times;</a>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <img src={require('../../static/usy.jpg')} className="rounded-circle" style={{width:"150px"}}alt="Avatar" />
                <h2 style={{color:'white'}}>Shamray Ruslan</h2>
                <div>
                    <TelegramIcon style={{margin:"0px 10px 0px 0px"}}/>
                    <GitHubIcon/>
                </div>
                <nav id="navbar-example3"  className="h-100 flex-column align-items-stretch text-center ">
                    <nav  className="nav nav-pills flex-column">
                    <a className="nav-link p-0 py-1" href="#item-1">parralax</a>
                    <a className="nav-link p-0 py-1" href="#item-2">about</a>
                    <a className="nav-link p-0 py-1" href="#item-3">skills</a>
                    <a className='nav-link p-0 py-1' href="#item-4">portfolio</a>
                    <a className='nav-link p-0 py-1' href="#item-5">contacts</a>
                    </nav>
                </nav>
            </div>
        </div>
        </>
    )
}