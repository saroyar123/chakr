import React, { useEffect, useState } from 'react'
import "./MainBody.css"
import Chart from "react-apexcharts";

function MainBody({ data }) {
  const [graphData, setGraphData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: data.map(entry => entry.date)
      }
    },
    series: [
      {
        name: "series-1",
        data: data.map((entry) => {
          return entry.avg.toFixed(2)
        })
      }
    ]
  })
  return (
    <div>
      {/* this is the starting of the analysis part of the companey data */}
      <div className="alalysis">
        <div className="revenues">
          <h2>Revenues</h2>
          <div className="content">
            <h1>15%</h1>
            <p>Increase compared to last week</p>
          </div>
          <div className='references'>
            <a><p>Revenues Reports</p></a>
          </div>
        </div>
        <div className="lostDetails">
          <h2>Lost Details</h2>
          <div className="content">
            <h1>4%</h1>
            <p>You closed 96 out of 100 deals</p>
          </div>
          <div className='references'>
            <a><p>All details</p></a>
          </div>
        </div>
        <div className="quatersGoal">
          <h2>Quaters Goals</h2>
          <div className="content">
            <h1>4%</h1>
            <p>You closed 96 out of 100 deals</p>
          </div>
          <div className='references'>
            <a><p>All details</p></a>
          </div>
        </div>
      </div>

      {/* In this div we are working on the graph and customers */}




      <div className="customers_Growth">

        <div className="customers">
          <div className="customers_headers">
            <h3>Customers</h3>
            <p>Sort by Newest</p>
          </div>
          <div className="customerdetails">
            <div className='customer_Info'>
              <img src='src\assest\images\Avatar (1).svg' />
              <div className="info">
                <h4>name</h4>
                <p>Supermarket</p>
              </div>
            </div>
            <div className='customer_Info'>
              <img src='src\assest\images\Avatar (2).svg' />
              <div className="info">
                <h4>name</h4>
                <p>Supermarket</p>
              </div>

            </div>
            <div className='customer_Info'>
              <img src='src\assest\images\Avatar (3).svg' />
              <div className="info">
                <h4>name</h4>
                <p>Supermarket</p>
              </div>
            </div>
            <div className='customer_Info'>
              <img src='src\assest\images\Avatar.svg' />
              <div className="info">
                <h4>name</h4>
                <p>Supermarket</p>
              </div>
            </div>

          </div>
          <div className='customer_footer'>
          <p>All customers <img src='src\assest\icons\Vector.svg'/></p>
          </div>
          
        </div>


        <div className="growth">
          <div className='graph'>
            <h2>Growth</h2>
            <Chart
              options={graphData.options}
              series={graphData.series}
              type="line"
              width="500"
              height="230"
            />
          </div>
          <div className="performance">
            <div className="performance_details top_month">
              <h4>Top month</h4>
            </div>
            <div className="performance_details top_year">
              <h4>Top year</h4>
            </div>
            <div className="performance_details top_user">
              <h4>Top user</h4>
            </div>
          </div>
        </div>
      </div>




      <div className="customersActivity">
        <div className="chats">
          <h3>Chats</h3>
          <p>2 unread messages</p>
          <div className="users">
            <img src='src\assest\images\Avatar.svg'/>
            <img src='src\assest\images\Avatar (3).svg'/>
            <img src='src\assest\images\Avatar (2).svg'/>
            <img src='src\assest\images\Avatar (1).svg'/>
          </div>
        </div>
        <div className="topStates">
          <h3>Top States</h3>
        </div>
        <div className="newDeals">
          <h3>New Deals</h3>
        </div>
      </div>
    </div>
  )
}

export default MainBody
