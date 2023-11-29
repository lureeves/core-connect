import React from 'react'

const Review = (props) => {
  return (
    <div className='w-5/12 my-5 mr-5'>
            <div className='flex flex-col gap-2'>
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
