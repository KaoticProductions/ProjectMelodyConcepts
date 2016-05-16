import React from 'react'


const Poker = (props) => {
    return (
        <div>
            <p>Number of times poked: { props.numPokes }</p>
            <button onClick={ props.onPoke }>Poke Myself</button>
        </div>
    )
}

Poker.propTypes = {
    numPokes: React.PropTypes.number.isRequired,
    onPoke: React.PropTypes.func.isRequired
}

export default Poker
