import React, { Component } from 'react';
import api_config from './api.config';
import CareerList from './Components/CareerList';
import UpdateSearch from './Components/UpdateEmployeeSearch/UpdateSearch';
import UpdateEmployee from './Components/UpdateEmployee';
import EmployeeContext from './EmployeeContext';
import PrivateRoute from './Components/Utils/PrivateRoute';
import PublicRoute from './Components/Utils/PublicOnlyRoute';
import LoginPage from '../src/Routes/LoginPage/LoginPage';
import EmployeeList from './Components/EmployeeList';
import LandingPage from './Components/LandingPage';
import MainPage from './Components/MainPage';
import CreateEmployee from './Components/CreateEmployee';
import CreateSuccess from './Components/SuccessPages/CreateSuccess';
import DeleteEmployee from './Components/DeleteEmployee/DeleteEmployee'
import UpdateSuccess from './Components/SuccessPages/UpdateSuccess';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      careers: [],
      users: [],

    }
  }

  componentDidMount() {
    Promise.all([
      fetch(api_config.employees),
      fetch(api_config.careers),
      fetch(api_config.users),
    ])
      .then(([employeeData, careerData, userData]) => {
        if (!employeeData.ok) {
          return employeeData.json().then((e) => Promise.reject(e))
        }
        if (!careerData.ok) {
          return careerData.json().then((e) => Promise.reject(e))
        }
        if (!userData.ok) {
          return userData.json().then((e) => Promise.reject(e))
        }

        return Promise.all([employeeData.json(), careerData.json(), userData.json()])

      })
      .then(([employeesResult, careerResult, userResult]) => {
        this.setState({
          employees: employeesResult,
          careers: careerResult,
          users: userResult
        })

      }
      )
  }

  addEmployee = (employee) => {
    this.setState({
      employees: [...this.state.employees, employee]
    })

  }


  render() {
    const contextValue = {
      employees: this.state.employees,
      careers: this.state.careers,
      users: this.state.users,
      onAddEmployee: this.addEmployee
    }

    return (
      <div className="AppHome">
        <EmployeeContext.Provider value={contextValue}>
          <PublicRoute exact path={'/'} component={LandingPage} />
          <PublicRoute path={'/login'} component={LoginPage} />
          <PrivateRoute path={'/main_page'} component={MainPage} />
          <PrivateRoute path={'/employee_list'} component={EmployeeList} />
          <PrivateRoute path={'/career_list/:career_id'} component={CareerList} />
          <PrivateRoute path={'/create_employee'} component={CreateEmployee} />
          <PrivateRoute path={'/update_search'} component={UpdateSearch} />
          <PrivateRoute path={'/update_employee/:employee_id'} component={UpdateEmployee} />
          <PrivateRoute path={'/delete_search'} component={DeleteEmployee} />
          <PrivateRoute path={'/update_success'} component={UpdateSuccess} />
          <PrivateRoute path={'/create_success'} component={CreateSuccess} />
        </EmployeeContext.Provider>
      </div>
    )
  }
}


