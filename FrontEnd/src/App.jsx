
import { useEffect, useState } from 'react'
import './App.css'
import MainBody from './Components/MainBody/MainBody'
import SideBar from './Components/SideBar/SideBar'
import axios from 'axios';

function App() {

  const [graphData, setGraphData] = useState("");
  const [getDataSuccess, setGetdataSuccess] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:4000/data")
      .then((response) => {
        const { data } = response;
        console.log(response)
        setGraphData(data.data)
        setGetdataSuccess(2);
      })
      .catch(() => {

      })
    
  }, [getDataSuccess])

  return (
    <>
      <div className='page'>
        {getDataSuccess === 1 ? <div><h1>Loading...</h1> </div>:
          <>
            <div className='sideBar'>
              <SideBar />
            </div>
            <div className='mainBody'>
              <MainBody
                data={graphData}
              />
            </div>
          </>

        }

      </div>

    </>
  )
}

export default App
