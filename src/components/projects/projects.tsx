import { useState,useEffect } from "react"

import './css/projects.css'
import { Project } from "./project"

export const Projects=()=>{
    const [projects,setProjects]=useState([
        {name:'social-media app',imgpath:'photo1684248416.jpeg',link:'https://github.com/ffuturesenior/abobasocial',type:'react'},
        {name:'shop',imgpath:'hhh.jpeg',link:'https://github.com/ffuturesenior/shop',type:'react'},
        {name:'console-rotfolio',imgpath:'bash-161382_960_720.webp',link:'https://console-portfolio-ffuturesenior.netlify.app/',type:'react'},
        {name:'html/css site',imgpath:'Thousand-02 1.png',link:'https://ffuturesenior.github.io/protfSite1',type:'html/css/js'}
    ])
    const [filteredProjects,setFitleredProjects]=useState([
        {name:'social-media app',imgpath:'photo1684248416.jpeg',link:'https://github.com/ffuturesenior/abobasocial',type:'react'},
        {name:'shop',imgpath:'hhh.jpeg',link:'https://github.com/ffuturesenior/shop',type:'react'},
        {name:'console-rotfolio',imgpath:'bash-161382_960_720.webp',link:'https://console-portfolio-ffuturesenior.netlify.app/',type:'react'},
        {name:'html/css site',imgpath:'Thousand-02 1.png',link:'https://ffuturesenior.github.io/protfSite1',type:'html/css/js'}
    ])
    const [activeType,setActiveType]=useState('all')

    const typeHandler=(id:string)=>setActiveType(id)

    useEffect(()=>{
        const arr=projects
        if(activeType!='all'){
            setFitleredProjects(
                arr.filter((p)=>{
                    if(p.type==activeType) return p
                })
            )
        }
        
    },[activeType])


    return(
        <div className="center">
            <div className="projects_container">
                <div className="project_header">
                    <div className="project_header_title">
                        <h1>
                            Portfolio
                        </h1>
                        <span>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </span>
                    </div>
                    <div className="project_header_nav">
                        {['all','react','html/css/js'].map(p=>
                            <div 
                            onClick={()=>typeHandler(p)} 
                            key={p} className={`project_header_nav_item ${activeType==p?`active`:``}`}>{p}</div>
                        )}
                    </div>
                </div>
                <div className="center">
                    <div className="project_list">
                        {activeType!='all'?
                            filteredProjects.map(p=>
                                <Project key={p.imgpath} imgpath={p.imgpath} link={p.link} name={p.name}/> 
                            )
                        :
                            projects.map(p=>
                                <Project key={p.imgpath} imgpath={p.imgpath} link={p.link} name={p.name}/> 
                            )
                        }
                    </div>
                </div>
                
            </div>    
        </div>
    )
}