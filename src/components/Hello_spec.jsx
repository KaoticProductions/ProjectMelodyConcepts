import React from 'react'
import { expect } from 'chai'
import TestUtils from 'react-addons-test-utils'

import Hello from './Hello'


describe('Hello', () => {
    it('should render a Hello', () => {
        let renderer = TestUtils.createRenderer()
        renderer.render(<Hello />)

        let result = renderer.getRenderOutput()

        expect(result.props.children).to.equal("Hello World!")
    })
})
