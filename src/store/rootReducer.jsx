import { UPDATE_CARDS, UPDATE_COMENT } from "./types";


const initialState = {
  cards: [],
  values: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CARDS:
      return { ...state, cards:  action.payload.cards }
      case UPDATE_COMENT:
        return {
          ...state, values: action.payload
        }
      default:
      return state
  }
}

export default rootReducer;