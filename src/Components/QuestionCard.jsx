import React, { useState } from 'react'
import plus from "../assets/plusIcon.svg"
import dash from '../assets/dash.svg'

const QuestionCard = ({card}) => {
    const [Ans , setAns] = useState(false)
    const handleClick = () => {
        setAns((pre)=> !pre)
    }
  return (
    <>
            <div className='bg-white m-2 lg:w-[900px] xs:w-[350px]  sm:w-[400px] md:w-[600px] p-6 rounded-[10px] Qcard' key={card.answer}>
                <div className='flex justify-between items-center'>
                    <h1 className='lg:text-xl md:text-lg xs:text-[14px] font-bold'>{card.question}</h1>
                    <img src={Ans?dash : plus} alt="more" className='w-[22px] cursor-pointer' onClick={handleClick} />
                </div>
                {Ans && (
                    <div className='flex items-center justify-between mt-4'>
                        <h1 className='lg:leading-[30px] xs:leading-[20px] xs:text-[12px] lg:text-[17px] text-secondaryBlue'>
                            {card.answer}
                        </h1>
                    </div>
                )}
            </div>
        
    </>
  )
}

export default QuestionCard