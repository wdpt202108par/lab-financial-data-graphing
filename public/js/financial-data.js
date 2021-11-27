//Iteration 1 : AXIOS REQUEST
axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
  .then(function (response) {
    console.log('data=', response.data.bpi);
    printTheChart(response.data)
  })
  .catch(err => console.log('error = ', err))

//Iteration 2 : CHART
function printTheChart(stockData) {
  const dailyData = stockData.bpi;
 
  // extract infos
  const stockDates = Object.keys(dailyData);
  const stockPrices = Object.values(dailyData);
 
  // draw chart
  const ctx = document.getElementById('my-chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockDates,
      datasets: [
        {
          label: 'Stock Chart',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: stockPrices
        }
      ]
    }
  });
} 