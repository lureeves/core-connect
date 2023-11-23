import React, {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import {   DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FakeAvailability } from '../../../data/FakeAvailability';
import '../components/calendar.css'

const theme = createTheme({
    components: {
      MuiDateCalendar: {
        styleOverrides: {
          root:{
            display: 'flex',
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center',
            width:'27.5rem',
            height:'25.125rem',
            fontWeight: '600',
            color: 'red'
            
          },
          monthContainer:{
            color:'red'
          }
          
        },
      },
      MuiPickersArrowSwitcher: {
        styleOverrides: {
          LeftArrowIcon:{
           
          }
        }
      },
      MuiDateCalendarMonthContainer:{
        styleOverrides:{
            color:'red'
        }
      }
     
    },
  });
  
const Calendar = () => {
  const [date, setDate] = useState(dayjs);
  const [open, setOpen] = useState(false);

  return (
    <div className=' flex flex-col items-start '>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>

                <div onClick={()=>{}}>
                    <DateCalendar className='border border-slate-200 rounded-md w-32'
                        value={date}
                        onChange={(newDate)=>{setDate(newDate); console.log(`${date.$D} ${date.$M +1} ${date.$y}`)}}
                        
                        dayOfWeekFormatter={(_day, weekday) => `${weekday.format('ddd')}`}
                        fontWeight={500}
                        disablePast={true}
                        
                        
                        
                        
                    />
                </div>
                
             </ThemeProvider>
        </LocalizationProvider>
        <div className={``}>
            <button>PST</button>
            <div className='grid grid-cols-4'>
                {FakeAvailability[1].map((time, index)=>{
                    return <button key={index} className='mx-1 border border-slate-200 px-4 py-2 '>{time}</button>
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Calendar
