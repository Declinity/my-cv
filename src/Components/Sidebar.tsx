import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from "./Data/Routes.tsx";
import {IconContext} from "react-icons"
import "./Styles/Sidebar.css"

export const Sidebar = () => {
    const [sidebar, showSidebar] = useState(false)
    
    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <Link to='#' className="menu-bars">
                    <FaIcons.FaBars onClick={() => showSidebar(!sidebar)}></FaIcons.FaBars>
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={() => showSidebar(!sidebar)}>
                    <li>
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(<li className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>)
                    })}
                </ul>
            </nav>
         </IconContext.Provider>
        </>
    )
}