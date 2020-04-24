import React from 'react';
import LoginForm from '../LoginForm/LoginForm'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<LoginForm />)
})