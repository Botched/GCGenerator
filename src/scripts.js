function getCode()
{
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  console.log('Day of year: ' + day);
  var code = 800
  var randomnum = Math.floor(Math.random() * (80000 - 20000 + 1) + 20000)
  var valueToSet = '' + day + code + randomnum;
  document.getElementById('code').innerHTML = valueToSet;

}

function onLoad() {
//     var request = new XMLHttpRequest()

// request.open('POST', 'https://swcodegenerator.azurewebsites.net/api/GetCode', true)

// request.onload = function() { console.log(data) }

// request.send()


const url = "https://swcodegenerator.azurewebsites.net/api/GetCode";
code = "";
// fetch(url)
//   .then(
//     function(response) {return response.json()} // .json(), .blob(), etc.
//   ).then(
//     function(json) {console.log(json)
        
//         document.getElementById('code').innerHTML = json.code
//     } // Handle here
//   )

document.getElementById('code').innerHTML = getCode()
}




window.onload = getCode();