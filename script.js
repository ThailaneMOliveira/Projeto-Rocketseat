function toggleMode(){
  const html = document.documentElement
/*
  if(html.classList.contains('light')){
    html.classList.remove('light')
    }
    else {
      html.classList.add('light')
    }
  }
  */

html.classList.toggle('light')

//pegar a tag img
const img= document.querySelector('#profile img')

//substituir a imagem
if(html.classList.contains('light')){
  //se tiver light mode, manter a imagem light
  img.setAttribute("src", "./assets/avatar-light.png")}
  
  else {

    // se tiver sem light mode, manter imagem normal
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo")
  }

  {
    if(html.classList.contains('light')){
  //se tiver light mode, manter a imagem light
  img.setAttribute(
    "alt",
    "Foto de Mayk Brito sorrindo, usando óculos escuro e camisa e jaqueta preta, sem barba e fundo azul"
  )}
  
  else{

    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src","./assets/avatar.png")
  }
  }
}