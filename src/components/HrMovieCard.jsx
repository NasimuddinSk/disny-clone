import { IMAGE_BASE_URL } from "../Constant/GenrasList";

function HrMovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img src={IMAGE_BASE_URL + movie.backdrop_path}
        className='w-[110px] md:w-[260px] rounded-lg
     hover:border-[3px] border-gray-400 cursor-pointer'/>
      <h2 className='w-[110px] md:w-[260px] mt-2'>

        {
          movie.title.length > 10 ? movie.title.substring(0, 10) + "..." : movie.title
        }
      </h2>
    </section>
  )
}

export default HrMovieCard