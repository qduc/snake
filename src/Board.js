import React, { Component } from 'react';

class Board extends Component {
    createBoardFromCells(cells, food) {
        let board = [];
        let size = parseInt(this.props.size);

        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(0);
            }
            board.push(row);
        }

        for (let cell of cells) {
            board[cell.x][cell.y] = 'O';
        }

        if (food.hasOwnProperty('x') && food.hasOwnProperty('y') &&
            !isNaN(food.x) && !isNaN(food.y)) {
            board[food.x][food.y] = 'X';
        }

        return board;
    }

    render() {
        let board = this.createBoardFromCells(this.props.snake, this.props.food);
        let rows = board.map((row, i) => {
            let cells = row.map((cell, j) =>
                <span>{cell !== 0 ? cell : '_'}</span>
            );

            return (
                <div>{cells}</div>
            );
        });
        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Board;