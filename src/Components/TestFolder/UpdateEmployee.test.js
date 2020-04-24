import React from 'react';
import UpdateEmployee from '../UpdateEmployee'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<UpdateEmployee />)
})