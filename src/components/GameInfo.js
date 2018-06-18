import React from 'react';
import PropTypes from 'prop-types';

const GameInfo = props => {
    return (
        <div className="game-info">
            <div>{props.status}</div>
            <ol>{props.moves}</ol>
        </div>);
};

GameInfo.propTypes = {
    status: PropTypes.string.isRequired,
    moves: PropTypes.array.isRequired,
};

export default GameInfo;