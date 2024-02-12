import React,{useContext} from 'react';
import "./HeaderMenu.css";

import Context from '../utils/Context';

import { NewsCategories } from '../utils/Api';

const HeaderMenu = () => {

  const{newscategory, setNewsCategory, newscountry, setNewsCountry} = useContext(Context);

  const setCategory = (category) => {
    setNewsCategory(category);

  }

  return (
    <div className='bg-[#FFFFFF] border-b-[1px] flex gap-4 overflow-auto slider mx-1 py-1 laptop:justify-around'>
        {
            NewsCategories.map((category) =>(
                <button key={category.id} className={newscategory == category?.categoryValue ? 'bg-[#e3e5e6] p-1 px-2 cursor-pointer rounded-md' : 'hover:bg-[#e3e5e6] p-1 px-2 cursor-pointer rounded-md'}>
                    <p className='text-[14px] font-[600]' onClick={() => setCategory(category?.categoryValue)}>{category?.categoryName}</p>
                </button>
            ))
        }
    </div>
  )
}

export default HeaderMenu