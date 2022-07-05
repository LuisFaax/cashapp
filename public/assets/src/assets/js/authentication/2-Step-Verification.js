/*  This is for switching back and forth the input box for user experience */
const inputs = document.querySelectorAll('.opt-input');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keydown', function(event) {
    if (event.key === "Backspace") {

      if (inputs[i].value == '') {
        if (i != 0) {
          inputs[i - 1].focus();
        }
      } else {
        inputs[i].value = '';
      }

    } else if (event.key === "ArrowLeft" && i !== 0) {
      inputs[i - 1].focus();
    } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
      inputs[i + 1].focus();
    } else if (event.key != "ArrowLeft" && event.key != "ArrowRight") {
      inputs[i].setAttribute("type", "text");
      inputs[i].value = ''; // Bug Fix: allow user to change a random otp digit after pressing it
      setTimeout(function() {
        inputs[i].setAttribute("type", "password");
      }, 1000); // Hides the text after 1.5 sec
    }
  });
  inputs[i].addEventListener('input', function() {
    inputs[i].value = inputs[i].value.toUpperCase(); // Converts to Upper case. Remove .toUpperCase() if conversion isnt required.
    if (i === inputs.length - 1 && inputs[i].value !== '') {
        console.log(i)
        inputs[i].closest('form')
        inputs[i].closest('form').querySelector('.btn-optin-confirm').disabled = false;
      return true;
    } else if (inputs[i].value !== '') {
      inputs[i + 1].focus();
    }

    
  });

  console.log(inputs.length);

}