
import { useEffect, useState } from 'react'
import './App.css'
import MainBody from './Components/MainBody/MainBody'
import SideBar from './Components/SideBar/SideBar'

function App() {


  return (
    <>
      <div className='page'>
            <div className='sideBar'>
              <SideBar />
            </div>
            <div className='mainBody'>
              <MainBody
              />
            </div>

      </div>

    </>
  )
}

export default App
