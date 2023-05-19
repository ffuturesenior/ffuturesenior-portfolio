import React,{FC} from "react";

interface props{
    imgPath:string,
    width:string,
    height:string
}

export const Img:FC<props>=({height,imgPath,width})=>{
    return(
        <div>
            <div className="" style={{position:"relative",left:"0px",overflow:"hidden",width:`${width}`,height:`${height}`}}>
                <img style={{position:"absolute",left:"0px",height:"100%",width:"100%",objectFit:"fill"}}  src={require(`../static/${imgPath}`)} width="300"/>
            </div>
        </div>
    )
}