import React from 'react'

let DeleteButton = props => {
  return (
    <button onClick = { () => props.deleteCoin(props.id)}>Going to $0</button>
  )
} 

export default DeleteButton 