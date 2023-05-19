import React from 'react';
import { Sidebar } from './components/sidebar/sidebar';
import { closeNav, openNav } from './helpers/sidebar';
import { Main } from './modules/main/main';


function App() {
  
  return (
    <div style={{minHeight:'100vh',maxWidth:'100vw',overflow:"hidden"}}>
      <Sidebar/>
      <Main/>
    </div>

  );
}

export default App;
