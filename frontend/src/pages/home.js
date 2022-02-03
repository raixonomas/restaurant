import React from "react";
import "./home.css";

function findImage(imageName) {
    return(
        "images/" + imageName + ".jpeg"
    )
}


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {foodChose : ""}
        this.state = {foodText : ""};
    }

    /*handleMouseEnter = (food) => {
        this.setState ({foodChose : food});
        console.log(this.state.foodChose);
    }
    
    handleMouseLeave()  {
        this.setState({
            foodChose: null,
        })
    }*/

render(){

    return(
        <section id="intro">        
            <div id="presentation">
                <div id="firstRow">         
                    <img className="item image"
                        src={findImage("poulet")} 
                        alt="poulet"
                        onClick={() => this.setState({ foodChose : "Poulet", foodText : "Poulet fri"})}/>
                    <div className="item text">
                        <p>asdfsadfsafsdafdsfdfdsaasdfsakjagdfyioaghdrjchajwhciwehfjhqwuierhqhrlcnhwauehcfjklqwhejkrhcqwjkehcfjlashdlfbasdjfbsjladfkljawhuerhwulahefljsdanjklfasjkld</p>
                    </div>
                    <img className="item image" 
                        src={findImage("guacamole")} 
                        alt="guacamole"
                        onClick={() => this.setState({ foodChose : "Guacamole"})}/>                   
                    <img className="item image" 
                        src={findImage("ramen")} 
                        alt="ramen"
                        onClick={() => this.setState({ foodChose : "Ramen"})}/>
                    <img className="item image" 
                        src={findImage("taco")} 
                        alt="taco"
                        onClick={() => this.setState({ foodChose : "Taco"})}/>
                </div>
                <div className="foodInformation">
                    <div className="foodHeader">
                        <p>{this.state.foodChose}</p>
                    </div>
                    <div className="foodInfo">
                        <p>{this.state.foodText}</p>
                    </div>
                </div>
                <div id="secondRow">
                    <img className="item image" 
                        src={findImage("homar")} 
                        alt="poulet"
                        onClick={() => this.setState({ foodChose : "Homard"})}/>
                    <img className="item image" 
                        src={findImage("carbonara")} 
                        alt="guacamole"
                        onClick={() => this.setState({ foodChose : "Carbonara"})}/>                   
                    <img className="item image" 
                        src={findImage("shrimp")} 
                        alt="ramen"
                        onClick={() => this.setState({ foodChose : "Crevette"})}/>
                    <div className="item text">
                        <p>asdfsadfsafsdafdsfdfdsaasdfsakjagdfyioaghdrjchajwhciwehfjhqwuierhqhrlcnhwauehcfjklqwhejkrhcqwjkehcfjlashdlfbasdjfbsjladfkljawhuerhwulahefljsdanjklfasjkld</p>
                    </div>
                    <img className="item image" 
                        src={findImage("tomahoawk")} 
                        alt="taco"
                        onClick={() => this.setState({ foodChose : "Tomahawk"})}/>
                </div>              
            </div>          
        </section>
        
    )
}
}

export default Home;