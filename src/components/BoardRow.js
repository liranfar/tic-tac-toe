import React from 'react'

export default (props) => {
    let currentRow = props.rowNumber
    const numberOfCols = props.cols.length
    let squares = props.cols.map((currentCol) => {
        const output = props.renderSquare(getSquareNumber(currentRow, numberOfCols, currentCol));
        return output;
    });


    return (<div className="board-row">
        {squares}
    </div>)
}

let getSquareNumber = (currentRow, numberOfCols, currentCol) => {
    return currentRow * numberOfCols + currentCol;
}
