import React, {useState} from 'react'
import close from '../../../assets/close.svg'
import check from '../../../assets/check.svg'
import arrow from '../../../assets/arrow.svg'

const RequestForm = (props) => {
  const [submit, setSubmit]= useState(false);
  const [workStyle,setWorkStyle] = useState(0);
  const [saveStyle,setSaveStyle] = useState(null);

  const submitting = ()=>{
    setSubmit(true);
    setTimeout(()=>{
      props.onClosed();
    }, 5000)
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
  return (
    <>
      {
        submit?(
          <div id='submit' onClick={()=>props.onClosed()} className='absolute bg-white top-2/4 left-[40%] object-center h-fit w-[27.5rem] shadow-black shadow-md '>
            <div className='flex gap-3 justify-center items-center py-[3.4375rem] px-[5.3125] text-[1.5rem] font-bold '>
              Request Form Sent
              <img src={check} alt="" />
            </div>
          </div>
        ):(
          <div className=' absolute w-[59.25rem] border h-[62.875rem] inset-1/4 z-10 bg-white shadow-xl px-[3rem] py-[2.5rem] rounded-[0.625rem]'>
            
                    {/* Top section */}
                    <div className='flex justify-end'>
                      <img onClick={()=>props.onClosed()} className='cursor-pointer' src={close} alt="" />
                    </div>
                    <div className='flex justify-center font-bold text-[1.5rem] font-sans mb-[1.875rem]'>
                      <h1>Mentor Request Form</h1>
                    </div>
                    <div className='flex bg-[#E1E4EE] w-fit px-[0.75rem] py-[0.375rem] gap-[.4375rem] rounded-md mb-[2.0625rem]'>
                      <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>Selected Date</h2>
                      <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>11/14/2023</h2>
                      <h2 className='font-semibold text-[#393939] pr-2 border-r border-[#CECECE]'>3:00 PM</h2>
                      <h2 className='font-semibold text-[#393939]'>PST</h2>
                    </div>

                    {/* Core Values */}
                    <div className='flex flex-col'>
                      <div className='flex gap-[1.875rem]'>
                        <div className='flex flex-col border rounded-lg border-[#C7CBDA] mr-[1.31rem] min-w-[19.375rem] py-[2.12rem] px-[1.75rem] gap-[2.4375rem]'>
                          <h2 className='font-semibold flex justify-center text-center w-[120%] ml-[-15px]'>What are your top 3 core values? <em className='text-red-500'>*</em></h2>
                          <div className='flex flex-col h-full justify-around '>
                            
                            <button className='border flex justify-between items-center rounded-3xl py-[5px] pl-[2.56rem] pr-[1.81rem] border-[#9EA6C5]'>
                              Compassionate 
                              <img src={arrow} alt="" />
                            </button>
                            <button className='border flex justify-between items-center rounded-3xl py-[5px] border-[#9EA6C5] pl-[2.56rem] pr-[1.81rem]'>
                              Loyalty 
                              <img src={arrow} alt="" />
                            </button>
                            <button className='border flex justify-between items-center rounded-3xl py-[5px] border-[#9EA6C5] pl-[2.56rem] pr-[1.81rem]'>
                              Responsibility 
                              <img src={arrow} alt="" />
                            </button>
                          </div>
                          
                        </div>

                        {/* Work Style */}
                        <div className='border rounded-lg border-[#C7CBDA] w-[30.8125rem] justify-center py-[1.8125rem] px-[1.25rem]'>
                          <h2 className='w-full flex justify-center mb-[1.875rem] font-semibold '>What is your working style?<em className='text-red-500'>*</em></h2>
                          <div className='flex flex-wrap justify-center items-center'>
                            <h2 onClick={()=>decideStyle(1)} 
                              className={`border cursor-pointer ${workStyle==1? 'bg-[#3a2a9b] text-white' : ''}  rounded-lg border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mr-[12px] mb-[12px]`}>
                                IDEA-ORIENTED
                            </h2>
                            <h2 onClick={()=>decideStyle(2)} 
                              className={`border cursor-pointer ${workStyle==2? 'bg-[#3a2a9b] text-white' : ''} rounded-lg border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mb-[12px]`}>
                                DETAIL-ORIENTED
                            </h2>
                            <h2 onClick={()=>decideStyle(3)} 
                              className={`border cursor-pointer ${workStyle==3? 'bg-[#3a2a9b] text-white' : ''} rounded-lg border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center mr-[12px]`}>
                                SUPPORT-ORIENTED
                            </h2>
                            <h2 onClick={()=>decideStyle(4)} 
                              className={`border cursor-pointer ${workStyle==4? 'bg-[#3a2a9b] text-white' : ''} rounded-lg border-[#3A2A9B] h-[5.5rem] w-[12rem] text-[0.9375rem] flex items-center justify-center`}>
                                LOGIC-ORIENTED
                            </h2>
                          </div>
                        </div>
                      </div>
                      

                      {/* Typing section */}
                      <div className='flex flex-col items-start mt-[1.31rem] border border-[#C7CBDA] rounded-lg p-5 gap-5 mb-10'>
                        <div className='w-full flex flex-col gap-3'>
                          <h2 className='font-semibold'>Tell me a little bit about your professional background?<em className='text-red-500'>*</em></h2>
                          <textarea id='bgX' type="textarea" className='border flex justify-start w-full h-[5.5rem] rounded-lg border-[#C7CBDA] ' />
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                          <h2 className='font-semibold'>What do you need help with? List the top 3 things you would like to focus on during this session.<em className='text-red-500'>*</em></h2>
                          <textarea id='focus' type="textarea" className='border w-full h-[5.5rem] rounded-lg  border-[#C7CBDA]' />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className='flex justify-center'>
                        <a ><button  onClick={()=>submitting()} className='font-semibold text-white bg-[#6f789A] px-[1.6875rem] py-[0.5625rem] w-[12.375rem] rounded '>Submit</button></a>
                      </div>

                    </div>
                </div>
        )
      }
      
    </>
  )
}

export default RequestForm