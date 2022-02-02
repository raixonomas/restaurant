import React from "react";
import "./home.css";

function findImage(imageName) {
    return(
        "images/" + imageName + ".jpeg"
    )
}


const handleMouseEnter = e => {
    //setShowText(true)
}

const handleMouseLeave = e => {

}

const Home = () =>{
    return(
        <section id="intro">        
            <div id="presentation">
                <div id="firstRow">         
                    
                    <img className="item image"
                        src={findImage("poulet")} 
                        alt="poulet"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}/>
                    
                    <div className="item text">
                        <p>asdfsadfsafsdafdsfdfdsaasdfsakjagdfyioaghdrjchajwhciwehfjhqwuierhqhrlcnhwauehcfjklqwhejkrhcqwjkehcfjlashdlfbasdjfbsjladfkljawhuerhwulahefljsdanjklfasjkld</p>
                    </div>
                    <img className="item image" src={findImage("guacamole")} alt="guacamole"/>                   
                    <img className="item image" src={findImage("ramen")} alt="ramen"/>
                    <img className="item image" src={findImage("taco")} alt="taco"/>
                </div>
                <div id="secondRow">
                <img className="item image" src={findImage("homar")} alt="poulet"/>
                    <img className="item image" src={findImage("carbonara")} alt="guacamole"/>                   
                    <img className="item image" src={findImage("shrimp")} alt="ramen"/>
                    <div className="item text">
                        <p>asdfsadfsafsdafdsfdfdsaasdfsakjagdfyioaghdrjchajwhciwehfjhqwuierhqhrlcnhwauehcfjklqwhejkrhcqwjkehcfjlashdlfbasdjfbsjladfkljawhuerhwulahefljsdanjklfasjkld</p>
                    </div>
                    <img className="item image" src={findImage("tomahoawk")} alt="taco"/>
                </div>
            </div>
        </section>
        
    )

}

export default Home;