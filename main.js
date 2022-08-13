let numberContainer = document.querySelector('.rating-start__number-container');
let rateNumber = document.querySelector('.thankyou-state__result--random-number');
let submitButton = document.querySelector('.rating-start__submit-button');
let ratingState = document.querySelector('.rating-start');
let thankyouState = document.querySelector('.thankyou-state');

numberContainer.addEventListener('click', event=> {
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    console.log(numberSelected)
    if (numberSelected > 0 || numberSelected <= 5) {
        submitButton.addEventListener('click', ()=> {
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex'
        })
    }
})