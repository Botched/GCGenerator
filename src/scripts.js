function onLoad() {
    var request = new XMLHttpRequest()

request.open('POST', 'https://swcodegenerator.azurewebsites.net/api/GetCode', true)

request.onload = function() { console.log(data) }

request.send()
}

window.onload = onLoad();