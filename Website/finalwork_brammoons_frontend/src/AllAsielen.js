import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class AllWalks extends React.Component {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.state = {
            asielen: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8080/Asiel/GetAll")
            .then(this.parseResponse.bind(this));
        console.log("Axios happend");
    }

    parseResponse(response){
        console.log("Axios response: ", response);
        let rows = [];
        rows = response.data;
        this.setState({asielen: rows});
        console.log("at end componentmount: ", this.state.data);
        console.log("only streetname", rows[0].straat);
    }

    render() {
        
        const {asielen} = this.state;

        return(
            <div id="AllAsielen">
                <h1>Alle asielen</h1>

                <div>
                    <ol classname="item">
                        {
                            asielen.map(asielen=>(
                                <ol key={asielen.asielId} align="start">
                                    <div>
                                        <p className="naam">{asielen.naam}</p>
                                        <p className="dieren">Beschikbare dieren: {asielen.dieren}</p>
                                        <p className="straat">{asielen.straat} {asielen.straatNr}</p>
                                        <p className="postcode">{asielen.postcode} {asielen.gemeente}</p>
                                    </div>
                                    <hr></hr>
                                </ol>
                            ))
                        }
                    </ol>
                </div>

                <div style={{ height: '50vh', width: '100%' }}>
                    <div style={{ height: '100%', widht: '100%' }}>
                        <GoogleMapReact
                            //Google maps API requires the need of API key before you can use it
                            bootstrapURLKeys={{ key: 'AIzaSyABrkAaqwCM01ww6pxG1MJb1cGxwF6m1m8' }}
                            defaultCenter={{ lat: 50.8336386, lng: 4.0188286 }}
                            defaultZoom={this.props.zoom}
                        >
                                {
                                    asielen.map(asielen => (
                                        <AnyReactComponent
                                            lat={asielen.latitude}
                                            lng={asielen.longitude}
                                            text={asielen.naam}
                                        />
                                    ))
                                }
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllWalks;