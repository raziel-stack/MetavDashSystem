import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CustomersIndex.module.css';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import CustomersTable from '../CustomersTable/CustomersTable';
// import { Link } from 'react-router-dom';
 //<Link to="addCustomer">Add Customer</Link>
 import AddCustomer from '../AddCustomer/AddCustomer';
 

export class CustomersIndex extends Component{

    constructor(props){
      super(props);
      this.state = {customersJson: []}
    }
  
    componentDidMount(){
      this.getAllCustomers();
    }
  
    getAllCustomers = () => {
  
      fetch("/Customers/GetAllCustomers").then(r => r.json()).then(r => {
        this.setState({...this.state,customersJson: r});
      }).catch(e => console.error("error: " + e))
  
    }
  
  
    render(){
      return(
  
        <Box sx={{flexGrow: 1}}>
  
          <Grid container spacing={2}>

            <Grid item xs={12}>
                <AddCustomer refreshData={this.getAllCustomers}/>
            </Grid>

            <Grid item xs={12}>
              <CustomersTable rows={this.state.customersJson}/>
            </Grid>
  
          </Grid>
  
          </Box>
  
      )
    }
  
  
  
  }
  


CustomersIndex.propTypes = {};

CustomersIndex.defaultProps = {};

export default CustomersIndex;
