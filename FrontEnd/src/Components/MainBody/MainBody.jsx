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
            <h1>15% <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628844/chakr/growth_zjzkgw.svg' /></h1>
            <p>Increase compared to last week</p>
          </div>
          <div className='references'>
            <a><p>Revenues Reports <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706645202/chakr/Vector_nes7lt.svg' /></p></a>
          </div>
        </div>
        <div className="lostDetails">
          <h2>Lost Details</h2>
          <div className="content">
            <h1>4%</h1>
            <p>You closed 96 out of 100 deals</p>
          </div>
          <div className='references'>
            <a><p>All details <img src="https://res.cloudinary.com/dwcarlfhd/image/upload/v1706645202/chakr/Vector_nes7lt.svg" alt="" /></p></a>
          </div>
        </div>
        <div className="quatersGoal">
          <h2>Quaters Goals</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="quaterGoal_value">
                  <h3>84%</h3>
                </div>
        
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="110px" height="110px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#FFCD71" />
                  <stop offset="100%" stop-color="#FFCD71" />
                </linearGradient>
              </defs>
              <circle cx="65" cy="65" r="60" stroke-linecap="round" />
            </svg>
          </div>


          <div className='references'>
            <a><p>All details <img src="https://res.cloudinary.com/dwcarlfhd/image/upload/v1706645202/chakr/Vector_nes7lt.svg" alt="" /></p></a>
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
              <div className='info_details'>
                <img src='src\assest\images\Avatar (2).png' height="40px" width="40px"/>
                <div className="info">
                  <h4>name</h4>
                  <p>Supermarket</p>
                </div>
              </div>

              <div className="working_options wo1">
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628840/chakr/conversations_-_Copy_at3lzj.svg' />
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628848/chakr/star_s8cbfu.svg' />
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628842/chakr/edit_-_Copy_ayne0x.svg' />
                <span>|</span>
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628846/chakr/options_p74ddo.svg' />
              </div>
            </div>
            <div className='customer_Info'>
              <div className="info_details">
                <img src='src\assest\images\Avatar (1).png' height="40px" width="40px"/>
                <div className="info">
                  <h4>name</h4>
                  <p>Supermarket</p>
                </div>
              </div>

              <div className="working_options wo2">
              <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628840/chakr/conversations_-_Copy_at3lzj.svg' />
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628848/chakr/star_s8cbfu.svg' />
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628842/chakr/edit_-_Copy_ayne0x.svg' />
                <span>|</span>
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628846/chakr/options_p74ddo.svg' />
              </div>

            </div>
            <div className='customer_Info'>
              <div className="info_details">
                <img src='src\assest\images\Avatar (3).png' height="40px" width="40px"/>
                <div className="info">
                  <h4>name</h4>
                  <p>Supermarket</p>
                </div>
              </div>

              <div className="working_options wo3">
              <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628840/chakr/conversations_-_Copy_at3lzj.svg' />
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628848/chakr/star_s8cbfu.svg' />
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628842/chakr/edit_-_Copy_ayne0x.svg' />
                <span>|</span>
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628846/chakr/options_p74ddo.svg' />
              </div>
            </div>
            <div className='customer_Info'>
              <div className="info_details">
                <img src='src\assest\images\Avatar.png' height="40px" width="40px"/>
                <div className="info">
                  <h4>name</h4>
                  <p>Supermarket</p>
                </div>
              </div>

              <div className="working_options wo4">
              <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628840/chakr/conversations_-_Copy_at3lzj.svg' />
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628848/chakr/star_s8cbfu.svg' />
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628842/chakr/edit_-_Copy_ayne0x.svg' />
                <span>|</span>
                <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628846/chakr/options_p74ddo.svg' />
              </div>
            </div>

          </div>
          <div className='customer_footer'>
            <p>All customers <img src='src\assest\icons\Vector.svg' /></p>
          </div>

        </div>


        <div className="growth">
          <div className='graph'>
            <div className="graph_headers">
              <h2>Growth</h2>
              <p>Yearly</p>
            </div>
            <div className="chart">
              <Chart
                options={graphData.options}
                series={graphData.series}
                type="line"
                width="500"
                height="211"
              />
            </div>

          </div>
          <div className="performance">
            <div className="performance_details top_month">
              <h4>Top month</h4>
              <div className='top_month_values'>
                <h2>November</h2>
                <p>2019</p>
              </div>
            </div>
            <div className="performance_details top_year">
              <h4>Top year</h4>
              <div className='top_year_values'>
                <h2>2023</h2>
                <p>96K sold so far</p>
              </div>
            </div>
            <div className="performance_details top_user">
              <h4>Top user</h4>
              <div className='top_user_values'>
                <img src='src\assest\images\Avatar (1).png' width="24px" height="24px" />
                <h4>Chirs Friedkly</h4>
                <p>Oasis Organic inc</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="customersActivity">
        <div className="chats">
          <h3>Chats</h3>
          <p>2 unread messages</p>
          <div className="users">
            <div className="chat_user active_user">
              <div className='active'>
                <div className='dot'>
                </div>
              </div>
              <img src='src\assest\images\Avatar (1).png'  height="35px" width="35px"/>
            </div>
            <div className="chat_user active_user">
              <div className='active'>
                <div className='dot'>
                </div>
              </div>
              <img src='src\assest\images\Avatar (2).png'  height="35px" width="35px"/>
            </div>
            <div className="chat_user">
              <img src='src\assest\images\Avatar (3).png'  height="35px" width="35px"/>
            </div>
            <div className="chat_user">
              <img src='src\assest\images\Avatar.png'  height="35px" width="35px"/>
            </div>
          </div>
        </div>
        <div className="top_States">
          <h3>Top States</h3>
          <div className="states_Details">
            <div className="state_components" style={{ width: `${95 * 120 / 120}%` }}>
              <h4>NY</h4>
              <p>120K</p>
            </div>
            <div className="state_components" style={{ width: `${95 * 80 / 120}%` }}>
              <h4>NA</h4>
              <p>80K</p>
            </div>
            <div className="state_components" style={{ width: `${95 * 70 / 120}%` }}>
              <h4>NH</h4>
              <p>70K</p>
            </div>
            <div className="state_components" style={{ width: `${95 * 50 / 120}%` }}>
              <h4>OR</h4>
              <p>50K</p>
            </div>
          </div>
        </div>
        <div className="new_Deals">
          <h3>New Deals</h3>
          <div className="deals_Details">
            <div className="deal_components">
              <img src='src\assest\icons\plus.svg' />
              <h3>Fruit2Go</h3>
            </div>
            <div className="deal_components">
              <img src='src\assest\icons\plus.svg' />
              <h3>Marshall's MKT</h3>
            </div>
            <div className="deal_components">
              <img src='src\assest\icons\plus.svg' />
              <h3>CCNT</h3>
            </div>
            <div className="deal_components">
              <img src='src\assest\icons\plus.svg' />
              <h3>Joana Mini-market</h3>
            </div>
            <div className="deal_components">
              <img src='src\assest\icons\plus.svg' />
              <h3>Little Brazil Vegan</h3>
            </div>
            <div className="deal_components">
              <img src='src\assest\icons\plus.svg' />
              <h3>Target</h3>
            </div>
            <div className="deal_components">
              <img src='src\assest\icons\plus.svg' />
              <h3>Organic Place</h3>
            </div>
            <div className="deal_components">
              <img src='src\assest\icons\plus.svg' />
              <h3>Morello's</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody
