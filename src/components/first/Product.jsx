import React from 'react'

function Product(props) {
  return (
    <div className='card w-25 text-center mx-auto'>
        <h3>{props.p.id}</h3>
        <img src={props.p.image} className='w-50 h-50 mx-auto'/>
        <div className='card-body'>
          <h1>{props.p.title}</h1>
          <p>{props.p.description}</p>
          <h4>{props.p.price}</h4>
        </div>
    </div>
  )
}

export default Product