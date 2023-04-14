import { countries } from "./countries";

const form=()=>{

    const content = document.getElementById("content");

    const createForm=(()=>{
        const form = document.createElement("form");
        form.setAttribute("novalidate","");
        form.setAttribute("id","form");

        form.innerHTML = `
        <label for="email">E-mail: </label>
        <input type="email" required name="email" id="email">
        <span class="error" aria-live="polite"></span>
        <label for="country">Country: </label>
        ${countries()}
        <label for="zipcode">ZIPcode: </label>
        <input type="number"  required name="zipcode" id="zipcode" min="1">
        <span class="error" aria-live="polite"></span>
        <label for="password">Password: </label>
        <input type="password" required name="password" id="password" minlength="8" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$">
        <span class="error" aria-live="polite"></span>
        <label for="passwordconf">Confirm password: </label>
        <input type="password" required name="passwordconf" id="passwordconf" minlength="8" maxlength ="20">
        <span class="error" aria-live="polite"></span>
        <input type="submit" value="Submit">`

        content.appendChild(form)
    })();
    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const zipCode = document.getElementById("zipcode");
    const password = document.getElementById("password");
    const passwordconf = document.getElementById("passwordconf");


    const emailError = document.querySelector("#email + span.error");
    const zipCodeError = document.querySelector("#zipcode + span.error");
    const passwordError = document.querySelector("#password + span.error");
    const passwordconfError = document.querySelector("#passwordconf + span.error");


    const eventListeners=(()=>{

        email.addEventListener("input", (event) => {

            if (email.validity.valid) {
              emailError.textContent = "";
              email.classList.remove("error-style");

            } else {
                showError(email);
                email.classList.add("error-style");
            }
          });
          zipCode.addEventListener("input", (event) => {

            if (zipCode.validity.valid) {
              zipCodeError.textContent = "";
              zipCode.classList.remove("error-style");

            } else {
                showError(zipCode);
                zipCode.classList.add("error-style");

            }
          });
          password.addEventListener("input", (event) => {

            if (password.validity.valid) {
              passwordError.textContent = "";
              password.classList.remove("error-style");

            } else {
                showError(password);
                password.classList.add("error-style");

            }
          });
          passwordconf.addEventListener("input", (event) => {

            if (passwordconf.value === password.value) {
              passwordconfError.textContent = "";
              passwordconf.classList.remove("error-style");

            } else {
                showError(passwordconf);
                passwordconf.classList.add("error-style");

            }
          });
    
        form.addEventListener("submit", (event) => {
            if (!email.validity.valid || !zipCode.validity.valid || !password.validity.valid || !passwordconf.validity.valid) {
                showError(email);
                showError(zipCode);
                showError(password);
                showError(passwordconf);


                event.preventDefault();
            }
          });
    })();
        
    

      function showError(input){

        if(input.id === "email"){
            email.classList.add("error-style");
            if (email.validity.valueMissing) {
                emailError.textContent = "You need to enter an email address.";
              } else if (email.validity.typeMismatch) {
                emailError.textContent = "Entered value needs to be an email address.";

              }
        }
        else if(input.id === "zipcode"){
            zipCode.classList.add("error-style");
            if (zipCode.validity.valueMissing) {
                zipCodeError.textContent = "You need to enter a ZIP code.";
              } else if (zipCode.validity.typeMismatch) {
                zipCodeError.textContent = "Entered value needs to be a ZIP code.";

              }
        }
        else if(input.id === "password"){
            password.classList.add("error-style");
            if (password.validity.valueMissing) {
                passwordError.textContent = "You need to enter a password.";
              }else if (password.validity.tooShort) {
                passwordError.textContent = `Password should be at least 8 characters long.`;
              }
              else if (password.validity.patternMismatch) {
                passwordError.innerHTML = `Password should contain atleast one number<br> and one uppercase letter.`;
              }
              
        }
         else if(input.id === "passwordconf"){
            passwordconf.classList.add("error-style");
            passwordconfError.textContent = `Passwords do not match.`;

         }
      }
      
}

export {form};