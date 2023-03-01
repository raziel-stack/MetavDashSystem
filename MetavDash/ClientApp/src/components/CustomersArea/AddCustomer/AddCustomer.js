import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddCustomer.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Button from '@mui/material/Button';

const AddCustomer = (props) => {

    const [fullName, setFullName] = useState('');
    const [fullNameValid, setFullNameValid] = useState(true);
    const [birthDate, setBirthDate] = useState('');
    const [birthDateValid, setBirthDateValid] = useState(true);
    const [IdNum, setIdNum] = useState('');
    const [IdNumValid, setIdNumValid] = useState(true);

    const saveCustomer = (e) => {
        
        e.preventDefault();


        if(fullName != '' && birthDate != '' && IdNum != '' && fullNameValid && IdNumValid && birthDateValid){

            let formData = new FormData();   

            formData.append('fullName', fullName); 
            formData.append('birthDate', birthDate); 
            formData.append('idNum', IdNum); 

            fetch('/Customers/AddCustomer',{
                method: "POST",
                body: formData
            }).then(r => r.json()).then(r => {
                if(r.success){
                    setFullName('');
                    setBirthDate('');
                    setIdNum('');

                    props.refreshData();
                }else{
                    alert(r);
                }
            }).catch(r => console.info(r))

        }


    }

   return (
        <div className={styles.AddCustomer}>
      
      <Box
            component="form"
            onSubmit={saveCustomer}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            
          >
            <div className={styles.AddCustomerForm}>
      
              <TextField
                id="fullName"
                helperText={(!fullNameValid && "The pattern must by letters only maximum 19.")}
                value={fullName}
                label="Full Name"
                error={!fullNameValid}
                onChange={(e)=> {  setFullName(e.target.value); if(/^(?=^.{0,19}$)[A-Za-zא-ת ]+$/.test(e.target.value)) {setFullNameValid(true);  }else{setFullNameValid(false);} ; }}
              />

                <TextField
                id="IdNum"
                value={IdNum}
                label="Id Num"
                error={!IdNumValid}
                onChange={(e)=> { setIdNum(e.target.value); if(/\b[0-9]{9}\b/.test(e.target.value)) { setIdNumValid(true);  }else{setIdNumValid(false) ; } ; }}
              />

                <TextField
                id="birthDate"
                helperText={(!birthDateValid && "The pattern must by dd/M/yyyy")}
                value={birthDate}
                label="Birth Date"
                error={!birthDateValid}
                onChange={(e)=> {setBirthDate(e.target.value); if(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(e.target.value)) { setBirthDateValid(true);  }else{setBirthDateValid(false)} ; }}
              />
             
            

                <Button variant="contained" type="submit">Submit</Button>


            </div>
          </Box>
      
        </div>
      );

} 

AddCustomer.propTypes = {};

AddCustomer.defaultProps = {};

export default AddCustomer;
