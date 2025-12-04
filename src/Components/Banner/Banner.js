import React, {useEffect, useState} from 'react'
import './Banner.css'
import {apiKey, imageUrl} from '../constants/constant'
import axios from '../../axios'
import Youtube from 'react-youtube'

function Banner() {
  const [movie, setMovie] = useState([])
  // const [urlId, setUrlId] = useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      setMovie(response.data.results[0])
    })
  },[]);
  // const opts = {
  //     height: '350px',
  //     width: '500px',
  //     playerVars: {
  //       // https://developers.google.com/youtube/player_parameters
  //       autoplay: 1,
  //     },
  //   }
  //   const handleMovie = (id)=>{
  //     console.log(id)
  //     axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-us`).then(response=>{
  //       setUrlId(response.data.results[0])
  //     })
  //   }

  return (
    <div className='banner' style={{backgroundImage:`url(${imageUrl + movie.backdrop_path})`} }>
      
        <div className='content'>
            <h1 className='title' > {movie.title? movie.title:movie.name} </h1>
            <div className='banner_buttons'>
                {/* <button className='button' onClick={()=>handleMovie(movie.id)} >Play</button> */}
                <button className='button' >Play</button>
                <button className='button' >My List</button>
            </div>
            
            <h1 className='description'>{movie.overview} </h1>
            <div className='player'>
            {/* {urlId && <  Youtube opts={opts} videoId={urlId.key} />} */}
            </div>
        </div>
        
      <div className="fade_bottom"></div>
      
    </div>
  )
}

export default Banner
