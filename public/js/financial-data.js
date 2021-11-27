
//server client
/* Iteration 1 : GET the data - Axois request URL */
axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-10-27&end=2021-11-26`)
.then(responseAPI => {
console.log('Response from API is: ', responseAPI.data);
})
.catch(err=> {
console.log('Error! Axios get failed error');
})

//iteration 3  (select, input)
const inputFrom = document.getElementById('date-from')
const inputTo = document.getElementById('date-to')
inputFrom.onchange = function (event){
    console.log('HELLO this is the inputFrom')

    // redessiner mon chart avec la date from et to modifier
    let from = '2021-06-11';
    let to = '2021-11-27';
    getDataAndCreateChart(from, to)

}

inputTo.onchange = function (event){

    // redessiner mon chart avec la date from et to modifier
    console.log('HELLO this is the inputTo')
}

//iteration 2
function getDataAndCreateChart(from, to){
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${from}&end=${to}`)
.then (responseChart =>{
    printTheChart(responseChart.data);
})
.catch (err =>{
    console.log('Error! chart printing error====>',{err});
})
}


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
let from = '2021-06-11';
let to = '2021-11-27';


getDataAndCreateChart(from, to)
