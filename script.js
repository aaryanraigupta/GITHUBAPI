 async function getData(){
    var user = document.getElementById("user").value;
    var n    = document.getElementById("n").value;;
    PieChartCreator(user,n);
    
}
async function fecthInfo(url, n) {
    
    const headers = {
        'Authorization': `Token ${n}`
    }

    const response = (n == undefined) ? await fetch(url) : await fetch(url, {
        "method": "GET",
        "headers": headers
    });

        let a = await response.json();
        return a;
}

async function PieChartCreator(user, n){
      const url = `https://api.github.com/users/${user}/repos`;
    const repoList = await fecthInfo(url,n);
    
    let a = [];
    let i=0;
    while ( i < repoList.length) 
    {
      const nameofRepo = repoList[i].name;
      const listofComm = await fecthInfo(`https://api.github.com/repos/${userName}/${repoName}/commits`,n);
      let data= { key: nameofRepo, value: listofComm.length };
      a.push(data);
      i++;
    }
    var x = [];
    data.forEach((element) => {
      x.push(element.key);
    });

    var y = [];
    data.forEach((element) => {
      y.push(element.value);
    });
    pieChart(x,y);
async function createPieGraph(metadata, datavalue){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: metadata,
          datasets: [{
              label: ' Number of Commits',
              data: datavalue,
              backgroundColor: [
                  'rgba(255, 243, 141, 0.5)',
                  'rgba(255, 243, 255, 0.5))',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(25, 192, 200, 0.5)',
                  'rgba(153, 106, 235, 0.6)',
                  'rgba(7, 189, 64, 0.1)',
              ],
             
              borderWidth: 3
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

}