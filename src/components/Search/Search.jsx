import React,{useContext} from 'react';
import SearchIcon from "../../assets/SearchIcon.png";

import Context from "../utils/Context.jsx";
import {Link} from "react-router-dom";


const Search = () => {

    const{search, setSearch, searchtext, setSearchText} = useContext(Context);

  return (
    <div className={search ? "bg-[var(--background-color)] p-1 py-4 laptop:hidden" : "hidden"  }>
        <form className='flex items-center justify-center '>
            <input type="search" placeholder="Search Bharat News..." onChange={(e) => setSearchText(e.target.value)} className='w-72 p-1 py-[5px] text-black outline-none rounded-l-sm caret-[#011E29] border-[0.5px] border-solid border-[#011E29] tablet:w-[22rem]'/>
            <Link to={`/search/${searchtext}`} onClick={() => setSearch(false)}><button className='bg-[#011E29] pb-[6.2px] pt-[5px] px-3 border-none rounded-r-sm'><img src={SearchIcon} className='w-5'/></button></Link>
        </form>
    </div>
  )
}

export default Search