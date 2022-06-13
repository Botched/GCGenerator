function onLoad() {
//     var request = new XMLHttpRequest()

// request.open('POST', 'https://swcodegenerator.azurewebsites.net/api/GetCode', true)

// request.onload = function() { console.log(data) }

// request.send()


const url = "https://swcodegenerator.azurewebsites.net/api/GetCode";
code = "";
fetch(url)
  .then(
    function(response) {return response.json()} // .json(), .blob(), etc.
  ).then(
    function(json) {console.log(json)
        jsonObj = JSON.parse(json)
        document.getElementById('code').innerHTML = jsonObj.code
    } // Handle here
  )
}

window.onload = onLoad();