import React from 'react'

const SplitScreen = ({children , leftWeight , RightWeight,}) => {

    const [ left , right ] = children;
  return (
    <div className='flex flex-col-reverse xl:flex-row justify-between  '>
        <div className={`flex-[${leftWeight}]`}>
            {left}
        </div>
        <div className={`flex-[${RightWeight}]   `}>
            {right}
        </div>
    </div>
  )
}

export default SplitScreen

//  ${absolute && "absolute top-[-3rem] right-[-32rem] "}