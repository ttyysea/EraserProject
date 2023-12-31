import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyle.css"
import { Toolbar } from "../brushPaint/Toolbar";

class Navbar extends Component{
    
    render(){
        return(
            <nav className="NevbarItmes" >
                <h1 className="logo">
                    Photo
                </h1>
                <Toolbar />
                <ul className='nav-menu'>
                    {MenuData.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a href={item.url} 
                                className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;