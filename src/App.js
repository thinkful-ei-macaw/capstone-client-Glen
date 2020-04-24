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
import DeleteEmployee from './Components/DeleteEmployee/DeleteEmployee';
import UpdateSuccess from './Components/SuccessPages/UpdateSuccess';
import DeleteSuccess from './Components/SuccessPages/DeleteSuccess';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      careers: [],
      users: [],
      valid: true

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

  componentDidUpdate() {
    console.log(this.state.employees)
    if (this.state.valid) {
      this.setState({
        employees: this.state.employees,
        valid: false
      })
    }

  }



  addEmployee = (employee) => {
    this.setState({
      employees: [...this.state.employees, employee]
    })

  }

  onDeleteEmployee = (employee_id) => {
    let deleteEmployee = [...this.state.employees]
    let oldId = deleteEmployee.filter(old => {
      return old.id !== employee_id
    })
    this.setState({
      employees: oldId
    })


  }

  updateEmployee = (employee) => {
    let newUpdateEmployee = [...this.state.employees]
    let oldIndex = newUpdateEmployee.findIndex(oldemployee => {
      return oldemployee.id === employee.id
    })

    newUpdateEmployee[oldIndex] = employee
    this.setState({
      employees: newUpdateEmployee
    })
  }


  render() {
    console.log(this.state.employees)
    const contextValue = {
      employees: this.state.employees,
      careers: this.state.careers,
      users: this.state.users,
      onAddEmployee: this.addEmployee,
      onUpdateEmployee: this.updateEmployee,
      onDeleteEmployee: this.onDeleteEmployee
    }

    return (
      <div className="AppHome">
        <BrowserRouter >
          <EmployeeContext.Provider value={contextValue}>
            <PublicRoute exact path={'/'} component={LandingPage} />
            <PublicRoute path={'/login'} component={LoginPage} />
            <PrivateRoute path={'/main_page'} component={MainPage} />
            <PrivateRoute path={'/employee_list'} component={EmployeeList} />
            <PrivateRoute path={'/career_list/:career_id'} component={CareerList} />
            <PrivateRoute path={'/create_employee'} component={CreateEmployee} />
            <PrivateRoute path={'/update_search'} component={UpdateSearch} />
            <PrivateRoute path={'/update_employee/:employee_id'} component={UpdateEmployee} />
            <PrivateRoute path={'/delete_success'} component={DeleteSuccess} />
            <PrivateRoute path={'/delete_search'} component={DeleteEmployee} />
            <PrivateRoute path={'/update_success'} component={UpdateSuccess} />
            <PrivateRoute path={'/create_success'} component={CreateSuccess} />
          </EmployeeContext.Provider>
        </BrowserRouter>
      </div>
    )
  }
}


