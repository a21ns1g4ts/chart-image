const ChartJSImage = require('chart.js-image');

exports.main = async (args) => {
    const data = args

    const barChart = ChartJSImage()
        .chart(data)
        .backgroundColor('white')
        .width(500)
        .height(300);

        const dataURI = await barChart.toDataURI();

    return {"body": {
        data: {
            url: barChart.toURL(),
            dataURI: dataURI
        }
    }}
  }

