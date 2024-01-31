import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const Graph = () => {
    const [getDataSuccess, setGetdataSuccess] = useState(false);
    const [graphData, setGraphData] = useState("");

    useEffect(() => {
        axios.get("https://chakr-backend-gnio.onrender.com/data")
            .then((response) => {
                const { data } = response;
                console.log(response);

                if(data.data.success===false)
                throw new Error("something is wrong")

                // creating the graph data
                const newGraphData = {
                    options: {
                        chart: {
                            id: "basic-bar"
                        },
                        xaxis: {
                            categories: data.data.map(entry => entry.date)
                        }
                    },
                    series: [
                        {
                            name: "series-1",
                            data: data.data.map((entry) => {
                                return entry.avg.toFixed(2);
                            })
                        }
                    ]
                };

                setGraphData(newGraphData);
                setGetdataSuccess(true); // Change to true to indicate successful data fetch
            })
            .catch(() => {
                // Handle error
                
                setGetdataSuccess(false);
                alert('Something is wrong ,reload again')
            });

    }, []); // Empty dependency array, as we only want to run this effect once

    return (
        <div>
            {!getDataSuccess ? <h1>Loading...</h1> :
                <Chart
                    options={graphData.options}
                    series={graphData.series}
                    type="line"
                    width="500"
                    height="211"
                />
            }
        </div>
    );
}

export default Graph;
