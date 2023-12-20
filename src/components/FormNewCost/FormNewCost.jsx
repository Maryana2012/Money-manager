import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const FormNewCost =() =>{

    return(
    <>
    <form>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
    </LocalizationProvider>
            <label htmlFor="sum">Sum</label>
            <input type="string" />

            <label htmlFor=""></label>
        </form>
    </>)
}

export default FormNewCost;