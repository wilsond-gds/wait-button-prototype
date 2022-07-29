

function disableFormSubmit(){
console.log('need to check what this does');
}

function submitSpinner() {
    
    // currently assumes one form and one button
    // multiple forms - unlikely?
    // multiple buttons - apply different styling to the buttons that weren't clicked?

      const actionMessage = "Please wait…";

      var formTarget = document.querySelector('form');
      var formButtonTarget = document.querySelector('form > button');
      var formButtonTextTarget = document.querySelector('form > button > span');

      formTarget.addEventListener('submit', function (event) {
      console.log('clicked');
      event.preventDefault(); // for testing
            formButtonTarget.classList.add('button--spinner');
            formButtonTarget.setAttribute('aria-live', 'polite')
            formButtonTextTarget.textContent = actionMessage;
            formButtonTarget.disabled = true;
            setInterval(()=>{formButtonTextTarget.textContent = "Still working…"},6000) // 6 seconds allows voice over to complete reading the text before updating the button
      })
    }

    submitSpinner()
