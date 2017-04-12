// ADD_GUESS, UPDATE_GUESSES, CHANGE_FEEDBACK, CHANGE_ANSWER, GUESSES

export const ADD_GUESSES = 'ADD_GUESSES';
export const addGuesses = guess => ({
  type: ADD_GUESSES,
  guess,
})

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = correctAnswer => ({
  type: START_NEW_GAME,
  correctAnswer: Math.round(Math.random()*100)
})

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = showInfoModal => ({
  type: TOGGLE_INFO_MODAL,
  showInfoModal
})




