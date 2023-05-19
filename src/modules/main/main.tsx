import { About } from "../../components/About/About";
import { Contacts } from "../../components/contacts/Contacts";
import { Projects } from "../../components/projects/projects";
import { Skills } from "../../components/skills/Skills";
import { openNav } from "../../helpers/sidebar"
import Typewriter from 'typewriter-effect';

export const Main=()=>{

    return(
        <div id="main" style={{padding:'0px'}}>
        <button style={{position:'absolute',margin:'10px',borderRadius:'10px',zIndex:'999'}} className="openbtn" onClick={openNav}>Open Sidebar</button>
        <div className="col-8">
          <div data-bs-spy="scroll" style={{height:'100vh',width:'100vw',overflowX:'hidden',overflowY:'scroll'}} data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex={0}>
                <div className="parallax">
                    <div id="item-1" style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <div>
                            <div className="hero-container" data-aos="fade-in">
                            <h1 className="text-light">Shamray Ruslan</h1>
                                <p className="text-light fs-1">
                                <Typewriter
                                    options={{
                                        strings: ['i`m developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div style={{overflow:'hidden'}}id="item-2">
                    <About/>
                </div>
                <div style={{height:'110vh'}}id="item-3">
                    <Skills/>
                </div>
                <div id="item-4">
                    <Projects/>
                </div> 
                <div style={{height:'100vh'}} id="item-5">
                    <Contacts/>
                </div> 
          </div>
        </div>
      </div>
    )
}