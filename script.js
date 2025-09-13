//Sélection d'éléments 
let icone_menu=document.querySelector('.icone_menu');
let menu_hamburguer=document.querySelector('.menu_hamburguer');
let fermer_meu_hamb=document.querySelector('.menu_hamburguer:nth-child(1)')


icone_menu.addEventListener('click',()=>{
    menu_hamburguer.style.display='flex';

})
// fermer_meu_hamb.addEventListener('click',function(e){
//     e.preventDefault()
// });

//Script pour le circular bar
const number1=document.querySelector('#number1');
const number2=document.querySelector('#number2');
const number3=document.querySelector('#number3');

const cercle_progress=document.querySelector('.skill');

const array_pourcentage=['90','80','75'];
let counter=0;
const id=setInterval(()=>{ 
    if(counter==90){
        clearInterval(id); 
    }else{
        counter++;
        number1.textContent=`${counter}%`;
    }
   
    },20);

//2
let counter2=0;
const id2=setInterval(()=>{ 
    if(counter2==80){
        clearInterval(id2); 
    }else{
        counter2++;
        number2.textContent=`${counter2}%`;
    }
   
    },20);

 let counter3=0;
const id3=setInterval(()=>{ 
    if(counter3==75){
        clearInterval(id3); 
    }else{
        counter3++;
        number3.textContent=`${counter3}%`;
    }
   
    },20);   



  //Vérification des champs du formulaire
  
  const formulaire=document.querySelector('form');
  const inputs=document.querySelectorAll('input,textarea');
  


  formulaire.addEventListener('submit',(e)=>{
    e.preventDefault();
    // if(input_prenom.value==='' ){
    //     input_prenom.style.borderColor='2px solid red'
    // };
    // if(input_nom.value==='' ){
    //     input_nom.style.borderColor='2px solid red'
    // };
    // if(input_sujet.value==='' ){
    //     input_sujet.style.borderColor='2px solid red'
    // };
    // if(the_textarea.value==='' ){
    //     the_textarea.style.border='2px solid red'
    // };

    let allvalid=true;

    inputs.forEach(input =>{
        if(input.value.trim()===''){
            input.classList.add('invalid');
            input.classList.remove('valid');
            allvalid=false;

        }else{
            input.classList.add('valid');
            input.classList.remove('invalid');
            

        }
        if(allvalid){
            alert('Formulaire envoyé');         
            formulaire.reset();
            inputs.forEach(input =>{
                input.classList.remove('valid')
            })
        }
    })


  })



