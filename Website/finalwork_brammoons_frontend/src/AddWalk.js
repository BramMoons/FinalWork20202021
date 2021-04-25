import React from 'react';
import axios from 'axios';

class AddWalk extends React.Component {

    constructor(){
        super();
        let walk = {
            "lengte": 5,
            "startuur": 10,
            "stopuur": 16,
            "straat": "Schavolliestraat",
            "straatnr" : 44,
            "postcode": 1755,
            "gemeente": "Gooik",
            "datum": 2020-6-20
        };

        let dier;
        this.state = { walk };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        axios.post("http://127.0.0.1:8080/Wandeling/voegToe?wandeling=" + this.state.walk);
    }

    handleChange(event) {
        let walk = this.state.walk;
        switch(event.target.id){
            case "lengte":
                walk.lengte = event.target.value;
                break;
            case "startuur":
                walk.startuur = event.target.value;
                break;
            case "stopuur":
                walk.stopuur = event.target.value;
                break;
            case "straat":
                walk.straat = event.target.value;
                break;
            case "straatnr":
                walk.straatnr = event.target.value;
                break;
            case "postcode":
                walk.postcode = event.target.value;
                break;
            case "gemeente":
                walk.gemeente = event.target.value;
                break;
            default:
                //can be ignored
        }

        this.setState(walk);
    }

    render() {
        return (
            <div>
                <h1>Wandeling toevoegen</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Lengte van de wandeling</label><br></br>
                    <input type="text" id="lengte" onChange={this.handleChange} value={this.state.walk.lengte}></input><br></br>
                    <label>Startuur</label><br></br>
                    <input type="number" id="startuur" onChange={this.handleChange} value={this.state.walk.startuur}></input><br></br>
                    <label>Stopuur</label><br></br>
                    <input type="number" id="stopuur" onChange={this.handleChange} value={this.state.walk.stopuur}></input><br></br>                    
                    <label>Straat</label><br></br>
                    <input type="text" id="straat" onChange={this.handleChange} value={this.state.walk.straat}></input><br></br>
                    <label>Straatnummer</label><br></br>
                    <input type="number" id="straatnr" onChange={this.handleChange} value={this.state.walk.straatnr}></input><br></br>
                    <label>Postcode</label><br></br>
                    <input type="number" id="postcode" onChange={this.handleChange} value={this.state.walk.postcode}></input><br></br>
                    <label>Gemeente</label><br></br>
                    <input type="text" id="gemeente" onChange={this.handleChange} value={this.state.walk.gemeente}></input><br></br>
                    <label>Datum</label><br></br>
                    <input type="date" id="datum" onChange={this.handleChange} value={this.state.walk.datum}></input><br></br>
                    <input type="submit"></input>
                </form>
            </div>
            
        );
    }

}

export default AddWalk;