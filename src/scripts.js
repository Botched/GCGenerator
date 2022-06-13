function onLoad() {
//     var request = new XMLHttpRequest()

// request.open('POST', 'https://swcodegenerator.azurewebsites.net/api/GetCode', true)

// request.onload = function() { console.log(data) }

// request.send()


const url = "https://swcodegenerator.azurewebsites.net/api/GetCode";
fetch(url)
  .then(
    response => response.text() // .json(), .blob(), etc.
  ).then(
    text => console.log(text) // Handle here
  );


}

window.onload = onLoad();