import React from 'react'; 
import Nav from './nav';
import '../styles/header.css'



function Header({cantidadCarrito}) {  
    return (  
        <header className="header"> 
        <Nav cantidadCarrito={cantidadCarrito}/> 
        </header>  
    );  
}  
export default Header


