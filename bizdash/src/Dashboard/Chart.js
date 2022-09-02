import React from "react";
import { Card } from "./Card";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = () => {
    const options = {
        title: {
          text: 'My chart'
        },
        series: [{
          data: [1, 2, 3]
        }]
      }
    return(
        <Card>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
            />
        </Card>
    )
}

export default Chart;