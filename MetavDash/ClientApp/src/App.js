import React, { Component } from 'react';
import { Route } from 'react-router';
import CustomersIndex from '../src/components/CustomersArea/CustomersIndex/CustomersIndex';
//import AddCustomer from '../src/components/CustomersArea/AddCustomer/AddCustomer';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
    

    <CustomersIndex>
     {/* <Route exact path='/addCustomer' component={AddCustomer} /> */}
    </CustomersIndex>

    );
  }
}

//   <Layout>
    //     <Route exact path='/' component={Home} />
    //     <Route path='/counter' component={Counter} />
    //     <Route path='/fetch-data' component={FetchData} />
    //   </Layout>