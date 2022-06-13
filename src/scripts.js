function onLoad() {
    const userAction = async () => {
    const response = await fetch('https://swcodegenerator.azurewebsites.net/api/GetCode');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    }
}

window.onload = onLoad;