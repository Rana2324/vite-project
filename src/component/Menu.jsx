import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/about/10/Rana">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/contact">Contact</NavLink></li>
                </ul>

            </ul>
        </div>
    );
};

export default Menu;