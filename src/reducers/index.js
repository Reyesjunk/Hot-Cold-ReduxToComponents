import * as actions from '../actions'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.round(Math.random() * 100),
  showInfoModal: false

}

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_GUESSES) {
    const guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
        state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });
            return state;
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }
    return Object.assign({}, state, {
      guesses: [...state.guesses, guess],
      feedback: feedback
    })
  }

  if (action.type === actions.START_NEW_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: "Make your guess!",
      correctAnswer: action.correctAnswer
    })
  }

    //not sure what do do about different states
  if (action.type === actions.TOGGLE_INFO_MODAL) {
    return Object.assign({}, state, {
      showInfoModal: action.showInfoModal
    })
  }
  return state
} 