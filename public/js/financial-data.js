
/* Iteration 1 : GET the data - Axois request URL */
axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
.then(responseAPI => {
  console.log('Response from API is: ', responseAPI.data);
})
.catch(err=> {
  console.log('Error! Axios get failed error');
})


//iteration 2
axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
.then (responseChart =>{
    printTheChart(responseChart.data);
})
.catch (err =>{
    console.log('Error! chart printing error====>',{err});
})

function printTheChart(bitcoinData){
const dailyData = bitcoinData['bpi'];
const coinDates = Object.keys(dailyData);
  const coinPrices = Object.values(dailyData); // object.values
console.log('coinPrices ====>', coinPrices);

const ctx = document.getElementById('my-chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: coinDates,
    datasets: [{
        label: 'Bitcoin Price Index',
        data: coinPrices,
        backgroundColor:[
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }
    ]
    }
});
}
