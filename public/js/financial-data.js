
// const startDate = document.getElementById('startDate').addEventListener('change', (event) => {});
// const endDate = document.getElementById('endDate').addEventListener('change', );
// const bitcoinUrl = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;

const bitcoinUrl = `http://api.coindesk.com/v1/bpi/historical/close.json`;


//console.log('recherche dates',startDate, endDate);
function getDataAndCreateChart(startDate, endDate){

    axios
    .get(bitcoinUrl+`?start=${startDate}&end=${endDate}`)
    .then (responseFromApi => {
        //console.log('The response from API:', responseFromApi.data);
        const dailyData = responseFromApi.data.bpi;
        const bitcoinDates = Object.keys(dailyData);
        const bitcoinPrice = bitcoinDates.map( date => dailyData[date]);
        //console.log('Mon Console Log:', bitcoinDates, bitcoinPrice)
        const ctx = document.getElementById('lineChart').getContext('2d');
        const chart = new Chart (ctx, {
            type: 'line',
            data: {
                labels: bitcoinDates,
                datasets: [{
                    label: 'Bitcoin Chart',
                    backgroundColor: 'rgb(255, 99, 132)', 
                    borderColor: 'rgb(255, 255, 255)',
                    data: bitcoinPrice
                }] 
            }
        })

    })
    .catch(err => console.log('Error while getting the data: ', err));

}

let inputStartDate = document.querySelector('#startDate');
let inputEndDate = document.querySelector('#endDate');

getDataAndCreateChart(inputStartDate.value, inputEndDate.value)

inputStartDate.onchange = function () {
    console.log('start has changed value', inputStartDate.value)
    getDataAndCreateChart(inputStartDate.value, inputEndDate.value)
}


inputEndDate.onchange = function () {
    console.log('end has changed value', inputEndDate.value)
    getDataAndCreateChart(inputStartDate.value, inputEndDate.value)
}