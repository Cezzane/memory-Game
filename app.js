document.addEventListener('DOMContentLoaded',() => {
    //card optios
    const cardArray=[
        {
            name:'lex',
            img:'images/lex.png'
        },
        {
            name:'mask',
            img:'images/mask.png'
        },
        {
            name:'poo',
            img:'images/poo.png'
        },
        {
            name:'samurai',
            img:'images/samurai.png'
        },
        {
            name:'skeleton',
            img:'images/skeleton.png'
        },
        {
            name:'blueDemon',
            img:'images/blueDemon.png'
        },{
            name:'lex',
            img:'images/lex.png'
        },
        {
            name:'mask',
            img:'images/mask.png'
        },
        {
            name:'poo',
            img:'images/poo.png'
        },
        {
            name:'samurai',
            img:'images/samurai.png'
        },
        {
            name:'skeleton',
            img:'images/skeleton.png'
        },
        {
            name:'blueDemon',
            img:'images/blueDemon.png'
        },
        
    ]
    cardArray.sort(()=>0.5-Math.random())
    const grid=document.querySelector('.grid');
    const resultDisplay=document.querySelector('#result')
    var cardsChosen=[];
    var cardsChosenId=[];
    var cardsWon=[];
//create game board 
function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        var card=document.createElement('img')
        card.setAttribute('src','images/upside.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch(){
    var cards=document.querySelectorAll('img');
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
    else if(cardsChosen[0]===cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src','images/black.png')
        cards[optionTwoId].setAttribute('src','images/black.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/upside.png')
        cards[optionTwoId].setAttribute('src','images/upside.png')
        alert('Try again')

    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent='Congratulations you won!'
    }
}
//flip the card 
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }
createBoard()
})
