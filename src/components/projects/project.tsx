import React, { FC } from 'react'
import { Img } from '../img'

interface props{
    name:string,
    link:string,
    imgpath:string
}


export const Project:FC<props>=({name,link,imgpath})=>{

    return(
        <div className='project_list_item'>
            <span className='project_list_item_name'>{name}</span>
            <Img height='330px' width='330px' imgPath={imgpath}/>
            <a href={`${link}` }className='project_list_item_link'><p>check it</p></a>
        </div>
    )
}