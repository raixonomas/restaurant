import react from "react";
import './menu.css';

const Menu = () =>{
    return(
        <div className="menu">
            <div className="left part">
                <div className="title">
                    <p>Main dish</p>
                </div>
                <div className="foodList">                  
                    <div className="dish">
                        <p className="dishName">DUO BOUDIN NOIR ET PÉTONCLES 24</p> 
                        <p className="description">PURÉE DE CÉLERI-RAVE, SAUCE VIERGE À LA CAMERISE, ASPERGES</p>                   
                    </div>                 
                    <div className="dish">
                        <p className="dishName">MORUE RÔTIE 36</p> 
                        <p className="description">POLENTA SAFRANÉE, POIS VERT ET CHORIZO, MOUSSE DE CRUSTACÉ, MOULES, SAUCE VIERGE AUX CREVETTES</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">LA DEMI 75</p> 
                        <p className="description">HOMARD (3/4 LBS), CREVETTES COCKTAIL (3), HUITRES FROIDES (6), CRABE DES NEIGES (1) MOULES MARINÉES (25G)</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">RIS DE VEAU ET CREVETTES 40</p> 
                        <p className="description">TOPINAMBOURS RÔTIS, CHAMPIGNONS, ASPERGES, JUS DE VEAU CRÉMÉ À L'AIL NOIR</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">SOUPE MISO VÉGÉTALIENNE 22</p> 
                        <p className="description">BOUILLON D'ALGUES KOMBU, EDAMAME, ARMILLAIRE DE MIEL, TOFU MARINÉ</p>                   
                    </div>

                </div>          
            </div>
            <div className="right">
            <div className="top">
                <div className="title">
                    <p>Appetizer</p>
                </div>
                <div className="foodList">
                <div className="dish">
                        <p className="dishName">CHAUDRÉE DE PALOURDES 12</p> 
                        <p className="description">LARDONS, MAÏS, POMMES DE TERRE, PAPRIKA</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">CHOUX DE BRUXELLES RÔTIS 14</p> 
                        <p className="description">CANARD SÉCHÉ, RAISIN ROUGE, AMANDES GRILLÉES, VINAIGRETTE AU GRAS DE CANARD ET XÉRÈS</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">CARPACCIO DE PIEUVRE 16</p> 
                        <p className="description">ARTICHAUT MARINÉ, TOMATES SÉCHÉES, OLIVES KALAMATA, CHÈVRE RÔTI, BASILIC, CROÛTONS</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">BURRATA 23</p> 
                        <p className="description">TOMATES, ROQUETTE, ANCHOIS, NOIX DE PIN, CRÈME AIGRELETTE AUX HERBES</p>                   
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="title">
                    <p>Dessert</p>
                </div>
                <div className="foodList">
                <div className="dish">
                        <p className="dishName">SOUPE MISO VÉGÉTALIENNE 22</p> 
                        <p className="description">BOUILLON D'ALGUES KOMBU, EDAMAME, ARMILLAIRE DE MIEL, TOFU MARINÉ</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">SOUPE MISO VÉGÉTALIENNE 22</p> 
                        <p className="description">BOUILLON D'ALGUES KOMBU, EDAMAME, ARMILLAIRE DE MIEL, TOFU MARINÉ</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">SOUPE MISO VÉGÉTALIENNE 22</p> 
                        <p className="description">BOUILLON D'ALGUES KOMBU, EDAMAME, ARMILLAIRE DE MIEL, TOFU MARINÉ</p>                   
                    </div>
                    <div className="dish">
                        <p className="dishName">SOUPE MISO VÉGÉTALIENNE 22</p> 
                        <p className="description">BOUILLON D'ALGUES KOMBU, EDAMAME, ARMILLAIRE DE MIEL, TOFU MARINÉ</p>                   
                    </div>                    
                </div>                
            </div>
            </div>
        </div>
    )
}

export default Menu;