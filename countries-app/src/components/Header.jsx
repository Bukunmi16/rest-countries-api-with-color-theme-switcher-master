import React from 'react'

const header = ({setDark, dark}) => {
  return (
    <div className='w-[100%] shadow-md  dark:bg-[#374151] dark:text-[white] flex justify-between py-7.5 px-5'>
    <p className='font-bold'>Where in the World?</p>
  <div className='flex items-center w-[105px] justify-between' onClick={() => setDark(!dark)}>
  <ion-icon name="moon-outline"></ion-icon>
  <p>Dark Mode</p>  
  </div>
  </div>
)
}

export default header