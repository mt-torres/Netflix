const direita =document.querySelector('.botao--right')
const esquerda =document.querySelector('.botao--left')
const carrossel = document.querySelector('.carrossel__container')
const btnIndicador = document.querySelectorAll('.carrossel_titulos--btn--indicador')
let scrolIndicador = 0;



direita.addEventListener('click', ()=>{
    carrossel.scrollLeft += 1248;
    scrolIndicador += 1248;  
    console.log(scrolIndicador) 
    if(carrossel.scrollLeft >= 0){
        esquerda.style.display='block'  
    }
    
    if(carrossel.scrollLeft > 2300){
        carrossel.scrollLeft = 0;
        esquerda.style.display='none';
        scrolIndicador = 0; 
        console.log(scrolIndicador) 
    }
    
    indicador()


})

esquerda.addEventListener('click', ()=>{
    carrossel.scrollLeft += -1248;
    scrolIndicador -= 1248;  
    if(carrossel.scrollLeft <=1260){
        esquerda.style.display='none' 
        scrolIndicador = 0;  
    }
   
    indicador()
})

function indicador(){
    
    if(scrolIndicador == 1248){
        console.log(scrolIndicador)
        btnIndicador.forEach(element =>{
            element.classList.remove('carrossel_titulos--btn--indicador--1'); 
            element.classList.add('carrossel_titulos--btn--indicador--2');
        })
    
    }if (scrolIndicador == 2496){
        btnIndicador.forEach(element =>{
            element.classList.remove('carrossel_titulos--btn--indicador--2'); 
            element.classList.add('carrossel_titulos--btn--indicador--3');
        })
    } 

    if (scrolIndicador == 0){
        btnIndicador.forEach(element =>{
            element.classList.remove('carrossel_titulos--btn--indicador--3'); 
            element.classList.remove('carrossel_titulos--btn--indicador--2'); 
            element.classList.add('carrossel_titulos--btn--indicador--1');
        })
    } 
}

direita.addEventListener('mouseover',()=>{
    btnIndicador.forEach(element =>{
        element.style.visibility = 'visible';
    })
})

direita.addEventListener('mouseleave',()=>{
    btnIndicador.forEach(element =>{
        element.style.visibility = 'hidden';
    })
})

esquerda.addEventListener('mouseover',()=>{
    btnIndicador.forEach(element =>{
        element.style.visibility = 'visible';
    })
})

esquerda.addEventListener('mouseleave',()=>{
    btnIndicador.forEach(element =>{
        element.style.visibility = 'hidden';
    })
})