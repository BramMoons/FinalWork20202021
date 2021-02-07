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
        return(
            <div>
                <h1>Alle dieren</h1>
            </div>
        );
    }   

}

export default AddAnimal;