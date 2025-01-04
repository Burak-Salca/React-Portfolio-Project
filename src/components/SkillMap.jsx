import React from 'react'

export default function SkillMap(props) {
   const {title, image} = props;
  return (
    <div className="flex flex-col items-center text-center">
        <img 
          className='w-[75px] h-[75px] object-contain' 
          src={image} 
          alt={title} 
          title={title} 
        />
    </div>
  )
}