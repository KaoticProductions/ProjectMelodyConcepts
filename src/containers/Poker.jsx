import { connect } from 'react-redux'

import { poke } from '../actions'
import PokerView from '../components/Poker'


const mapStateToProps = (state) => {
    return {
        numPokes: state.pokes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPoke: () => dispatch(poke())
    }
}

const Poker = connect(
    mapStateToProps,
    mapDispatchToProps
)(PokerView)

export default Poker
