import React,{useState, useEffect, useContext} from 'react';
import NoImageFound from "../../assets/NoImageFound.png";
import NoNewsFound from "../../assets/NoNewsFound.jpg";
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Context from '../utils/Context';
import { countries } from '../utils/Api';


const TopHeadlines = () => {

  const{newscategory, setNewsCategory, newscountry, setNewsCountry} = useContext(Context);

  const[sort, setSort] = useState("publishedAt");
  const [headlines, setHeadlines] = useState([]);
  const[loading, setLoading] = useState(false);

  const[error, setError] = useState();

  const fetchTopHeadlines = async () => {
    setError();
    await fetch(`https://gnews.io/api/v4/top-headlines?category=${newscategory}&lang=en&country=${newscountry}&apikey=41fe03aadffe679c5d0fc836999eaa0c`)
     .then((res) => res.json())
     .then((json) => {
      if(json.articles){
        setHeadlines(json.articles);
      }else{
        setError(json.errors[0]);
      }
      setLoading(false);
     })
     .catch((err) => console.log(err));

  }

  useEffect(()=> {
    setLoading(true);
    fetchTopHeadlines();

  }, [newscategory, newscountry])

  return (
    <div className='bg-white p-2 rounded-sm'>
        <div className='flex items-center justify-between tablet:w-[475px] laptop:w-[750px]'>
            <div className='text-[18px] font-extrabold flex items-center text-[#2f2f2f] fontfamily tablet:text-[20px]'><div className='w-1 h-8 rounded-full bg-[#2f2f2f] mr-1'></div>Top Headlines</div>
            <div>
                
            </div>
        </div>
        <div>

        {
            loading ? 

            <>
             {
                Array(3).fill("").map((arr,index) =>(
                  <div key={index} className='bg-white shadow-[0_0_6px_0_rgba(121,121,121,0.3)] my-5 p-2 rounded-md hover:shadow-[0_0_10px_0_rgba(121,121,121,0.3)] flex flex-col gap-1 w-[370px] tablet:w-[475px] laptop:w-[750px] laptop:flex laptop:flex-row'>
                     <Skeleton className='rounded-sm items-center border border-solid  min-w-[100%] max-w-[100%] min-h-[12rem] max-h-[12rem] laptop:min-w-[18rem] laptop:max-w-[18rem] laptop:min-h-[11rem] laptop:max-h-[11rem]'/>
                     <div className='flex flex-col gap-1 laptop:gap-[6px]'>
                       <Skeleton className='laptop:w-[436px] h-9'/>
                       <Skeleton />
                       <Skeleton />
                       <Skeleton />
                       <Skeleton />
                       <Skeleton />
                     </div>                 
                  </div>
                ))
             }
            </> : 

            headlines?.length>1 ?
            
              headlines?.map((headline, index) => (
                    <div key={index} className='bg-white shadow-[0_0_6px_0_rgba(121,121,121,0.3)] my-5 p-2 rounded-md hover:shadow-[0_0_10px_0_rgba(121,121,121,0.3)] tablet:w-[475px] laptop:w-[750px] laptop:flex gap-3'>
                        <a target='_blank' href={headline?.url}><img src={headline?.image ? headline?.image : NoImageFound} alt="Bharat News" className='rounded-sm bg-slate-50 items-center border border-solid border-[#a1a0a0] min-w-[100%] max-w-[100%] min-h-[15rem] max-h-[15rem] laptop:min-w-[18rem] laptop:max-w-[18rem] laptop:min-h-[11rem] laptop:max-h-[11rem]'/></a>
                        <div className='flex flex-col gap-[3px]'>
                            <div className='text-[16px] font-semibold text-justify tit-desc leading-tight hover:underline'><a target='_blank' href={headline?.url}>{headline?.title}</a></div>
                            <p className="text-justify content-desc">{headline?.content.split("...")[0]}<a target='_blank' href={headline?.url}>...</a></p>
                            <p className='text-[#757575] text-[13px]'>News Source : <a className='underline hover:text-[var(--main-color)]' target='_blank' href={headline?.source?.url}>{headline?.source?.name}</a></p>
                            <p className='text-[#757575] text-[13px]'>Published At : {moment.utc(headline?.publishedAt).format('hh:mm A')} on {moment.utc(headline?.publishedAt).format('dddd, D MMMM, YYYY')}</p>
                        </div>
                        
                    </div>
            ))
             :
             <div className='flex flex-col items-center justify-around h-[100vh]'>
              <p className='w-[23rem] text-center'>{error}</p>

              <img src={NoNewsFound} alt="No News Found" className='w-[25rem]'/>
             </div>
            
        }

        </div>
    </div>
  )
}

export default TopHeadlines