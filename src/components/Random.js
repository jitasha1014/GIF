
import React from 'react'
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';


export const Random = () => {

    const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline font-bold'>A RANDOM GIF</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt='GIF' width="450"/>)
        }
        
        <button className='mb-[20px] w-10/12 bg-slate-200 text-lg py-2 rounded-lg' onClick={() => fetchData()}>
            Generate  
        </button>
    </div>
  )
}