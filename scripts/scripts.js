

const modalOverlay = document.querySelector('.modal-overlay') //Selecionando o elemento do modal
const cards = document.querySelectorAll('.card')//Selecionando todos os elementos com classe card
const modalContent = document.querySelector(".modal-content")
// A ideia agora é selecionar todos os elementos
for (let card of cards) {
    card.addEventListener("click", function(){
        const imgId = card.getAttribute("id")
        const name = card.querySelector(".dish-name").textContent
        const dish = card.querySelector(".dish-author").textContent
        const h2Modal = document.createElement("h2")
        const pModal = document.createElement("p")
        const closeModal = document.createElement("h6")
        
        
        h2Modal.innerText = name
        pModal.innerHTML = dish
        closeModal.innerHTML = "fechar"
        
        
        modalContent.appendChild(h2Modal)
        modalContent.appendChild(pModal)
        modalContent.appendChild(closeModal)

        document.querySelector("h6").setAttribute("class", "fechaModal")
        
        modalOverlay.classList.add("active")
    
       
        
        
        //Pegando imagem
        modalContent.querySelector("img").src = `/layouts/assets/${imgId}.png`
        

        /*Removendo a classe active e portanto escondendo o modal*/
        document.querySelector(".fechaModal").addEventListener("click", function(){
            modalOverlay.classList.remove("active")
            modalContent.removeChild(h2Modal)
            modalContent.removeChild(pModal)
            modalContent.removeChild(closeModal)
            
        })
    })

}




