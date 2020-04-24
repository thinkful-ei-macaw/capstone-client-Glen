import React from 'react';
import DeleteSuccess from '../SuccessPages/DeleteSuccess'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<DeleteSuccess />)
})