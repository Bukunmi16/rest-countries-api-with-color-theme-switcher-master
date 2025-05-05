import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
const CountryInfo = ({countries}) => {
  const {countryName} = useParams()
  const navigate = useNavigate()
  const country = countries.find((country) => country.name.toLowerCase() === countryName)
  
  return (
    <div className='p-10 dark:text-[white]  dark:bg-[#2b3945] self-center font-[Nunito] flex flex-col text-[#2b3945]'>
    <div className='flex items-center  justify-between'>
    <button  onClick={() => navigate(-1)} className='flex items-center w-[90px] justify-center p-2 shadow rounded-[7px]'>
    <ion-icon name="arrow-back-outline" className='mr-1.5'></ion-icon>
    <p className='text-[15px] text-[#858585]'>Back</p>
    </button>
    <Link to={'/'} className='flex items-center w-[90px] justify-center p-2 shadow rounded-[7px]'>
    <ion-icon name="home-outline" className="mr-1.5"></ion-icon>
    <p className='text-[15px] text-[#858585]'>Home</p>
    </Link>
    </div>

    {country && 
    <div className='flex flex-col md:flex-row md:justify-between items-center border-amber-200 md:items-center'>

    <img src={country.flag} className='my-[40px] object-center  w-full max-w-[500px]' alt="" />
    
    <div className=" md:w-[50%]  w-[100%] justify-items-start md:flex md:flex-col">
    
    <p className='font-bold text-[20px] md:my-[20px]'>{country.name}</p>
    <div className='md:flex'>
    <div className="flex flex-col my-[20px] md:w-[50%] md:h-[70%]  md:my-[0px]  gap-2">

      <span className='flex'>
        <p className='font-bold'>Native Name:</p>
        <p className='ml-1.5 text-[#858585]'>{country.nativeName}</p>
      </span>
      <span className='flex'>
        <p className='font-bold'>Population:</p>
        <p className='ml-1.5 text-[#858585]'>{country.population.toLocaleString()}</p>
      </span>
      <span className='flex'>
        <p className='font-bold'>Region:</p>
        <p className='ml-1.5 text-[#858585]'>{country.region}</p>
      </span>
      <span className='flex'>
        <p className='font-bold'>Sub Region:</p>
        <p className='ml-1.5 text-[#858585]'>{country.subregion}</p>
      </span>
      <span className='flex'>
        <p className='font-bold'>Capital:</p>
        <p className='ml-1.5 text-[#858585]'>{country.capital}</p>
      </span>
    </div>

    <div className="flex flex-col  md:w-[50%] md:h-[100%] ">
    <span className='flex'>
        <p className='font-bold'>Top Level Domian:</p>
        <p className='ml-1.5 text-[#858585]'>{country.topLevelDomain}</p>
      </span>
      <span className='flex'>
        <p className='font-bold'>Currencies:</p>
        <p className='ml-1.5 text-[#858585]'>{country.currencies && country.currencies[0].name}</p>
      </span>
      <span className='flex'>
        <p className='font-bold'>Languages:</p>
        <div className='ml-1.5 flex text-[#858585]'>{country.languages.map((lang, index) =>{
          return(
            <p className='mr-1' key={index}>{lang.name}</p>
          )
        })}</div>
      </span>
      </div>
            </div>

        <div>
        <p className='font-bold  mt-[40px] mb-[10px] md:my-[25px]'> Border Countries: </p>
        <div className='flex gap-2 flex-wrap'>
        {country && country.borders && country.borders.map((element, index) => {
          const country = countries.find((c) => c.alpha3Code === element)
          // console.log(country.name);
          return(
            <Link to={`/country/${country.name.toLowerCase()}`} className='rounded-[5px] shadow p-2 text-[12px]' key={index} >{country.name}</Link>
          )          
        })}
        </div>
        </div>
        </div>
    </div>
    }
    </div>
  )
}

export default CountryInfo