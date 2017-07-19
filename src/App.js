import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Board';
import snake from './snake';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver: false,
            size: 8,
            body: snake.body
        }
    }

    tick() {
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
