import React, { Component } from 'react';
import api_config from './api.config';
import CareerList from './Components/CareerList';
import NoteContext from './NoteContext';
import { Route } from 'react-router-dom';
import PrivateRoute from './Components/Utils/PrivateRoute';
import PublicOnlyRoute from './Components/Utils/PublicOnlyRoute';
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
    }
  }

  componentDidMount() {
    console.log(api_config.careers)
    Promise.all([
      fetch(api_config.employees),
      fetch(api_config.careers)
    ])
      .then(([employeeData, careerData]) => {
        if (!employeeData.ok) {
          return employeeData.json().then((e) => Promise.reject(e))
        }
        if (!careerData.ok) {
          return careerData.json().then((e) => Promise.reject(e))
        }

        return Promise.all([employeeData.json(), careerData.json()])

      })
      .then(([employeesResult, careerResult]) => {
        this.setState({
          employees: employeesResult,
          careers: careerResult
        })

      }
      )
  }




  render() {
    console.log(this.state.employees)
    console.log(this.state.careers)
    const contextValue = {
      employees: this.state.employees,
      careers: this.state.careers,
    }

    return (
      <div className="AppHome">
        <NoteContext.Provider value={contextValue}>
          <Route exact path='/' component={LandingPage} />
          <Route path='/career_list' component={CareerList} />
          <Route path='/employee_list' component={EmployeeList} />
          <PublicOnlyRoute path='/login' component={LoginPage} />
          <PrivateRoute path='main_page' component={MainPage} />
          <Route path='/main_page' component={MainPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/create_employee' component={CreateEmployee} />
          <Route path='/profile_success' component={ProfileSuccess} />
          <Route path='/update_employee' component={UpdateEmployee} />
          <Route path='/update_success' component={UpdateSuccess} />
        </NoteContext.Provider>
      </div>
    )
  }
}


