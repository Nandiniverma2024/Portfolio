import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { achievements } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='achievements'>
        <h1 className='heading mb-16'>
          Recognitions 
            <span className='text-purple'> & Achievements</span>
        </h1>

        <div className='flex  flex-col items-center max-lg:mt-10 aspect-video'>
          <InfiniteMovingCards 
            items={ achievements }
            direction='right'
            speed='fast'
          />
        </div>
    </div>
  )
}

export default Clients