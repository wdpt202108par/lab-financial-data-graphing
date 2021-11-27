console.log('coucou')
/*
const getdata = valueBitcoin => axios.get('https://web.archive.org/web/20191106152143/https://www.coindesk.com/api')
.then(function (response){
    console.log('data=', response.data)
    // extrait des datas
const valuedata = response.data
.catch(err => console.log(err))

})
*/

const getData = dataName => {
    axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(response => {
        printTheChart(response.data);
        console.log('Response from API is: ', response);
      })
      .catch(err => console.log(err));
  };

  getData();
  
// construction du graph
const stockDollar =
  function (stockDatas){

    const dolars =
    const ctx = document.getElementById('my-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type:'line',
      data: {
          labels: stockDatas,
          datasats: [
              {
                  label: 'Bitcoin Price Index',
                  backgroundColor: 'rgb(15, 5, 107)',
                  boderColor: 'rgb(15, 5, 107)',
                  data:
              }
          ]
      }
  })
}

  