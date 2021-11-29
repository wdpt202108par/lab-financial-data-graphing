console.log('coucou')

const getData = dataName => {
    axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(response => {
        printTheChart(response.data);
        console.log('Response from API is: ', response);
      })
      .catch(err => console.log(err));
  };

getData();
  
// Construction du graphique

function printTheChart(stockDatas) {
    
  const dailyData = stockDatas['bpi'];
  const date = Object.keys(dailyData);
  const dollar = date.map(date => dailyData[date]);
    
  const ctx = document.getElementById('my-chart').getContext('2d');
  const chart = new Chart(ctx, {
    type:'line',
    data: {
         labels: date,
         datasets: [
              {
                label: 'Bitcoin Price Index',
                backgroundColor: 'rgb(108, 189, 253)',
                borderColor: 'rgb(108, 189, 253)',
                data: dollar,
              }
         ]
    }
  })
}

const startingDate = document.querySelector('#startDate');
const endingDate = document.querySelector('#endDate');

startingDate.onchange = function (event) {
  console.log('HAHAHA');
  //printTheChart(startingDate.value, endingDate.value);
}

endingDate.onchange = function (event) {
  //printTheChart(startingDate.value, endingDate.value);
} 