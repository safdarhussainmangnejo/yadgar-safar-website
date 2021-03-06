import '../index.css';
// import { TextField } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import BasicSelect from './SelectBox';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// import {makeStyles} from '@material-ui/core';

// const useStyle = makeStyles ({
//   textF : {
//     color: 'red',
//     backgrondColor : "red"
//   }
// })


const Searchbar = ()=>{
  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  // const classes = useStyle();
    return(
      <>
            <div className="row g-0 searchBar">
            
            <div className='col styyle'>
            <TextField
                id="demo-helper-text-aligned"
                label="Search"
                // className={classes.textF}
              />
            </div>

            <div className='col styyle'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Departing"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            </div>

            <div className='col styyle'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Returning"
                value={value2}
                onChange={(newValue) => {
                  setValue2(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> 
            </div>

            <div className='col styyle'>
            <BasicSelect/>
            </div>

            <div className='col styyle'>
              <Button variant="contained" id="searchButton" size="large">&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;&nbsp; <TravelExploreIcon/></Button>
            </div>
            
            </div>
      </>
    );
}
export default Searchbar;