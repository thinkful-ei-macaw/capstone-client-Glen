import React from 'react';
import CreateSuccess from '../SuccessPages/CreateSuccess'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<CreateSuccess />)
})