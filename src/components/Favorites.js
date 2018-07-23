import React, { Component } from 'react'
import Favorites2 from './Favorites2'

class Favorites extends Component {
  render(){
    let favoriteMap = this.props.favorites.map( f => {
      return (
        <Favorites2 updateFavorites={this.props.updateFavorites} f = {f} />
      )
    })
    return(
      <div className = "favorites-content-right">
      Favorites: 
      {favoriteMap}
      </div>
    )
  }
}
 
export default Favorites;