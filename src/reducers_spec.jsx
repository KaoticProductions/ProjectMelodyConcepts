import React from 'react'
import { expect } from 'chai'
import TestUtils from 'react-addons-test-utils'

import reducer from './reducers'
import { poke } from './actions'

describe('reducer', () => {
    it('should start with an initial state', () => {
        let result = reducer(undefined, {})

        expect(result).to.contain.keys("pokes")
    })

    describe('POKE', () => {
        let initialState, action, result

        beforeEach(() => {
            initialState = {
                pokes: 0,
            }
            action = poke()
            result = reducer(initialState, action)
        })

        it('should save the number of pokes in the state', () => {
            expect(result.pokes).to.eq(1)
        })
    })
})
