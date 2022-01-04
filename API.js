function Linkar() {
  //Váriáveis
  let txt1 = document.getElementById('txt1').value
  let txt2 = document.getElementById('txt2').value
  let txt3 = document.getElementById('txt3').value
  var url = 'https://prog-bolsas-api.herokuapp.com/'
  var realizarPedicaoApiLeo = new XMLHttpRequest()
  realizarPedicaoApiLeo.open('POST', url)

  realizarPedicaoApiLeo.setRequestHeader('Accept', 'application/json')
  realizarPedicaoApiLeo.setRequestHeader('Content-Type', 'application/json')
  //FUnction
  realizarPedicaoApiLeo.onreadystatechange = function () {
    if (realizarPedicaoApiLeo.readyState === 4) {
      console.log(realizarPedicaoApiLeo.status)
      console.log(realizarPedicaoApiLeo.responseText)
    }
  }
  let data = JSON.stringify({
    Usuário: `${txt1}`,
    endereçoEmail: `${txt2}`,
    Comentário: `${txt3}`,
  })
  realizarPedicaoApiLeo.send(data)
}
