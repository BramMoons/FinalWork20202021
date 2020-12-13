import React from 'react';
import axios from 'axios';

class AddAnimal extends React.Component {

    constructor() {
        super();
        let dier = {};
        dier.ras = "2";
        dier.grootte = 25;
        dier.kleur = "";
        dier.karakter = "";
        dier.geslacht = "";
        dier.leeftijd = 1;
        dier.photoPath = "";
        this.state = { dier:{naam: "Jef", ras: "2", grootte: 40, kleur: "wit", karakter: "sociaal", geslacht: "man", leeftijd: 1, photoPath: ""} };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        console.log(this.state.dier);
        axios.put("http://127.0.0.1:8080/Dier/voegtoe?dier="+this.state.dier)
            .then(this.parseResponse.bind(this))
            .catch(this.parseError.bind(this));
    }

    parseError(error){
        console.log(error);
    }

    parseResponse(response) {
        console.log(response);
    }

    handleChange(event) {
        let dier = this.state.dier;
        switch(event.target.id){
            case "name":
                dier.naam = event.target.value;
                break;
            case "ras":
                dier.ras = event.target.value;
                break;
            case "grootte":
                dier.grootte = event.target.value;
                break;
            case "kleur":
                dier.kleur = event.target.value;
                break;
            case "karakter":
                dier.karakter = event.target.value;
                break;
            case "geslacht":
                dier.geslacht = event.target.value;
                break;
            case "leeftijd":
                dier.leeftijd = event.target.value;
                break;
            default:
                //can be ignored;
        }

        this.setState(dier);
    }

    render() {
        return(
            <div>
                <h1>Voeg dier toe</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Naam van het dier</label><br></br>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.dier.naam}></input><br></br>
                    <label>Ras van het dier</label><br></br>
                    <input type="text" id="ras" onChange={this.handleChange} value={this.state.dier.ras}></input><br></br>
                    <label>Grootte van het dier</label><br></br>
                    <input type="number" id="grootte" onChange={this.handleChange} value={this.state.dier.grootte}></input><br></br> 
                    <label>Kleur van het dier</label><br></br>
                    <input type="text" id="kleur" onChange={this.handleChange} value={this.state.dier.kleur}></input><br></br>                    
                    <label>Karakter van het dier</label><br></br>
                    <input type="text" id="karakter" onChange={this.handleChange} value={this.state.dier.karakter}></input><br></br>
                    <label>Geslacht van het dier</label><br></br>
                    <input type="text" id="geslacht" onChange={this.handleChange} value={this.state.dier.geslacht}></input><br></br>
                    <label>Leeftijd van het dier</label><br></br>
                    <input type="number" id="leeftijd" onChange={this.handleChange} value={this.state.dier.leeftijd}></input><br></br>
                    <label>Selecteer foto</label><br></br>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }   

}

export default AddAnimal;