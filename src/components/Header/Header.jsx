import React,{useContext} from 'react';
import TheBharatNewsLogoWhite from "../../assets/TheBharatNewsLogoWhite.png";
import SearchIcon from "../../assets/SearchIcon.png";

import Context from "../utils/Context.jsx";

import {Link} from "react-router-dom";

const Header = () => {

    const{search, setSearch, searchtext, setSearchText, setNewsCategory} = useContext(Context);

  return (
    <div className='text-white bg-emerald-600 flex items-center justify-between p-1 py-3 laptop:p-2 shadow-lg border-r-5'>
        <div>
        <Link to="/"><h2 className='laptop:p-2'>The Bharat News</h2></Link>
        </div>
        <div>
            <form className='hidden laptop:flex items-center justify-center'>
                <input type="search" placeholder="Search Bharat News..." onChange={(e) => setSearchText(e.target.value)} className='w-80 p-1 py-[5px] text-black outline-none rounded-l-sm caret-[#5499b4]'/> 
                <Link to={`/search/${searchtext}`} onClick={() => {setSearch(false); setNewsCategory("general")}}><button className='bg-[#011E29] pt-[0.2rem] pb-[0.34rem] px-3 border-[0.5px] border-solid border-white rounded-r-sm'><img src={SearchIcon} className='w-5'/></button></Link>
            </form> &nbsp;
            <button className='bg-[#214f61] p-1 px-3 border-[0.5px] border-solid border-white rounded-sm laptop:hidden' onClick={()=>setSearch(!search)}><img src={SearchIcon} className='w-5'/></button>
        </div>
    </div>
  )
}

export default Header