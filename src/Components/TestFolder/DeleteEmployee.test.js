import React from 'react';
import DeleteEmployee from '../DeleteEmployee/DeleteEmployee'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<DeleteEmployee />)
})