const direita = document.querySelectorAll('.botao--right')
const esquerda = document.querySelectorAll('.botao--left')
const scrolIndicador = document.querySelectorAll('.carrossel__container')


direita.forEach(element => {
    element.addEventListener('click', (event) => {
        let scroll = element.nextElementSibling;
        scroll.scrollLeft  += 1248;
        if (element.nextElementSibling.scrollLeft >= 0) {
            element.previousElementSibling.style.display = 'block';
        }

        if (element.nextElementSibling.scrollLeft > 2300) {
            element.nextElementSibling.scrollLeft = 0;
            element.previousElementSibling.style.display = 'none';
        }
    })
})

esquerda.forEach(element => {
    element.addEventListener('click', (event) => {
        const pai = element.parentNode;
        const alvo = pai.querySelector('.carrossel__container');
        alvo.scrollLeft -= 1248;
        if (alvo.scrollLeft <= 1260) {
            element.style.display = 'none';
        }
    })

})


scrolIndicador.forEach(element =>{
    element.addEventListener('scroll',(event, scroll)=>{
        scroll = element.scrollLeft;
        indicador(event,scroll)
    })
})
 

function indicador(event, scroll) {
    const primeiro = event.target.closest('.carrossel');
    const segundo = primeiro.previousElementSibling;
    const irmao = segundo.querySelectorAll('.carrossel_titulos--btn--indicador');

    if (scroll >= 0 && scroll <= 1199) {
        irmao[2].classList.remove('carrossel_titulos--btn--indicador--3');
        irmao[1].classList.remove('carrossel_titulos--btn--indicador--2');
        irmao[0].classList.add('carrossel_titulos--btn--indicador--1');

    }

    if (scroll >= 1200 && scroll <= 1299) {
        irmao[2].classList.remove('carrossel_titulos--btn--indicador--3');
        irmao[0].classList.remove('carrossel_titulos--btn--indicador--1');
        irmao[1].classList.add('carrossel_titulos--btn--indicador--2');


    }
     if (scroll >= 1300 && scroll <= 2500) {
        irmao[1].classList.remove('carrossel_titulos--btn--indicador--2');
        irmao[2].classList.add('carrossel_titulos--btn--indicador--3');
    }

   
}
 
function hide(event){
    const pai = event.target.closest('.carrossel').previousElementSibling;
    const filho = pai.querySelector('.carrossel_titulos--btn');
    filho.style.visibility = 'hidden';
}

function show(event){
    const pai = event.target.closest('.carrossel').previousElementSibling;
    const filho = pai.querySelector('.carrossel_titulos--btn');
    filho.style.visibility = 'visible';
  
}

direita.forEach(element =>{
    element.addEventListener('mouseover',show);
})
 
direita.forEach(element =>{
    element.addEventListener('mouseleave',hide);
})

esquerda.forEach(element =>{
    element.addEventListener('mouseover',show);
})
 
esquerda.forEach(element =>{
    element.addEventListener('mouseleave',hide);
})