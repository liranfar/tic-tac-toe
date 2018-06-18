import React from 'react';
import { calculateWinner } from '../logic/gameStatus'
import Board from './Board'
import GameInfo from './GameInfo'
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();    
    if (this.isNeedlessClick(squares, i)) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  isNeedlessClick(squares, i) {
    return calculateWinner(squares) || squares[i];
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const currentGameState = this.state.history[this.state.stepNumber];
    const winner = calculateWinner(currentGameState.squares);
              
    return (
      <div className="game">        
        <Board
          squares={currentGameState.squares}
          onClick={(i) => this.handleClick(i)}
        />        
        <GameInfo 
          status={this.getGameStatusMessage(winner)} 
          moves={this.getHistoryList()}
        />
      </div>
    );
  }

  getHistoryList() {
    return this.state.history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (<li key={move}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>);
    });
  }

  getGameStatusMessage(winner) {
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return status;
  }
}