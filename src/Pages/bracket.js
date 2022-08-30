import React from 'react';
import Cell from '../Components/Cell/index'

class Bracket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: [],
            winner: ""
        }
        this.updateCell = this.updateCell.bind(this);
        this.setWinner = this.setWinner.bind(this);
    }



    render() {

        var renderCellsByRow = [];
        // [0] will be head cell with 1 item, etc
        var localCells = this.state.cells;
        var cellCount = 0;
        for (let i = 0; i < this.props.partyCount; i++) {
            renderCellsByRow.push([]);
        }
        for (let cell of localCells) {
            if (cellCount < 1) {
                renderCellsByRow[0].push(<Cell parentNo={-1} updateCell={this.setWinner} leftCell={cell.leftCell} rightCell={cell.rightCell} no={cell.no} left={cell.left} right={cell.right} />)
            }
            else if (cellCount <= 2) {
                renderCellsByRow[1].push(<Cell parentNo={cell.parentCell.no} updateCell={this.updateCell} leftCell={cell.leftCell} rightCell={cell.rightCell} no={cell.no} left={cell.left} right={cell.right} />)
            }
            else if (cellCount <= 6) {
                renderCellsByRow[2].push(<Cell parentNo={cell.parentCell.no} updateCell={this.updateCell} leftCell={cell.leftCell} rightCell={cell.rightCell} no={cell.no} left={cell.left} right={cell.right} />)
            }
            else if (cellCount <= 14) {
                renderCellsByRow[3].push(<Cell parentNo={cell.parentCell.no} updateCell={this.updateCell} leftCell={cell.leftCell} rightCell={cell.rightCell} no={cell.no} left={cell.left} right={cell.right} />)
            }

            cellCount++;

        }



        const bracketStyle = {
            display: "flex",
            flexDirection: "row",

        }
        const bracketStyle2 = {
            display: "flex",
            flexDirection: "column",
            padding: 50,
            justifyContent: "space-between",
            alignItems: "center",
        }

        return (
            <div style={bracketStyle}>
                Bracket Page
                <div><button onClick={() => this.updateCell(3, 7, "testname")}>-</button> </div>
                <div style={bracketStyle2}>{renderCellsByRow[4]}</div>
                <div style={bracketStyle2}>{renderCellsByRow[3]}</div>
                <div style={bracketStyle2}>{renderCellsByRow[2]}</div>
                <div style={bracketStyle2}>{renderCellsByRow[1]}</div>
                <div style={bracketStyle2}>{renderCellsByRow[0]}</div>
                <div style={bracketStyle2}><h1>{this.state.winner}</h1></div>

            </div>
        );
    }

    setWinner(name){
        this.setState({winner: name});
    }

    componentDidMount() {
        //this method must generate the bracket tree and set state to reflect the tree. 
        let foundColumn = false;
        let power = 2;
        let columns;
        let cellsRequired = this.props.partyCount - 1;
        let cells = [];
        //columns reflect columns needed to store cells, and the winner.(4 parties require 3 columns)
        while (!foundColumn) {
            if ((2 ** power) >= this.props.partyCount) {
                columns = power + 1;
                foundColumn = true;
            }
            power++;
        }
        var newCell;
        var depth = 0;
        //currently all depth == 0
        cells.push(new CellObj(0, depth));

        for (let x = 0; x < cellsRequired - 1; x++) {
            for (var searchCell of cells) {
                if (searchCell.leftCell == undefined) {
                    newCell = new CellObj(x + 1, depth, searchCell);
                    searchCell.leftCell = newCell;
                    cells.push(newCell);
                    break;
                }
                else if (searchCell.rightCell == undefined) {
                    newCell = new CellObj(x + 1, depth, searchCell);
                    searchCell.rightCell = newCell;
                    cells.push(newCell);
                    break;
                }

            }
        }
        var curParty = 0;
        for (let cell of cells) {
            if (cell.leftCell == undefined) {
                cell.left = this.props.parties[curParty];
                curParty++;
            }
            if (cell.rightCell == undefined) {
                cell.right = this.props.parties[curParty];
                curParty++;
            }
        }

        for (let cell of cells) {
            console.log(cell);
        }

        this.setState({
            columns: columns,
            cells: cells
        });
    }
    updateCell(Name, cellNo, prevCellNo) {
        let updateCells = this.state.cells;
        var curCell = updateCells[cellNo];
        try {
            if (curCell.leftCell == null) {
                return;
            }
            if (curCell.leftCell.no == prevCellNo) {
                curCell.left = Name;
            }

            else {
                curCell.right = Name;
            }
        }
        catch (error) {
            console.log(error);
        }

        updateCells[cellNo] = curCell;
        this.setState({
            cells: updateCells
        })
    }
}

class CellObj {
    depth;
    no = -1;
    left;
    right;
    leftCell = null;
    rightCell = null;
    parentCell;
    constructor(no, depth, parentCell, leftCell = null, rightCell = null, left, right,) {
        this.no = no;
        this.depth = depth;
        this.left = left;
        this.right = right;
        this.leftCell = leftCell;
        this.rightCell = rightCell;
        this.parentCell = parentCell;
    }

    getLeftCell() {
        return this.leftCell;
    }
    getRightCell() {
        return this.rightCell;
    }
}

export default Bracket;