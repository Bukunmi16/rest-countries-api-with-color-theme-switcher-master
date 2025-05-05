import {useState} from 'react'

const Search = ({data, search, setSearch, filter, setFilter}) => {    

    // function filter(event) {
    //    console.log(event.target.value)
    //    setSearch(data.filter((data) => {
    //     data.name.toLowerCase().includes(event.target.value)
    //    }))     
    // }

    // console.log(search);
    // console.log(filter);
    

  return (
    <div className='flex py-7 flex-col h-[200px] justify-between  w-full sm:flex-row sm:h-[100px]'>
    <div className=' mx-5 rounded-[7px] py-2 px-5 flex md:w-[30%] dark:bg-[#374151] dark:text-[white] shadow'>
        <div className='mx-2 mt-1.5 text-gray-500'>
        <ion-icon name="search-outline"  size="small" ></ion-icon>
        </div>
        <input type="text" onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} className='text-[14px] px-2 focus:outline-none w-full' maxLength={20} placeholder='Search for a country...' />
    </div>

    <div className='flex items-center justify-between dark:bg-[#374151] p-3 mx-5 w-[50%] md:w-[15%] shadow rounded-[7px]'>
        {/* <p>Filter by Region</p> */}
        <select name="Filter"  onChange={(e) => setFilter(e.target.value)} className='focus:outline-none w-full dark:text-[white] dark:bg-[#374151]'>
        <option value="" >Filter By Region (All)</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>
        {/* <ion-icon name="chevron-down-outline"></ion-icon> */}
    </div>
    </div>
  )
}

export default Search