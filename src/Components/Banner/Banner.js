import React, {useEffect, useState} from 'react'
import './Banner.css'
import {apiKey, imageUrl} from '../constants/constant'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      setMovie(response.data.results[1])
    })
  },[]);

  return (
    <div className='banner' style={{backgroundImage:`url(${imageUrl + movie.backdrop_path})`}}>
        <div className='content'>
            <h1 className='title' > {movie.title? movie.title:movie.name} </h1>
            <div className='banner_buttons'>
                <button className='button' >Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie.overview}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
