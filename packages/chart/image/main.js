const ChartJSImage = require('chart.js-image');

exports.main = (args) => {
    const data = args

    const barChart = ChartJSImage()
        .chart(data)
        .backgroundColor('white')
        .width(500)
        .height(300);

    return {"body": {
        data: {
            url: barChart.toURL(),
            dataURI: barChart.toDataURI()
        }
    }}
  }

