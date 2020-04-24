import React from 'react';
import EmployeeList from '../../Components/EmployeeList';
import { shallow } from 'enzyme'
it('renders without crashing', () => {
    shallow(<EmployeeList />)
})