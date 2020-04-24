import React from 'react';
import CreateEmployee from '../CreateEmployee'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<CreateEmployee />)
})