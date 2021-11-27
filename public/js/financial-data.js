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
        console.log('Response from API is: ', response);
      })
      .catch(err => console.log(err));
  };

  getData();
  