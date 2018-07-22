import React, { Component } from 'react'
import Favorites2 from './Favorites2'

class Favorites extends Component {
  render(){
    let favoriteMap = this.props.favorites.map( f => {
      return (
        <Favorites2 updateFavorites={this.updateFavorites} f = {f} />
      )
    })
    return(
      <div>
      {favoriteMap}
      </div>
    )
  }
}
 
export default Favorites;