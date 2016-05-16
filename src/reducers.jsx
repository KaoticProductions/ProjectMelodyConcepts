import { POKE } from './actions'

const initialState = {
    pokes: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POKE:
            return { ...state, pokes: state.pokes + 1 }
        default:
            return state
    }
}

export default reducer
