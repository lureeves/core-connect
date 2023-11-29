import React, {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import {   DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FakeAvailability } from '../../../data/FakeAvailability';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import arrow from '../../../assets/arrow.svg'


/**
 * @param createTheme is Mui way of transforming the calendar component
 * Each component within it has its own name to change.
 *  
*/ 
const theme = createTheme({
    components: {
      MuiDateCalendar: {
        styleOverrides: {
          root:{
            justifyContent: '', // Center content horizontally
            alignItems: 'center',
            width:'27.5rem',
            height:'26.125rem', 
            borderRadius:"0.625"    
          }
        },
      },
      MuiPickersDay:{
        styleOverrides:{
          root:{
            fontSize:'0.875rem',
            padding:'1.2rem',
            marginRight:'.5rem',
            marginLeft:'.6rem',
            marginBottom:'.2rem',
            fontFamily:'Open sans'
            
          }
        }
      },
      MuiDayCalendar:{
        styleOverrides:{
          root:{
            width:'27rem'
          },
          header:{
            fontWeight:'600',
            gap:'1rem',
          
          }
        }
      },
      MuiPickersCalendarHeader:{
        // Month and arrow switchers
        styleOverrides:{
          // all of it
          root:{
            width:"100%",
            
          },
          // the month name
          label:{
            fontSize:'1.125rem',
            fontWeight:'700',
            marginLeft:'7rem',
            width:"100%",
            textTransform:"uppercase",
            lineHeight:"normal",
            fontFamily:'Open sans'
            
            
          }
        }
      },
      MuiTypography:{
        // week day names
        styleOverrides:{
          root:{
            fontSize:'0.9375rem',
            fontWeight:'600', 
            fontFamily:'Open sans'   
          }
        }
      },
      MuiPickersArrowSwitcher:{
        // arrows
        styleOverrides:{
          root:{
            height:"30px"
          }
        }
      }

    },
  });

  
  /**
   * 
   * @param {boolean} props.open 
   * @returns a true or false if the modal is open for the request form
   * @param {function} props.onOpen 
   * @returns a function that changes if the modal is open or not.
   */

const Calendar = (props) => {
  const [date, setDate] = useState(dayjs);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(null);

  // Handles the time (X:XX) selected.
  // Chooses which index so it can pass through to the request form
  const handleTimeSelection = (x) =>{
    setTime(x); 
    console.log(x);
  }
  return (
    <div className=' flex flex-col items-start '>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>

                <div onClick={()=>{setOpen(true)}}>
                    <DateCalendar className='border border-slate-200 rounded-md w-32'
                        value={date}
                        views={['day']}
                        onChange={(newDate)=>{setDate(newDate); console.log(`${date.$D} ${date.$M +1} ${date.$y}`)}}
                        dayOfWeekFormatter={(_day, weekday) => `${weekday.format('ddd')}`}
                        disablePast={true}
                        sx={{
                          
                        }}
                        
                    />
                   
                </div>
                
             </ThemeProvider>
        </LocalizationProvider>
        <div className={open?`p-5 border border-slate-200 w-[27.5rem] flex flex-col items-center gap-5`: "hidden"}>
          <div className=' w-full ml-2 '>
            <div className='flex w-fit m-1 border border-slate-200 text-[0.9375rem] font-sans font-semibold shadow-md rounded-md px-[0.625rem] py-[0.3125rem] gap-[0.5625rem]'>
              <button disabled={true}>PST</button>
              <img className='rotate-180' src={arrow} alt="" />
            </div>
          </div>
           
            <div className='flex flex-wrap w-full mb-5 mx-1'>
                {FakeAvailability[1].map((times, index)=>{
                    return <button key={index} onClick={()=>{handleTimeSelection(index)}} className={`m-1 border border-slate-200 text-[0.9375rem] font-semibold shadow-md rounded-md w-[5.5rem] h-[2.25rem] ${time===index?'bg-[#6F789A] text-white': ''} `}>{times}</button>
                })}
            </div>
            <button onClick={()=>{setOpen(false); props.onOpen();}} className='bg-[#6F789A] text-white px-[1.6875rem] py-[0.5625rem] rounded-md text-[0.9375rem]'>Start Mentorship Request</button>
        </div>
        
    </div>
  )
}

export default Calendar
