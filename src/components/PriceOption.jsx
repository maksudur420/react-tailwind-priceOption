import React from 'react'
import Feature from './Feature';

const PriceOption = ({option}) => {

    const {name,price,features}=option;

    console.log(option)
  return (
    <div className='p-5 shadow-xl bg-blue-500 text-center flex flex-col text-white rounded-lg'>
        <h2 className='mt-5'>
            <span className="text-5xl text-center">{price}</span>
            <span className="text-xl text-center">/mon</span>
        </h2>
        <h4 className="text-3xl font-bold text-center my-5">{name}</h4>
        <div className="flex-grow mb-5 pl-5 text-lg">
            {
                features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
            }
        </div>
        <button className='text-xl p-3 rounded-xl font-bold w-full bg-green-500 hover:bg-green-950'>Buy Now</button>
    </div>
    
  )
}

export default PriceOption
