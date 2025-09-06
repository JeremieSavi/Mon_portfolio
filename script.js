//Sélection d'éléments 
let icone_menu=document.querySelector('.icone_menu');
let menu_hamburguer=document.querySelector('.menu_hamburguer');
let fermer_meu_hamb=document.querySelector('.menu_hamburguer:nth-child(1)')


icone_menu.addEventListener('click',()=>{
    menu_hamburguer.style.display='flex';

})
fermer_meu_hamb.addEventListener('click',function(e){
    e.preventDefault()
})