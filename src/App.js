import React, { Component } from 'react';
import api_config from './api.config';
import CareerList from './Components/CareerList';
import EmployeeContext from './EmployeeContext';
import { Route } from 'react-router-dom';
import PrivateRoute from './Components/Utils/PrivateRoute';
import LoginPage from '../src/Routes/LoginPage/LoginPage';
import EmployeeList from './Components/EmployeeList';
import LandingPage from './Components/LandingPage';
import MainPage from './Components/MainPage';
import CreateEmployee from './Components/CreateEmployee';
import ProfileSuccess from './Components/ProfileSuccess';
import UpdateEmployee from './Components/UpdateEmployee';
import UpdateSuccess from './Components/UpdateSuccess';

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
      users: this.state.users
    }

    return (
      <div className="AppHome">
        <EmployeeContext.Provider value={contextValue}>

          <Route exact path='/' component={LandingPage} />
          <Route path='/career_list/:career_id' component={CareerList} />
          <Route exact path='/employee_list' component={EmployeeList} />
          <Route path='/employee_list/:id' component={EmployeeList} />
          <PrivateRoute path={'/main_page'} component={MainPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/create_employee' render={({ history }) => (
            <CreateEmployee history={history}
              careers={this.state.careers}
              users={this.state.users}
              onAddEmployee={this.addEmployee} />
          )} />
          <Route path='/profile_success' component={ProfileSuccess} />
          <Route path='/update_employee' component={UpdateEmployee} />
          <Route path='/update_success' component={UpdateSuccess} />
        </EmployeeContext.Provider>
      </div>
    )
  }
}


