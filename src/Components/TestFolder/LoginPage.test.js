import React from 'react';
import LoginPage from '../../Routes/LoginPage/LoginPage'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<LoginPage />)
})