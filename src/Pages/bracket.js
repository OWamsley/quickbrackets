import React from 'react';
import Cell from '../Components/Cell/index'

class Bracket extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cells : []
        }
    }
    render(){
        var renderCells = [];
        var localCells = this.state.cells;
        for(let cell of localCells){
            renderCells.push(<Cell left={cell.left} right={cell.right} no={cell.no}/>)
        }
        console.log(typeof(this.state.cells))

        return(
            <>
            Bracket Page
            {renderCells}    
            </>
        );
    }
    componentDidMount(){
        //this method must generate the bracket tree and set state to reflect the tree. 
        let foundColumn = false;
        let power = 2;
        let columns;
        let cellsRequired = this.props.partyCount - 1;
        let cells = [];
        //columns reflect columns needed to store cells, and the winner.(4 parties require 3 columns)
        while(!foundColumn){
            if((2**power) >= this.props.partyCount){
                columns = power + 1;
                foundColumn = true;
            }
            power++;
        }
        var newCell;
        var depth = 0;
        //currently all depth == 0
        cells.push(new CellObj(0, depth));
        
        for(let x=0; x< cellsRequired -1; x++){
            for(var searchCell of cells){
                if (searchCell.leftCell == undefined){
                    newCell = new CellObj(x+1, depth, searchCell);
                    searchCell.leftCell = newCell;
                    cells.push(newCell);
                    break;
                }
                else if(searchCell.rightCell ==undefined){
                    newCell = new CellObj(x+1,depth,searchCell);
                    searchCell.rightCell = newCell;
                    cells.push(newCell);
                    break;
                }
                
            }
        }
        var curParty = 0;
        for(let cell of cells){
            if(cell.leftCell == undefined){
                cell.left = this.props.parties[curParty];
                curParty++;
            }
            if(cell.rightCell == undefined){
                cell.right = this.props.parties[curParty];
                curParty++;
            }
        }

        for(let cell of cells){
            console.log(cell);
        }

        this.setState({
            columns: columns,
            cells: cells
        });
    }
}

class CellObj{
    depth;
    no;
    left;
    right;
    leftCell = null;
    rightCell = null;
    parentCell;
    constructor(no, depth,parentCell, leftCell, rightCell, left, right,){
        this.no = no;
        this.depth = depth;
        this.left = left;
        this.right = right;
        this.leftCell = leftCell;
        this.rightCell = rightCell;
        this.parentCell = parentCell;
    }
}

export default Bracket;