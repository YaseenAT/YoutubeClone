import React, { useState } from 'react'
import Button from './Button'


const List = ["All","Live","Mixes","Music","News","Sitcoms","Debates","Gaming","Recently Uploaded"]
const ButtonList = () => {



  return (
    <>
 
    <div className='flex'>
    {
      List.map((bt)=>(
        <Button name={bt}/>
      ))
    }
    </div>
   
</>
   
  )
}

export default ButtonList;