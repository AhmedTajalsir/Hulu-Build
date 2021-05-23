import Image from "next/dist/client/image";
import {ThumbUpIcon} from '@heroicons/react/outline'
import {forwardRef} from 'react'
const Thumbnail = forwardRef(({res}, ref)=> {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200
        ease-in sm:hover:scale-105 transform hover:z-50">
            <Image
              layout="responsive"
              src={
                  `${BASE_URL}${res.backdrop_path|| res.poster_path}` || `${BASE_URL}${res.poster_path}`
              }
              height={1080}
              width={1920}
            />
            <div className="p-2">
                <p className='truncate max-w-sm '>{res.overview} </p>

                <h2 className="mt-1 cursor-pointer text-2xl text-white
                transition-all duration-100 ease-in-out group-hover:font-bold ">{res.title || res.original_name}</h2>

                <p className="flex items-center opacity-0  group-hover:opacity-100">
                    {res.media_type && `${res.media_type} .`}{" "}
                    {res.release_date || res.first_air_data} .{" "}
                    <ThumbUpIcon className="h-5 "/> {res.vote_count}
                </p>
            </div>
        </div>
    )
}
)
export default Thumbnail
