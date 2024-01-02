import React from 'react'
import  resList  from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'


function Body() {
  const [listofRestaurants, setListofRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')
 
 
  useEffect(()=>{
  fetchedData();
  },[])

 const fetchedData = async() =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.4802092&lng=78.4866894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json)
  
  setListofRestaurants( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }
 

if(listofRestaurants === 0 ){
  return <p>Loading...</p>
}


  return (
    <div className='body-container'>
      {/* //search   {/* Top Rated Restaurant */}
      <div className='search-container'>
      <input type="text" value={searchText} onChange={(e) =>setSearchText(e.target.value)}/>

        <button onClick={() =>{

          const searchFilteredRestaurants = listofRestaurants.filter((res)=>{
            res.name.toLowerCase().includes(searchText.toLowerCase())
            setListofRestaurants(searchFilteredRestaurants)
          }) 
        }}>Search</button>



        <button onClick={()=>{
          const filteredData = listofRestaurants.filter((res)=>
            res.info.avgRating > 4
          ); setListofRestaurants(filteredData)
        }}>
          Top Rated Restaurants
        </button>  
      </div>


      <div className='restaurants-container'>  
      {listofRestaurants.map((restaurant) =>(
        <RestaurantCard   key={restaurant.id} resData={restaurant}/> 
      ))}
        
      </div>
    </div>
  )
}

export default Body