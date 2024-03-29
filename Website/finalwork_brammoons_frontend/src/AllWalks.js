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
            data: [],
            grid: [
                [
                    {readOnly: true},
                    {value: 1},
                    {value: 2},
                    {value: 3},
                    {value: 4}
                ],
                [
                    {readOnly: true},
                    {value: 1},
                    {value: 2},
                    {value: 3},
                    {value: 4}
                ]
            ]
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8080/Wandeling/GetAll")
            .then(this.parseResponse.bind(this));
        console.log("Axios happend");
    }

    parseResponse(response){
        console.log("Axios response: ", response);
        let rows = [];
        rows = response.data;
        this.setState({data: rows});
        console.log("at end componentmount: ", this.state.data);
        console.log("only streetname", rows[0].straat);
    }

    render() {
        
        const {data} = this.state;

        return(
            <div id="AllWalks">
                <h1>All walks test page</h1>

                <div>
                    <ol classname="item">
                        {
                            data.map(datas=>(
                                <ol key={datas.wandelingId} align="start">
                                    <div>
                                        <p className="naam">{datas.naam}</p>
                                        <p className="lengte">{datas.lengte} kilometer</p>
                                        <p className="startuur">start om: {datas.startUur} uur en einde om: {datas.stopUur} uur</p>
                                        <p className="straat">{datas.straat} {datas.straatNr}</p>
                                        <p className="postcode">{datas.postcode} {datas.gemeente}</p>
                                        <p className="datum">{datas.datum}</p>
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
                                    data.map(datas => (
                                        <AnyReactComponent
                                            lat={datas.latitude}
                                            lng={datas.longitude}
                                            text={datas.naam}
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