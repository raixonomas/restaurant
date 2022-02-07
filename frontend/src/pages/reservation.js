import React from "react";
import './reservation.css';
var nodemailer = require("nodemailer");
/*import { resolveContent } from "nodemailer/lib/shared";*/
//module.exports = require("readable-stream");
let testAccount = await nodemailer.createTestAccount();



var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: testAccount.user,
        pass: testAccount.pass
    }
})

var mailOptions = {
    from: "raixonomas@gmail.com",
    to: "raph123411@gmail.com",
    subjet: "Test",
    text: "test"
}

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

    sendEmail(){
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            } else {
                console.log("Email sent : " + info.response);
            }
        })
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