const inputFrom = document.querySelector('#inputFrom')
const inputTo = document.querySelector('#inputTo')

function requestAxios () {
    axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${inputFrom.value}&end=${inputTo.value}`)
    .then(function(response) {
        console.log('resp=', response);
        const dailyBPIData = response.data.bpi;
        const bpiDates = Object.keys(dailyBPIData);
        const bpiPrices = Object.values(dailyBPIData);

        const ctx = document.getElementById('my-chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: bpiDates,
                datasets: [{
                  label: 'Bitcoin Price Index',
                  data: bpiPrices,
                  fill: false,
                  borderColor: 'rgb(128, 128, 128)',
                  tension: 0.1
                }]
            }
        })
    })
    .catch(err => {console.log ('oops', err)})
} 

requestAxios()

inputFrom.addEventListener("change", requestAxios)
//écritures différentes mais même effet (au lieu d'appeler une fonction vide, on appelle directement la fonction qui n'a pas de paramètres)
inputTo.addEventListener("change", function() {
    requestAxios()
})


