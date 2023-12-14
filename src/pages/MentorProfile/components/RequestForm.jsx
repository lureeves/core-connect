import React, {useState, useEffect} from 'react'
import close from '../../../assets/close.svg'
import check from '../../../assets/check.svg'
import arrow from '../../../assets/arrow.svg'
import { CheckBox } from '../../../assets'
import { coreValues } from '../../../data/CoreValues'
import '../MentorProfile.css';


const RequestForm = (props) => {
  const [submit, setSubmit]= useState(false);
  const [workStyle,setWorkStyle] = useState(0);
  const [hoverStyle, setHoverStyle] = useState(0);
  const [saveStyle,setSaveStyle] = useState(null);
  const [selectedValues, setSelectedValues] = useState(
    () => {
    const storedValues = localStorage.getItem('selectedValues');
    return storedValues ? JSON.parse(storedValues) : [];
  });
  const [dropdown, setDropDown] = useState(0);
  let [options, setOptions] = useState(coreValues.sort()) ;

  const [form, setForm] = useState(null);

  let [bgX,setbgX] = useState(null);
  let [focus,setFocus] = useState(null);
  const submitting = ()=>{
    setbgX(document.getElementById('bgX').value)
    setFocus(document.getElementById('focus').value)
    if(bgX && focus && saveStyle &&selectedValues){
      let final = {
        time: localStorage.getItem(`${props.id} day`) + " " + localStorage.getItem(`${props.id} time`),
        values: selectedValues,
        Style: saveStyle,
        bgX: bgX,
        focus: focus
      }
      setForm(final);
      setSubmit(true);
      setTimeout(()=>{
        console.log(final);
        props.onClosed();
      }, 5000)
    }
    else if (!selectedValues){
      alert('Please select your 3 core values or take the test')
    }
    else if (!saveStyle){
      alert('Please select a work style')
    }
    else if (!bgX){
      alert('Please fill out background experience')
    }
    else if (!focus){
      alert('Please fill out what you want to focus on')
    }
    else{
      alert("Something went wrong")
    }

  }
  const decideStyle = (num)=>{
    setWorkStyle(num);
    if(num===1){
      setSaveStyle("IDEA-ORIENTED")
    }
    else if(num==2){
      setSaveStyle("DETAIL-ORIENTED")
    }
    else if(num==3){
      setSaveStyle("SUPPORT-ORIENTED")
    }
    else if(num==4){
      setSaveStyle("LOGIC-ORIENTED")
    }
  }

  const toggleValue = (index, value) => {
    
    let temp;
    if(selectedValues){
      temp = selectedValues;
    }
    else{
      temp = ["","",""]
    }
 
    temp[index] = value;
    setSelectedValues(temp);
    setDropDown(0);
    filteringValues()
  };

  const toggleDrop = (num)=>{
    if(num == dropdown){
      setDropDown(0)
    }
    else{
      setDropDown(num)
    }
  }
  const filteringValues = ()=>{
    let filtered=coreValues.sort().filter((option)=> !selectedValues.includes(option))
    setOptions(filtered)
  }
  const [ready, setReady]=useState(false)
  const checkReady =()=>{
    setbgX(document.getElementById('bgX').value)
    setFocus(document.getElementById('focus').value)
    if(bgX && focus && saveStyle &&selectedValues){
      setReady(true)
    }
    else{
      setReady(false)
    }
  }
  useEffect(()=>{
    
  }, [selectedValues, ready])

  return (
    <>
      {
        submit?(
          <div id='submit' onClick={()=>props.onClosed()} className='absolute bg-white top-2/4 left-[40%] object-center h-fit w-[27.5rem] submit '>
            <div className='flex gap-3 justify-center items-center py-[3.4375rem] px-[5.3125] text-[1.5rem] font-bold '>
              Request Form Sent
              <img src={check} alt="" />
            </div>
          </div>
        ):(
          <div className=' absolute w-[59.25rem] border h-fit inset-1/4 z-10 bg-white shadow-xl px-[3rem] py-[2.5rem] rounded-[0.625rem]'
                onClick={()=>checkReady()}
          >
            
                    {/* Top section */}
                    <div className='flex justify-end'>
                      <img onClick={()=>props.onClosed()} className='cursor-pointer' src={close} alt="" />
                    </div>
                    <div className='flex justify-center font-bold text-[1.5rem] font-sans mb-[1.875rem]'>
                      <h1>Mentor Request Form</h1>
                    </div>
                    <div className='flex bg-[#E1E4EE] w-fit px-[0.75rem] py-[0.375rem] gap-[.4375rem] rounded-md mb-[2.0625rem]'>
                      <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>Selected Date</h2>
                      <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>{localStorage.getItem(`${props.id} day`)}</h2>
                      <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>{localStorage.getItem(`${props.id} time`)}</h2>
                      <h2 className='font-semibold text-[#393939]'>PST</h2>
                    </div>

                    {/* Core Values */}
                    <div className='flex flex-col'>
                      <div className='flex gap-[1.475rem]'>
                        <div className='flex flex-col border rounded-lg border-[#C7CBDA] mr-[1.31rem] min-w-[20rem] py-[2.12rem] px-[1.75rem] gap-[2.4375rem]'>
                          <h2 className='font-semibold flex justify-center text-center w-[100%] '>What are your top 3 core values? <em className='text-red-500'>*</em></h2>
                          <div className='flex flex-col h-full justify-around '>
                            
                            {/* DropDown one */}
                            <button 
                            onClick={()=>toggleDrop(1)}
                            
                            className={`border flex justify-between items-center rounded-3xl py-[5px] pl-[2.56rem] pr-[1.81rem] ${dropdown==1?"border-[#3A2A9B]":"border-[#9EA6C5]"} buttonShadow`}>
                              {selectedValues? selectedValues[0]: "Compassionate"} 
                              <img className={dropdown===1?``:'rotate-180'} src={arrow} alt="" />
                            </button>
                            {dropdown==1&&  <div className='flex flex-col  max-h-[8.8rem] overflow-y-scroll coreValues absolute bg-white w-[16.3rem] top-[21.8rem] border border-[#3A2A9B] rounded-[1.25rem] items-center z-10 '>
                                              <div className='w-[85%] flex flex-col'>
                                                  {options.map((option,index)=>{
                                                        return <div 
                                                        onClick={()=>{
                                                          toggleValue(0,option)
                                                        }}
                                                        className='border-b  text-[#6B6C70] hover:text-black cursor-pointer border-b-slate-300 w-full flex justify-start pl-[15px] py-1'>{option}</div>
                                                      })}
                                              </div>
                                                
                                            </div>}

                            {/* Dropdown 2 */}
                              <button 
                                onClick={()=>toggleDrop(2)}
                              
                              className={`border flex justify-between items-center rounded-3xl py-[5px] pl-[2.56rem] pr-[1.81rem] ${dropdown==2?"border-[#3A2A9B]":"border-[#9EA6C5]"} buttonShadow`}>
                                {selectedValues? selectedValues[1]: "Loyalty"} 
                                <img className={dropdown===2?``:'rotate-180'} src={arrow} alt="" />
                              </button>
                              {dropdown==2&&  <div className='flex flex-col  max-h-[8.8rem] overflow-y-scroll coreValues absolute bg-white w-[16.3rem] top-[25.7rem] border border-[#3A2A9B] rounded-[1.25rem] items-center z-10 '>
                                                <div className='w-[85%] flex flex-col'>
                                                    {options.map((option,index)=>{
                                                          return <div 
                                                          onClick={()=>{
                                                            toggleValue(1,option)
                                                          }}
                                                          className='border-b  text-[#6B6C70] hover:text-black cursor-pointer border-b-slate-300 w-full flex justify-start pl-[15px] py-1'>{option}</div>
                                                        })}
                                                </div>
                                                  
                                              </div>}

                            
                            

                            {/* Dropdown 3 */}

                            <button 
                                onClick={()=>toggleDrop(3)}
                              
                              className={`border flex justify-between items-center rounded-3xl py-[5px] pl-[2.56rem] pr-[1.81rem] ${dropdown==3?"border-[#3A2A9B]":"border-[#9EA6C5]"} buttonShadow`}>
                                {selectedValues? selectedValues[2]: "Responsibility"} 
                                <img className={dropdown===3?``:'rotate-180'} src={arrow} alt="" />
                              </button>
                              {dropdown==3&&  <div className='flex flex-col  max-h-[8.8rem] overflow-y-scroll coreValues absolute bg-white w-[16.3rem] top-[29.4rem] border border-[#3A2A9B] rounded-[1.25rem] items-center z-10 '>
                                                <div className='w-[85%] flex flex-col'>
                                                    {options.map((option,index)=>{
                                                          return <div 
                                                          onClick={()=>{
                                                            toggleValue(2,option)
                                                          }}
                                                          className='border-b  text-[#6B6C70] hover:text-black cursor-pointer border-b-slate-300 w-full flex justify-start pl-[15px] py-1'>{option}</div>
                                                        })}
                                                </div>
                                                  
                                              </div>}
                          </div>
                          
                        </div>

                    {/* Work Style */}
                        <div className='border rounded-lg border-[#C7CBDA] w-[30.8125rem] justify-center py-[1.8125rem] px-[1.25rem]'>
                          <h2 className='w-full flex justify-center mb-[1.875rem] font-semibold '>What is your working style?<em className='text-red-500'>*</em></h2>
                          <div className='flex flex-wrap justify-center items-center'>
                            <div onClick={()=>decideStyle(1)}
                                onMouseEnter={()=>setHoverStyle(1)}
                                onMouseLeave={()=>setHoverStyle(0)}
                              > 
                              {
                                hoverStyle==1?(
                                  <h2  
                                  className={`border bg-[#F3F5FE] cursor-pointer font-semibold rounded-[0.625rem] border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.875rem] flex items-center justify-center mr-[12px] mb-[12px] p-3`}>
                                    Strategic, Visionary, Ambitious, Influential, Resilient, Compelling
                                </h2>
                                  
                                ):(
                                  <h2  
                                  className={`border cursor-pointer font-semibold ${workStyle==1? 'bg-[#3a2a9b] text-white' : ''}  rounded-[0.625rem] border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mr-[12px] mb-[12px]`}>
                                    IDEA-ORIENTED
                                  </h2>
                                )
                              }   
                              </div>

                            <div onClick={()=>decideStyle(2)}
                              onMouseEnter={()=>setHoverStyle(2)}
                              onMouseLeave={()=>setHoverStyle(0)}
                            > 
                            {
                              hoverStyle==2?(
                                <h2  
                                className={`border bg-[#F3F5FE] cursor-pointer font-semibold rounded-[0.625rem] border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.875rem] flex items-center justify-center mr-[12px] mb-[12px] p-3`}>
                                  Meticulous, Organized, Methodical, Reliable, Diligent, Careful
                              </h2>
                                
                              ):(
                                <h2  
                                className={`border cursor-pointer font-semibold ${workStyle==2? 'bg-[#3a2a9b] text-white' : ''}  rounded-[0.625rem] border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mr-[12px] mb-[12px]`}>
                                  DETAIL-ORIENTED
                                </h2>
                              )
                            }   
                            </div>

                            <div onClick={()=>decideStyle(3)}
                              onMouseEnter={()=>setHoverStyle(3)}
                              onMouseLeave={()=>setHoverStyle(0)}
                            > 
                            {
                              hoverStyle==3?(
                                <h2  
                                className={`border bg-[#F3F5FE] cursor-pointer font-semibold rounded-[0.625rem] border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.875rem] flex items-center justify-center mr-[12px] mb-[12px] p-3`}>
                                  Empathetic, Diplomatic, Emotionally intelligent, Sociable, Helpful, Expressive
                              </h2>
                                
                              ):(
                                <h2  
                                className={`border cursor-pointer font-semibold ${workStyle==3? 'bg-[#3a2a9b] text-white' : ''}  rounded-[0.625rem] border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mr-[12px] mb-[12px]`}>
                                  SUPPORT-ORIENTED
                                </h2>
                              )
                            }   
                            </div>

                            <div onClick={()=>decideStyle(4)}
                              onMouseEnter={()=>setHoverStyle(4)}
                              onMouseLeave={()=>setHoverStyle(0)}
                            > 
                            {
                              hoverStyle==4?(
                                <h2  
                                className={`border bg-[#F3F5FE] cursor-pointer font-semibold rounded-[0.625rem] border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.875rem] flex items-center justify-center mr-[12px] mb-[12px] p-3`}>
                                  Analytical, Driven, Focused, Rational, Methodical, Goal-oriented
                              </h2>
                                
                              ):(
                                <h2  
                                className={`border cursor-pointer font-semibold ${workStyle==4? 'bg-[#3a2a9b] text-white' : ''}  rounded-[0.625rem] border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mr-[12px] mb-[12px]`}>
                                  LOGIC-ORIENTED
                                </h2>
                              )
                            }   
                            </div>
                            
                            
                            
                            
                          </div>
                        </div>
                      </div>
                      

                      {/* Typing section */}
                      <div className='flex flex-col items-start mt-[1.31rem] border border-[#C7CBDA] rounded-lg p-5 gap-5 mb-10'>
                        <div className='w-full flex flex-col gap-3'>
                          <h2 className='font-semibold'>Tell me a little bit about your professional background?<em className='text-red-500'>*</em></h2>
                          <textarea onChange={()=>checkReady()} id='bgX' type="textarea" className='border flex justify-start w-full h-[5.5rem] rounded-lg p-1 border-[#C7CBDA]  ' />
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                          <h2 className='font-semibold'>What do you need help with? List the top 3 things you would like to focus on during this session.<em className='text-red-500'>*</em></h2>
                          <textarea onChange={()=>checkReady()} id='focus' type="textarea" className='border w-full h-[5.5rem] rounded-lg p-1 border-[#C7CBDA]' />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className='flex justify-center'>
                        <a ><button  onClick={()=>submitting()} className={`font-semibold text-white ${ready?'bg-[#2C4298]':'bg-[#6f789A]'}  px-[1.6875rem] py-[0.5625rem] w-[12.375rem] rounded `}>Submit</button></a>
                      </div>

                    </div>
                </div>
        )
      }
      
    </>
  )
}

export default RequestForm