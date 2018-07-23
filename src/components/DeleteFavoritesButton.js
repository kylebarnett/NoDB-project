import React from 'react'

let DeleteFavoritesButton = props => {
  return (
    <button className = "delete-favorites-button" onClick = { () => props.deleteFavoriteCoin(props.id)}>Delete Favorite Coin</button>
  )
} 

export default DeleteFavoritesButton 