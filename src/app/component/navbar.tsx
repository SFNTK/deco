import React from 'react';
import './navbar.css';

type propslink = {
  
        isopen: boolean,
        setopen:React.Dispatch<React.SetStateAction<boolean>>

    
}

const Navbar = (props:propslink) => {
    return (
        <div id='nav'>
            <img src='./logo.png'/>
            <ul id='list'>
                <li><a href='#categoriapara'>Categories</a></li>
                <li> <a href="#gallerypara">Gallery</a></li>
                <li><a href="#bigg">FEEDBACK</a> </li>
              
            </ul>
            <div id='contact'>
               <a href="#contactsection">Contact Us</a> 
            </div>
            <img src='./burger-bar.png' id='brgr' onClick={()=>{
                props.setopen(true)
                
            }}/>
          
        </div>
    );
}

export default Navbar;
