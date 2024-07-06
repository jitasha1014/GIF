
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


export const Tag = () => {
  const [tag, setTag] = useState('');
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    async function fetchData() {
        setLoading(true);
        const gifurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(gifurl);
        const imagesource = data.data.images.downsized_large.url;
        setGif(imagesource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    },[]) 

    
    function clickHandler(){
        fetchData();
    }

    // function changeHandler(event){
    //    setTag(event.target.value);
    // }

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline font-bold uppercase'>RANDOM {tag} GIF</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt='Gif' width="450"/>)
        }
        
        <input
          className='w-10/12 bg-slate-200 text-lg py-2 rounded-lg mb-[3px] text-center'
          onChange={(event) => setTag(event.target.value)}
          value={tag}
        />

        <button className='mb-[20px] w-10/12 bg-slate-200 text-lg py-2 rounded-lg' onClick={clickHandler}>
            Generate  
        </button>
    </div>
  )
}
