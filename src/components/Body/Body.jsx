import React from 'react'
import TopHeadlines from '../TopHeadlines/TopHeadlines'

const Body = () => {
  return (
    <div className='bg-[var(--background-color)] p-1 text-[14px] tablet:flex justify-center laptop:p-2  '>
      <div className="flex items-center flex-col">
        <TopHeadlines/>
      </div>
    </div>
  )
}

export default Body