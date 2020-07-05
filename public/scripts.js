


const cards = document.querySelectorAll('.card')//Selecionando todos os elementos com classe card

//  for (let card of cards) {
//      card.addEventListener("click", function(){
//          const imgId = card.getAttribute("id")//Pegando o ID do card referente à receita
//          window.location.href = `/receita?id=${imgId}`//Mandando para a página da receita

        
//     })
// }
for (let i = 0; i < cards.length; i++){
    let receitaId = i
    cards[i].addEventListener('click', function(){
        window.location.href = `/${receitaId}`

    })
}

//Criando botões de mostrar/esconder conteúdo
//pegando e armazenando os elementos
const showHideBtn = document.querySelectorAll('.showhide-bt')
const showHideCnt = document.querySelectorAll('.showhide-cont')
//Criei o for para aplicar para todos os botões
for (let i = 0; i < showHideBtn.length; i++) {
    showHideBtn[i].addEventListener('click', function(){//Adicionando eventlistener ao click
        if(showHideBtn[i].innerHTML == 'Esconder') { //Testa se o botão que eu cliquei tá escrito esconder
            showHideCnt[i].setAttribute('hidden', true)//Se tiver, esconde meu conteudo
            showHideBtn[i].innerHTML = 'Mostrar'//E muda o nome para mostrar

        } else {
            showHideCnt[i].removeAttribute('hidden', true)//Se não, revela conteúdo
            showHideBtn[i].innerHTML = 'Esconder'//Muda nome para esconder
        }

    })
}