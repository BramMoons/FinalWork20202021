import React from 'react';
import axios from 'axios';
import DataSheet from 'react-datasheet';
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
            grid: [
                [
                    {readOnly: true},
                    {value: ''},
                    {value: ''},
                    {value: ''},
                    {value: ''},
                ],
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

    valueRenderer = cell => cell.value;

    onCellsChanged = changes => {
        const grid = this.state.grid;
        changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
        });
        this.setState=({ grid });
    };

    onCentextMenu = (e, cell, i, j) =>
        cell.readOnly ? e.preventDefault() : null;

    render() {
        return(
            <div id="AllWalks">
                <h1>Function All walks test page</h1>
                <DataSheet
                    data={this.state.grid}
                    valueRenderer={this.valueRenderer}
                    onContextMenu={this.onContextMenu}
                    onCellsChanged={this.onCellsChanged}
                />
                <div style={{ height: '50vh', width: '50%' }}>
                    <div style={{ height: '100%', widht: '100%' }}>
                        <GoogleMapReact
                            //Google maps API requires the need of API key before you can use it
                            bootstrapURLKeys={{ key: 'AIzaSyCam1zls00fGVo0nUgJNlGPdgmRhPST5xc' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={50.833212}
                                lng={4.016631}
                                text="Colruyt Ninove"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllWalks;