const getDates = () => {

    document.getElementsByClassName('.fromTo').addEventListener('input', event => {
        event.preventDefault(); // <= !!! Prevent the refresh
        console.log('form submit');
        let dateStart = document.getElementsByClassName('.from').value;
        let dateEnd = document.getElementsByClassName('.to').value;
        let urlApi = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${dateStart}&end=${dateEnd}`;
        // (1) getting the data using the GET request
        axios
            .get(urlApi)
            .then(responseFromAPI => {
                console.log(responseFromAPI);
                printTheChart(responseFromAPI); // <== call the function here where you used to console.log() the response
            })
            .catch(err => console.log('Error while getting the data: ', err));
    });

};

getDates();


function printTheChart(stockData){
    const monthlyData = stockData['data'];
    console.log(monthlyData);
    
    const stockDates = monthlyData['bpi']
    console.log(stockDates);
    
    const dates = Object.keys(stockDates)
    console.log(dates);
    
    const prices = dates.map(date => stockDates[date])
    console.log(prices);
    
    const ctx = document.getElementById('my-chart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Bitcoin Price Index',
                    backgroundColor: 'rgb(220,220,220, 0.5)',
                    borderColor: 'rgb(169,169,169)',
                    data: prices
                }
            ]
            }
    })
}










