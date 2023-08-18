let isToggled;
const toggleButton = (buttonName) => {
  let buttonElement = document.querySelector(buttonName)
  if(!buttonElement.classList.contains('isToggled')) {
    if(document.querySelector('.isToggled')) {
      document.querySelector('.isToggled').classList.add('hero__rating-btn')
      document.querySelector('.isToggled').classList.remove('isToggled')
    }
    buttonElement.classList.add('isToggled')
    buttonElement.classList.remove('hero__rating-btn')
    return isToggled = true
  } else {
    buttonElement.classList.remove('isToggled')
    buttonElement.classList.add('hero__rating-btn')
    return isToggled = false
  }
}

const submitBtn = document.querySelector('.hero__submit-btn')

submitBtn.addEventListener('click', () => {
  const html = document.querySelector('section')
  if(isToggled) {
    let rating = document.querySelector('.isToggled').innerText
    html.innerHTML = `
    <div class="response__logo">
    <img src="images/illustration-thank-you.svg">
  </div>

  <div class="response__result">
    You selected ${rating} out of 5
  </div>
  <h1 class="response__title">Thank you!</h1>
  <p class="response__description">
    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
  </p>
    `
  }
})
