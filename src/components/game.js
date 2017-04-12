import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {connect} from 'react-redux';
import {addGuesses, startNewGame} from '../actions'

export class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    newGame() {
        this.props.dispatch(startNewGame())
    }

    guess(guess) {
        this.props.dispatch(addGuesses(guess));
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount  />
                <GuessList  />
            </div>
        );
    }
}

Game.defaultProps = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100)
};
const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer,
});


export default connect(mapStateToProps)(Game);
