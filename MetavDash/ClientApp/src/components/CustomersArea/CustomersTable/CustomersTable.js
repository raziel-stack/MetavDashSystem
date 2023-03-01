import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomersTable.module.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const CustomersTable = ({rows}) => {

return(
  
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Full Name</TableCell>
        <TableCell align="right">Id Num</TableCell>
        <TableCell align="right">Birth Date</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.fullName}
          </TableCell>
          <TableCell align="right">{row.idNum}</TableCell>
          <TableCell align="right">{row.birthDate}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

)

}

CustomersTable.propTypes = {
  rows: PropTypes.array.isRequired
};

CustomersTable.defaultProps = {};

export default CustomersTable;