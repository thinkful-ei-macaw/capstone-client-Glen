import React from 'react';
import CareerList from '../../Components/CareerList';
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<CareerList />)
})