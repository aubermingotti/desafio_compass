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

function findBreedImage() {
  let imgsrc = ''
  var breed = document.getElementById('inputTeste').value
  let dogApiUrl = 'https://dog.ceo/api/breed/' + breed + '/images/random'

  var url = dogApiUrl //Url do

  var xhttp = new XMLHttpRequest()
  xhttp.open('GET', url, true)

  xhttp.onreadystatechange = function () {
    //Função a ser chamada quando a requisição retornar do servidor
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //Verifica se o retorno do servidor deu certo

      let response = xhttp.responseText //Resposta da chama a API
      response = JSON.parse(response) //Converte String para JSON

      imgsrc = response.message //Acessa o elemento message do objeto
      //console.log(imgsrc)

      var newDogImage = document.getElementById('dogImage')

      newDogImage.src = imgsrc //Altera o caminho da imagem
      newDogImage.style.width = '500px' //Altera a largura da imagem
      newDogImage.style.height = '500px' //Altera a altura da imagem
    }
  }

  xhttp.send() //A execução do script continuará mesmo que a requisição não tenha retornado do servidor
}
