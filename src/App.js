import React, { Component } from 'react';
import api_config from './api.config';
import CompanyList from './Components/CompanyList';
import NoteContext from './NoteContext';
import { Route } from 'react-router-dom';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      companyArr: [],
    }
  }

  componentDidMount() {
    console.log(api_config.companyArr)
    Promise.all([
      fetch(api_config.employees),
      fetch(api_config.companyArr)
    ])
      .then(([employeeData, companyData]) => {
        if (!employeeData.ok) {
          return employeeData.json().then((e) => Promise.reject(e))
        }
        if (!companyData.ok) {
          return companyData.json().then((e) => Promise.reject(e))
        }

        return Promise.all([employeeData.json(), companyData.json()])

      })
      .then(([employeesResult, companyResult]) => {
        this.setState({
          employees: employeesResult,
          companyArr: companyResult
        })

      }
      )
  }




  render() {
    console.log(this.state.employees)
    console.log(this.state.companyArr)
    const contextValue = {
      employees: this.state.employees,
      companyArr: this.state.companyArr,
    }

    return (
      <div className="AppHome">
        <NoteContext.Provider value={contextValue}>
          <Route exact path='/company_list' component={CompanyList} />
        </NoteContext.Provider>
      </div>
    )
  }
}


