const ChartJSImage = require('chart.js-image');
const atob = require('atob');

function dataURItoBinary(dataURI) {
    const base64Index = dataURI.indexOf(',') + 1;

    const base64String = dataURI.substring(base64Index);

    const binaryString = atob(base64String);

    return binaryString;
}

exports.main = async (args) => {
    const chartData = args

    const returnType = args.returnType || 'binary';

    const barChart = ChartJSImage()
        .chart(chartData)
        .backgroundColor('white')
        .width(500)
        .height(300);

    let url = null;
    let dataURI = null;
    let binary = null;

    let responseData = {}

    if(returnType === 'url') {
        url =  barChart.toURL();

        responseData = {
            url: url
        }
    }

    if(returnType === 'binary') {
        dataURI = await barChart.toDataURI();
        binary = dataURItoBinary(dataURI);

        responseData = {
            binary: binary
        }
    }

    if (returnType === 'dataURI' && !dataURI) {
        dataURI = await barChart.toDataURI();

        responseData = {
            dataURI: dataURI
        }
    }

    return {"body": responseData}
  }

