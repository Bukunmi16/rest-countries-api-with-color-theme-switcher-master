import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Body = ({countries, search, filter}) => {

    const countryElement = countries.filter((item) => {
        const searchedItems = search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
         return searchedItems
    }).filter((item) =>{
        // console.log(item);
        return filter === '' ? item : item.region.includes(filter)  
    }).map((country, index) => {
        return(
                <Link to={`/country/${country.name.toLowerCase()}`} key={index} className='w-[50%] max-w-[300px] my-5 rounded-[10px] shadow dark:bg-[#374151] dark:text-[white]'>
            <img src={country.flag} className='rounded-t-[10px] h-[200px] w-full object-cover' alt="" />
                <div className="px-5 pb-10 text-[15px]">
                    <p className="text-[20px] pt-5 pb-3 font-bold">{country.name}</p>
                    <span className='flex'>
                        <p className='font-bold' >Population: </p>
                        <p className='ml-1'>{country.population.toLocaleString()}</p>
                    </span>
                    <span className='flex'>
                        <p className='font-bold'>Region: </p>
                        <p className='ml-1'>{country.region}</p>
                    </span>
                    <span className='flex'>
                        <p className='font-bold'>Capital: </p>
                        <p className='ml-1'>{country.capital}</p>
                    </span>
                </div>
                </Link>
        )
    })

    

    return (
    <div className='flex flex-col items-center sm:flex-row sm:px-[25px] sm:gap-10 sm:flex-wrap sm:justify-center '>
        {countryElement}
    </div>
  )
}

export default Body