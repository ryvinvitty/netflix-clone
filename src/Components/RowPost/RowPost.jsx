import React,{ useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {apiKey, imageUrl} from '../constants/constant'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
useEffect(() => {
      axios.get(props.url).then(response=>{
        setMovies(response.data.results)
        
      })
},[])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }
    const handleMovie = (id)=>{
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-us`).then(response=>{
        setUrlId(response.data.results[0])
      })
    }
    

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie)=>(
          <div className='post'>
            <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
            <div className='bottom-left' >{movie.title? movie.title:movie.name}</div>           
          </div>
        )          
      )}
      </div>
      {urlId && < Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
