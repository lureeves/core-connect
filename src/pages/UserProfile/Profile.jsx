import React from 'react';
import { Sean, Goals, Bio, Cvalues, Frustrations, Interests, hiking, Coffee } from '../../assets';

const Profile = () => {
  return (
    <div className='flex justify-center w-full mt-10 scale-[1.1]  '>
        <div className='flex w-[61.50rem] '>
            {/* left side */}
            <div>
                <div className='w-[20.25rem] h-[23.5625] '>
                    <img src={Sean} alt="" />
                </div>
                <div className='flex flex-col text-white items-center p-[1.81rem] bg-[#2C4193] w-[20.25rem] h-[25.3125rem]'>
                    <div className='text-[2rem] font-bold mb-4 '>
                        Sean
                    </div>
                    <div className='flex flex-col w-full mb-8 font-semibold text-[1rem] '>
                        <h1>31</h1>
                        <h2>Aspiring Product Designer</h2>
                        <h2>Seattle, WA</h2>
                    </div>
                    <div className='text-[0.9375rem]'>
                        <p>&emsp;“Online mentorship platform is genius for people like me, who are in need of career advice. However, I wish there was a more efficient way of finding the right mentor for me.”</p>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className='flex flex-col ml-[2.19rem] w-[41.25rem]'>
                {/* Bio */}
                <div className='flex flex-col border-b-[0.09375rem]  border-b-slate-200 mt-6'>
                    <div className='flex gap-1 mb-2'>
                        <img src={Bio} alt="" />
                        <h2 className='text-[1.125rem] font-bold'>Bio</h2>
                    </div>
                    <p className='text-[0.875rem] pb-[1.56rem] w-[37.5rem] font-normal'>Sean is a 31 year old male that used to be in marketing for 8 years before he decided to do a career pivot into product design. Marketing was exciting for a time, but he felt ready to learn something new. Sean’s friend is in a bootcamp for designers and Sean decided to join after doing some research about the role. Months have passed and Sean starts to apply to jobs as his bootcamp is coming to an end. Although he started the bootcamp with excitement, he’s been feeling more anxious lately since he started job searching. The job market is not looking so great and product designer roles seem more competitive than ever. In need of some affirmation and career advice, Sean searches for an online mentorship platform. Sean’s first impression of this online mentorship website is that there are so many mentors to choose from and that it takes longer than he’d expected to find the right mentor. Sean wishes there were more specific filters available on this website so that he can narrow down his search more efficiently. Once he has narrowed down to a few potential mentors according to their professional background he’s looking for, Sean’s priority shifts to their personality: what is the mentor like and what is their working style? Sean believes that it would be beneficial to know more about what the mentor is like before booking a call with them, so that he knows what to expect.</p>
                </div>
                {/* bottom */}
                <div className='flex'>
                    {/* Left */}
                    <div className='flex flex-col w-[24.25rem] pt-[1.5rem] '>
                        {/* Goals */}
                        <div className='flex flex-col gap-[1.19rem] '>
                            <div className='flex gap-1 items-end'>
                                <img src={Goals} alt="" />
                                <h2 className='font-bold text-[1.125rem] leading-none '>Goals</h2>
                            </div>
                            <div className='w-[21.5rem] mb-4'>
                                <ul className='flex flex-col gap-1 text-[0.875rem]'>
                                    <li>&#x2022; To find a mentor that can give helpful advice</li>
                                    <li>&#x2022; To find the right mentor for him efficiently</li>
                                    <li>&#x2022; To be able to use more specific search filters so that he can find his mentor quickly</li>
                                    <li>&#x2022; To know more about what the mentor is like,so he knows what to expect </li> 
                                    
                                </ul>
                            </div>

                        </div>
                        {/* Frustrations */}
                        <div className='flex flex-col gap-[1.19rem]'>
                            <div className='flex gap-2 items-center '>
                                <img src={Frustrations} alt="" />
                                <h2 className='font-bold text-[1.125rem] leading-none'>Frustrations</h2>
                            </div>
                            <div>
                                <ul className='flex flex-col gap-1 ml-3 text-[0.875rem]'>
                                    <li>&#x2022; There are not enough search filters to narrow down to the right mentor quickly</li>
                                    <li>&#x2022; Choosing the right mentor takes longer than he’d like</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* Right */}
                    <div className='w-[15.75rem] pt-[1.5rem]'>
                        {/* Core Values */}
                        <div className='flex flex-col h-[13rem]'>
                            <div className='flex gap-1 items-center'>
                                <img src={Cvalues} alt="" />
                                <h2 className='font-bold text-[1.125rem] leading-none ' >Core Values</h2>
                            </div>
                            <div className='uppercase font-semibold p-4'>
                                <p>
                                    1. Compassionate <br/> 2. Loyalty<br/> 3. Responsibility
                                </p>
                            </div>
                        </div>
                        {/* Interests */}
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-1 items-center'>
                                <img src={Interests} alt="" />
                                <h2 className='font-bold text-[1.125rem] leading-none '>Interests</h2>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-3 pl-[4.69rem]'>
                                    <img src={hiking} alt="" />
                                    <p>HIKING</p>
                                </div>
                                <div className='flex gap-3 pl-[4.69rem]'>
                                    <img src={Coffee} alt="" />
                                    <p>COFFEE</p>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>
        
        </div>
    </div>
    
  )
}

export default Profile
