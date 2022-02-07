import React from "react";
import { experiments } from "webpack";
import './reservation.css'

experiments.email = true;

var nodemailer = require('nodemailer');

let testAccount = await nodemailer.createTestAccount();

/*var transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user: "",
    }
})*/

class EmailForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullname : "",
            noTelephone : "",
            email : "",
            message : "",
            personne : null,
            date : null,
            hour : null
        }
    }

    handleSubmit(event) {
        alert('Votre parfum favori est : ' + this.state.fullname);
        event.preventDefault();
      }

    /*handleChange(e) {
        const value = e.value
        
        this.setState({
            e.id : value 
        })
        console.log()
    }*/
    


    render() {
        return(
            <div className="emailForm">
                <div className="personnalInformation">
                    <div className="inputPI">
                        <label>
                            Nom complet:
                            <input type={"text"} id="fullname" name="fullname" onChange={(e) => this.setState({ fullname : e.target.value})}></input>
                        </label>
                    </div>
                    <div className="inputPI">
                        <label>
                            Numéro de téléphone :
                            <input type={"tel"} id="noTelephone" name="telephone" onChange={(e) => this.setState({ noTelephone : e.target.value})}></input>
                        </label>
                    </div>
                    <div className="inputPI">
                        <label>
                            Adresse courriel :
                            <input type={"email"} id="email" name="email" onChange={(e) => this.setState({ email : e.target.value})}></input>
                        </label>
                    </div>
                </div>
                <div className="reservationInformation">
                    <div className="message">
                    <label>
                        Message:
                        <input type={"text"} id="message" name="message" onChange={(e) => this.setState({ message : e.target.value})}></input>
                    </label>
                    </div>
                    <div className="personne">
                    <label>
                        Nombre de personne:
                        <input type={"number"} id="personne" name="personne" onChange={(e) => this.setState({ personne : e.target.value})}></input>
                    </label>
                    </div>
                    <div className="date-hour">
                    <label>
                        Date:                     
                        <input type={"date"} id="date" name="date" onChange={(e) => this.setState({ date : e.target.value})}></input>
                    </label>
                    <label>
                        Heure:
                        <input type={"time"} id="hour" name="hour" onChange={(e) => this.setState({ hour : e.target.value})}></input>
                    </label>
                    </div>
                    <div className="button">
                        <input type={"submit"} id="sumbit" name="submit" value={"Envoyer la réservation"} onClick={() => this.sendEmail()}></input>
                    </div>
                </div>   
            </div>
        )
    }
}

export default EmailForm;