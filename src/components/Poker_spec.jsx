import React from 'react'
import { expect } from 'chai'
import TestUtils from 'react-addons-test-utils'

import Poker from './Poker'


describe('Poker', () => {
    it('should render a Poker', () => {
        let renderer = TestUtils.createRenderer()
        renderer.render(<Poker numPokes={0} onPoke={null}/>)

        let result = renderer.getRenderOutput()

        expect(result.type).to.equal('div')
    })

    it('should render a message with the number of pokes', () => {
        let renderer = TestUtils.createRenderer()
        renderer.render(<Poker numPokes={5} onPoke={null}/>)

        let result = renderer.getRenderOutput()

        expect(result.props.children[0].props.children).to.contain(5)
    })

    it('should render a button to create more pokes', () => {
        let renderer = TestUtils.createRenderer()
        let pokeHandler = () => 1
        renderer.render(<Poker numPokes={0} onPoke={pokeHandler}/>)

        let result = renderer.getRenderOutput()

        expect(result.props.children[1].type).to.equal('button')
        expect(result.props.children[1].props.onClick).to.equal(pokeHandler)
    })
})
