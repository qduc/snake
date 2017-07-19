import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Board';
import snake, {NORTH, SOUTH, EAST, WEST} from './snake';

const ARROW_LEFT = 37,
    ARROW_UP = 38,
    ARROW_RIGHT = 39,
    ARROW_DOWN = 40;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver: false,
            size: 8,
            body: snake.body,
            direction: snake.direction
        }
    }

    tick() {
        // Update snake's direction
        snake.changeDirection(this.state.direction);

        // Let's move the snake
        let canContinue = snake.move();

        // Did it crash?
        if (!canContinue) {
            // Yes, stop the timer and show "Game over"
            clearInterval(this.interval);
            this.setState({gameOver: true});
        }

        // No, update its new position
        this.setState({body: snake.body});
    }

    componentDidMount() {
        // Setup the snake
        // It need to know the map size
        snake.setMapSize(this.state.size);

        // Setup an interval timer, each tick will move the snake
        this.interval = setInterval(() => {this.tick()}, 1000);
    }

    componentWillMount() {
        window.addEventListener('keydown', (e) => {this.keyDownHandler(e)});
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', (e) => {this.keyDownHandler(e)});
    }

    keyDownHandler(e) {
        switch (e.keyCode) {
            case ARROW_UP:
                this.setState({direction: NORTH});
                break;
            case ARROW_DOWN:
                this.setState({direction: SOUTH});
                break;
            case ARROW_LEFT:
                this.setState({direction: WEST});
                break;
            case ARROW_RIGHT:
                this.setState({direction: EAST});
                break;
        }
    }

    render() {
        let gameOver = this.state.gameOver ? (<div>Game over!</div>) : null;
        return (
            <div className="App">
                <Board size={this.state.size} snake={this.state.body}/>
                {gameOver}
            </div>
        );
    }
}

export default App;
