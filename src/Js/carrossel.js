const direita =document.querySelector('.botao--right')
const esquerda =document.querySelector('.botao--left')
const carrossel = document.querySelector('.carrossel__container')

direita.addEventListener('click', ()=>{
    carrossel.scrollLeft += 1248;
    console.log(carrossel.scrollLeft)
    if(carrossel.scrollLeft >= 0){
        esquerda.style.display='block'  
    }

    if(carrossel.scrollLeft > 2300){
        carrossel.scrollLeft = 0;
        esquerda.style.display='none'  
    }
})

esquerda.addEventListener('click', ()=>{
    carrossel.scrollLeft += -1248;
    
})

