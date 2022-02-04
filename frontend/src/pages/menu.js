import react from "react";
import './menu.css';

const Menu = () =>{
    return(
        <div className="menu">
            <div className="left part">
                <div className="title">
                    <p>Main dish</p>
                </div>
                <ul>
                    <li>Poulet fri</li>
                </ul>
            </div>
            <div className="right">
            <div className="top">
                <div className="title">
                    <p>Appetizer</p>
                </div>
            </div>
            <div className="bottom">
                <div className="title">
                    <p>Dessert</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Menu;