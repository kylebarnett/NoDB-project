import React from 'react'

let DeleteButton = props => {
  return (
    <button onClick = { () => props.deleteCoin(props.id)}>Delete Shit Coin</button>
  )
} 

export default DeleteButton 