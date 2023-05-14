function caller(){
    let text = document.getElementById("keyword")
    let url = 'https://http://15.164.94.18:3000?query' + text
    fetch(url)
    .then(data => data.text())
    .then((text) => {
      console.log(text)
    }).catch(function (error) {
      console.log('request failed', error)
    });
}