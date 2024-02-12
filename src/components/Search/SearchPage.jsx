import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TopSearchResults from './TopSearchResults';

const SearchPage = () => {

  return (
    <div className='bg-[var(--background-color)] p-1 text-[14px] tablet:flex justify-center laptop:p-2  '>
    <div className="flex items-center flex-col">
      <TopSearchResults/>
    </div>
  </div>
  )
}

export default SearchPage