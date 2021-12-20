import React, { useEffect, useState} from 'react';
import './index.css'
import {Main1} from "./workspace";
import {Main2} from "./workspace";


function App(){
    const [width,setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        document.addEventListener('resize',
        ()=>{setWidth(window.innerWidth)})
        document.removeEventListener('resize', 
        ()=>{setWidth(window.innerWidth)})
    },[width])    
    if(width<=375){
        return(
        <>
            <Main1/>
            
        </>
        )
    }
    else{
        return(
            <>
                <Main2/>
            </>
        )
    }
}

export default App;