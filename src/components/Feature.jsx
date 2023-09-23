import React from 'react';
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Feature = ({feature}) => {

  return (
    <div className='flex items-center gap-4'>
        <AiOutlineCheckCircle className='bg-green-500 rounded-xl'/><p>{feature}</p>
    </div>
  )
}

export default Feature
