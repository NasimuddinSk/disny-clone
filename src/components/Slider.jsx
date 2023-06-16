
import { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { IMAGE_BASE_URL } from '../Constant/GenrasList';
const screenWidth = window.innerWidth;


function Slider() {

  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();


  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then(res => {
      setMovieList(res.data.results);
      console.log(movieList);

    });
  }

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 200;
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 200;
  }


  return (
    <div>

      <HiOutlineChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)} />

      <HiOutlineChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 "
        onClick={() => sliderRight(elementRef.current)} />



      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {
          movieList.map((item, index) => (
            <img src={IMAGE_BASE_URL + item.backdrop_path} alt=""
              className="max-w-full  h-[310px] object-cover md:object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in cursor-pointer"
              key={item.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Slider 