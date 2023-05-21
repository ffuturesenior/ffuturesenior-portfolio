import React, { useState } from 'react';
import { Sidebar } from './components/sidebar/sidebar';
import { closeNav, openNav } from './helpers/sidebar';
import { Main } from './modules/main/main';


function App() {
  const [isNavOpen,setIsNavOpen]=useState(false)
  return (
    <div style={{minHeight:'100vh',maxWidth:'100vw',overflow:"hidden"}}>
      <Sidebar setIsNavOpen={setIsNavOpen}/>
      <Main isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
    </div>

  );
}

export default App;
