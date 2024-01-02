import React from 'react'
import  {CDN_URL}  from '../utils/constants'


function RestaurantCard(props) {
    const {resData} = props
    const 
    {name, cuisines,costForTwo,avgRating,cloudinaryImageId} = resData?.info || {}

  return (
    <div className='res-card-container'>
        <img 
           className='res-card-image'
           alt="res-card-img"
           src={CDN_URL +  cloudinaryImageId }/>
        <h3>{name}</h3>
        <p className='cuisines'>{cuisines}</p>
        <p>{costForTwo}</p>
        <h5>{avgRating}</h5>
        <p>Rs.200</p>
    </div>
  )
}

export default RestaurantCard