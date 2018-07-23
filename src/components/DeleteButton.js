import React from 'react'

let DeleteButton = props => {
  return (
    <button className = "going-to-0-button" onClick = { () => props.deleteCoin(props.id)}>Going to $0</button>
  )
} 

export default DeleteButton 