import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Favourite(props) {
    const [FavouriteNumber, setFavouriteNumber] = useState(0)
    const [Favourited, setFavourited] = useState(false)

    const variable = {
      userFrom: props.userFrom,
      movieId: props.movieId,
      movieTitle: props.movieInfo.original_title,
      movieImage: props.movieInfo.backdrop_path,
      movieRuntime: props.movieInfo.runtime,
    }

    useEffect(() => {
       axios.post('/api/favourite/favouriteNumber', variable)
        .then(response => {
          if (response.data.success) { 
            setFavouriteNumber(response.data.favouriteNumber)
           } else {
               alert('Failed to get favourite number')
           }
       })

       axios.post('/api/favourite/favourited', variable)
        .then(response => {
          if (response.data.success) {
            setFavourited(response.data.favourited)
          } else {
            alert('Failed to get Favourite information')
          }
        })

    }, [])
    
    const handleClickFavourite = () => {
      if (Favourited) {
        // when already added
        axios.post('/api/favourite/removeFromFavorite', variable)
        .then(response => {
          if (response.data.success) {
            setFavouriteNumber(FavouriteNumber - 1)
            setFavourited(!Favourited)
          } else {
            alert('Failed to remove from favourite');
          }
        })
      } else {
        // when not addeding yet
        axios.post('/api/favourite/addToFavourite', variable)
          .then(response => {
            if (response.data.success) {
              setFavouriteNumber(FavouriteNumber + 1)
              setFavourited(!Favourited)
            } else {
              alert('Failed to add to favourites');
            }
          })
      }
    }

  return (
    <div>
       <button onClick={handleClickFavourite}>{Favourited ? "remove from favourite": "Add to favourite"}{FavouriteNumber}</button>
    </div>
  )
}

{/**
  1:24:21
*/}

export default Favourite