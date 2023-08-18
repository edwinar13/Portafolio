
const btnsSkill = document.querySelectorAll('.btn-skill');
const cards = document.querySelectorAll('.card-skill');

/** muestra las card seleccionadas */
btnsSkill.forEach(btnSkill => {
  btnSkill.addEventListener('click', () => {
    hideCardBtn()
    btnSkill.classList.add(`btn-skill-selected`);

    var nameBtn = btnSkill.getAttribute("id")    
    var groupSkill =''
    if(nameBtn == "btn-1"){
      groupSkill  ='.destock'
    }else if(nameBtn == "btn-2"){
      groupSkill  ='.web'      
    }else if(nameBtn == "btn-3"){
      groupSkill  ='.mobile'      
    }else if(nameBtn == "btn-4"){
      groupSkill  ='.hardware'      
    }else if(nameBtn == "btn-5"){
      groupSkill  ='.db'      
    }else if(nameBtn == "btn-6"){
      groupSkill  ='.tool'      
    } else if(nameBtn == "btn-7"){
      viewAllCards();     
      return;
    }else{
      return;
    }
    const cardsSelected = document.querySelectorAll(groupSkill);
    console.log(cardsSelected)
    cardsSelected.forEach(cardVisible => {      
      cardVisible.classList.toggle("card-skill-show")
    });
  });
});


/** muestra todas la card */
function viewAllCards(){
  btnsSkill.forEach(btn => {
    btn.classList.remove(`btn-skill-selected`);
  });
  cards.forEach(card => {
    card.classList.remove("card-skill-show")
    card.classList.remove("card-skill-hide")
  });
};

/** Oscurece la card no seleccionadas */
function hideCardBtn() {
  btnsSkill.forEach(btn => {
    btn.classList.remove(`btn-skill-selected`);
  });
  cards.forEach(card => {
    card.classList.remove("card-skill-show")
    card.classList.add("card-skill-hide")
  });
};


