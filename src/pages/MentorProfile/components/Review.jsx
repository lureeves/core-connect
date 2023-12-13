import React from 'react'

const Review = (props) => {
  return (
    <div className='w-[31.8125rem] mt-[1.87rem] mr-5 ml-5'>
            <div className='flex flex-col gap-[1.06rem]'>
                <div className='flex w-full justify-between'>
                    <p className='font-semibold'>{props.name}</p>
                    <p>{props.date}</p>
                </div>
                <p>
                    {props.review}
                </p>
            </div>
    </div>
  )
}

export default Review
