import React from 'react'

const SplitScreen = ({children , leftWeight , RightWeight, reverse}) => {

    const [ left , right ] = children;
  return (
    <div className={`flex ${reverse ? "flex-col-reverse" : "flex-col space-y-12 lg:space-y-0 "} lg:flex-row justify-between`}>
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