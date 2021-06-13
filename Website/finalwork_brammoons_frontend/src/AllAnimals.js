import React from 'react';
import axios from 'axios';

class AddAnimal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dier:[] }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8080/Dier/GetAll")
            .then(this.parseResponse.bind(this));
    }

    parseResponse(response){
        console.log("Axios response: ", response);
        let rows = [];
        rows = response.data;
        this.setState({dier: rows})
        console.log("rows: ", rows);
        console.log("state", this.state.dier);
    }

    render() {

        const {dier} = this.state;

        return(
            <div>
                <h1>Alle dieren</h1>

                <div>
                    <div classname="item">
                        {
                            dier.map(dieren => (
                                <div key={dieren.dierId}>
                                    {console.log("Dieren in render functie: ", dieren)}
                                    <ol>
                                        <p className="naam">Naam: {dieren.naam}</p>
                                        <p className="startuur">Soort: {dieren.soort}</p>
                                        <p className="stopuur">Ras: {dieren.ras}</p>
                                        <p className="straat">Grootte: {dieren.grootte} cm</p>
                                        <p className="straatnr">Kleur: {dieren.kleur}</p>
                                        <p className="postcode">Karakter: {dieren.karakter}</p>
                                        <p className="gemeente">Geslacht: {dieren.geslacht}</p>
                                        <p className="datum">Leeftijd: {dieren.leeftijd} jaar</p>
                                    </ol>
                                    <hr></hr>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        );
    }   

}

export default AddAnimal;