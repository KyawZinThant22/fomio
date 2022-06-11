import React from 'react'

const SplitScreen = ({children , leftWeight , RightWeight}) => {
    const [ left , right ] = children;
  return (
    <div className='flex justify-between'>
        <div className={`flex-[${leftWeight}]`}>
            {left}
        </div>
        <div className={`flex-[${RightWeight}]`}>
            {right}
        </div>
    </div>
  )
}

export default SplitScreen