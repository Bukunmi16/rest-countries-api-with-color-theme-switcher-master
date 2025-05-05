import {useState, useEffect} from 'react'
import Search from '../components/Search'
import Body from '../components/Body'

const Home = ({countries}) => {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')


  return (
    <div className='font-[Nunito] dark:bg-[#2b3945]'>
    <Search
    data={countries}
    search={search}
    setSearch={setSearch}
    filter={filter}
    setFilter={setFilter}
    />
    <Body 
    search={search}
    countries={countries}
    filter={filter}
    setFilter={setFilter}
    />
    </div>
  )
}

export default Home