import React from 'react';
import axios from 'axios';
import DataSheet from 'react-datasheet';

class AllWalks extends React.Component {

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
            </div>
        );
    }
}

export default AllWalks;