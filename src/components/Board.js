import React from 'react';
import Square from './Square'
import BoardRow from './BoardRow'
import {rows,cols} from '../logic/gameStatus'
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.renderSquare = this.renderSquare.bind(this);
  }
  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} key={i}
      />
    );
  }
  render() {
    const boardRows = rows.map((rowNumber, index) =>
      <BoardRow renderSquare={this.renderSquare} rowNumber={rowNumber} cols={cols} key={index}/>
    );
    return (
      <div className='game-board'>
        {boardRows}
      </div>
    );
  }
}