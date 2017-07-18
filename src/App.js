import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Board';
import snake from './snake';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: snake.body
        }
    }

    componentDidMount() {
        setTimeout(() => {
            snake.move();
            this.setState({body: snake.body});
        }, 3000);
    }

    render() {
        return (
            <div className="App">
                <Board size="8" snake={this.state.body}/>
            </div>
        );
    }
}

export default App;
