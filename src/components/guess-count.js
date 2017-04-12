import React from 'react';
import {connect} from 'react-redux';

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.guesses.length}</span>!
        </p>
    );
}
const mapStateToProps = state => ({
    guesses: state.guesses
});
export default connect(mapStateToProps)(GuessCount);