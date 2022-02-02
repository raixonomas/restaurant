import React from "react";
import "./home.css";

function findImage(imageName) {
    return(
        "images/" + imageName + ".jpeg"
    )
}

const Home = () =>{
    return(
        <section id="intro">
            <div className="welcome">
                <h1>Chez Binou</h1>
            </div>
            <div className="presentation">
                <img className="item image" src={findImage("poulet")} alt="poulet"/>
            </div>
        </section>
        
    )

}

export default Home;