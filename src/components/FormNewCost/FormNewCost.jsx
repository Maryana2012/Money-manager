import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const FormNewCost =() =>{
  const [selectedDate, setSelectedDate] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();


    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };
    const handleDateChange = (date) =>{
      setSelectedDate(date.$d.getTime())
    } 
    const handleSumChange = (event) =>{
      setSum(event.target.value)
    } 
    const handleCommentChange = (event) =>{
      setComment(event.target.value)
    } 
    // console.log('date:', date);
    // console.log('sum:', sum);
    // console.log('category:', category);
    // console.log('comment:', comment)
    const  handleSubmit = (event) =>{
      event.preventDefault();
      const newCost =  {
        date:selectedDate,
        sum,
        category,
        comment
      }
    dispatch(addCost(newCost));
    }

    return(
    <>
    <form>
        <label htmlFor="date">Date</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
                // value={date}
                onChange={handleDateChange}
                />
        </LocalizationProvider>

        <label htmlFor="sum">Sum</label>
        <TextField id="outlined-basic" 
                   variant="outlined" 
                   value={sum}
                   onChange={handleSumChange}/>

        <label htmlFor="">Category</label>
        {/* <Box sx={{ minWidth: 120 }}> */}
          <FormControl fullWidth>
            <Select
                   id="demo-simple-select"
                   value={category}
                   onChange={handleCategoryChange}>
             <MenuItem value={'Food'}>Food </MenuItem>
             <MenuItem value={'Housing'}>Housing</MenuItem>
             <MenuItem value={'Transportation'}>Transportation </MenuItem>
             <MenuItem value={'Clothing'}>Clothing</MenuItem>
             <MenuItem value={'Health'}>Health</MenuItem>
             <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
             <MenuItem value={'Utilities'}>Utilities</MenuItem>
             <MenuItem value={'Education'}>Education</MenuItem>
             <MenuItem value={'Sports'}>Sports</MenuItem>
             <MenuItem value={'Renovation'}>Renovation</MenuItem>
             <MenuItem value={'Pet Care'}>Pet Care</MenuItem>
             <MenuItem value={'Philanthropy'}>Philanthropy</MenuItem>
             <MenuItem value={'Travel'}>Travel</MenuItem>
             <MenuItem value={'Restaurants'}>Restaurants</MenuItem>
             <MenuItem value={'Valuables'}>Valuables</MenuItem>
             <MenuItem value={'Gifts'}>Gifts</MenuItem>
           </Select>
         </FormControl>
    {/* </Box> */}

    {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box> */}
     <label htmlFor="comment">Comment</label>
     <TextField id="outlined-basic" 
                variant="outlined" 
                value={comment}
                onChange={handleCommentChange}/>
     
     <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleSubmit}>Create</Button>
    </Stack>

        </form>
    </>)
}

export default FormNewCost;