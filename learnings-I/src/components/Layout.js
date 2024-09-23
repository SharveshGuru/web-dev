import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
class Layout extends Component{
    render(){
        return(
            <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/voting">Voting</Link>
                    </li>
                    <li>
                        <Link to="/clicker">Clicker</Link>
                    </li>
                    <li>
                        <Link to="/department">Department</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            </>
        )
    }
}
export default Layout;