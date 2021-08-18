const mostraInput = document.querySelector('.fa-search')
const input = document.querySelector('.navegacao-2__objeto--input')


mostraInput.addEventListener('click', ()=>{
    input.classList.toggle('navegacao-2__objeto--input--show');
    mostraInput.style.display = 'none';
    
})


input.addEventListener('click', ()=>{
    input.classList.toggle('navegacao-2__objeto--input--show');
    mostraInput.style.display = 'flex';
    
})

const scrollBlack = document.querySelector('.container__navegacao');

addEventListener('scroll', ()=>{
    if(window.scrollY >= 100) {
        scrollBlack.classList.add('container__navegacao--escuro') 
    } else{
        scrollBlack.classList.remove('container__navegacao--escuro') 
    }
})
