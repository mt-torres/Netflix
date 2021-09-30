const mostraInput = document.querySelector('.icon-search')
const input = document.querySelector('.navegacao-2__objeto--input')
const search = document.querySelector('.search')
const closeSearch = document.querySelector('.icon-close')

mostraInput.addEventListener('click', ()=>{
    search.classList.add('search--shown');
    input.style.display = 'flex'
    setTimeout(()=>{
        input.classList.add('navegacao-2__objeto--input--shown');

    },1)
    input.focus();
})

input.addEventListener('keyup',()=>{
    if(!input.value==''){
        closeSearch.classList.add('icon-close--shown');
    }else{
        closeSearch.classList.remove('icon-close--shown');
    }
})

closeSearch.addEventListener('click', ()=>{
    input.value='';
    input.focus();
    closeSearch.classList.remove('icon-close--shown');
})

input.addEventListener('blur', ()=>{
    if(input.value==''){
    search.classList.remove('search--shown');
    input.style.display = 'none'
    input.value='';
    input.classList.remove('navegacao-2__objeto--input--shown');
    closeSearch.classList.remove('icon-close--shown');
    }
})

const scrollBlack = document.querySelector('.container__navegacao');

addEventListener('scroll', ()=>{
    if(window.scrollY >= 100) {
        scrollBlack.classList.add('container__navegacao--escuro') 
    } else{
        scrollBlack.classList.remove('container__navegacao--escuro') 
    }
})
