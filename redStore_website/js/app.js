// // ------------ JS for menutoggle ---------------
// var menuItems = document.getElementById("menuItems");
// menuItems.style.maxHeight = "0px";

// function menuetoggle(){
//     if(menuItems.style.maxHeight == "0px"){
//         menuItems.style.maxHeight = "200px"
//     }else{
//         menuItems.style.maxHeight = "0px"
//     }
// }

// ------------ JS for product gallery ---------------
// var productImg = document.getElementById("productImg");
// var smallImgs = document.querySelectorAll(".smallImg");

// smallImgs.forEach((smallImg) => {
//     smallImg.addEventListener("click",()=>{
//         productImg.src = smallImg.src;
//     });
// });

// -------------------- validation for login page ---------------------
// const form_1 = document.getElementById('form-1');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// form_1.addEventListener('submit', (e) => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDiplay = inputControl.querySelector('.error');

//     errorDiplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDiplay = inputControl.querySelector('.error');

//     errorDiplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// const isValidEmail = email => {
//     const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     return re.test(String(email).toLowerCase());
// }


// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     }else if(usernameValue.length <= 2){
//         setError(username, 'Username should not be less than 2.');
//     }else{
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     }else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     }else{
//         setSuccess(email);
//     }

//     if(passwordValue === ''){
//         setError(password, 'Password is required');
//     }else if (passwordValue.length < 8) {
//         setError(password, 'Password must be atleast 8 character.');
//     }else{
//         setSuccess(password);
//     }
// };

// -------------------- validation for forgot password page --------------------

// const form_2 = document.getElementById('form-2');
// const email_forgot = document.getElementById('email_forgot');

// form_2.addEventListener('submit', (event) => {
//     event.preventDefault();

//     validateForgotInputs();
// });
// const setForgotError = (forgotelement, forgotmessage) => {
//     const inputControl = forgotelement.parentElement;
//     const errorDiplay = inputControl.querySelector('.error');

//     errorDiplay.innerText = forgotmessage;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }
// const setForgotSuccess = forgotelement => {
//     const inputControl = forgotelement.parentElement;
//     const errorDiplay = inputControl.querySelector('.error');

//     errorDiplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }
// const isValidForgotEmail = email => {
//     const refr = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     return refr.test(String(email).toLowerCase());
// }
// const validateForgotInputs = () => {
//     const forgotemailValue = email_forgot.value.trim();

//     if(forgotemailValue === '') {
//         setForgotError(email_forgot, 'Email is required');
//     }else if (!isValidForgotEmail(forgotemailValue)) {
//         setForgotError(email_forgot, 'Provide a valid email address');
//     }else{
//         setForgotSuccess(email_forgot);
//     }
// }


// ---------------------- regesteration page ------------------------

// function loginFunction(){
//     var password = document.getElementById("PasswordId").value;
//     var confirmPassword = document.getElementById("Confirm_PasswordId").value;
//     var userFname = document.getElementById("firstName").value;
//     var userLname = document.getElementById("lastName").value;
//     var userCountry = document.getElementById("countryId").value;
//     var userState = document.getElementById("stateId").value;
//     var userCity = document.getElementById("cityId").value;
//     var userPostalCode = document.getElementById("postalCodeId").value;
//     var useremail = document.getElementById("emailId").value;
//     var userPhoneNumber = document.getElementById("phoneNumberId").value;
//     var userRead_text = document.getElementById("read_textId");

//     const name_error = document.getElementById('name_error');
//     const email_error = document.getElementById('email_error');
//     const pass_error = document.getElementById('pass_error');



//     if(userFname.trim() == "" || !/^[a-zA-Z\s]*$/.test(userFname) || userFname.length < 2){
//         //for the name if not written.
//         e.preventDefault();
//         name_error.innerHTML = '*Name is required';
//     }
//       //---------------------------------------------------------------------------------
//     if(userLname.trim() == "" || !/^[a-zA-Z\s]*$/.test(userLname) || userLname.length < 2){
//         //for the name if not written.
//         e.preventDefault();
//         name_error.innerHTML = '*Name is required';
//     }
//     //-----------------------------------------------------------------------------------
//     if(useremail.trim() == "" || !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(useremail)){
//         //for the email if not written.
//         e.preventDefault();
//         email_error.innerHTML = '*Valid E-mail is required';
//     }
//     //-----------------------------------------------------------------------------------
//     if(userCountry.trim() == "" || !/^[a-zA-Z\s]*$/.test(userCountry) || userCountry.length < 2){
//         //for the name if not written.
//         e.preventDefault();
//         country_error.innerHTML = '*Country is required';
//     }
//       //---------------------------------------------------------------------------------
//     if(userState.trim() == "" || !/^[a-zA-Z\s]*$/.test(userState) || userState.length < 2){
//         //for the name if not written.
//         e.preventDefault();
//         state_error.innerHTML = '*State is required';
//     }
//     //---------------------------------------------------------------------------------
//     if(userCity.trim() == "" || !/^[a-zA-Z\s]*$/.test(userCity) || userCity.length < 2){
//         //for the name if not written.
//         e.preventDefault();
//         city_error.innerHTML = '*City is required';
//     }
//   //---------------------------------------------------------------------------------
//     if(isNaN(userPostalCode)){
//        //for phone number.
//        e.preventDefault();
//        zipcode_error.innerHTML = '*Postal-Code is required';
//     }
//       //---------------------------------------------------------------------------------
//     if(isNaN(userPhoneNumber)){
//         //for phone number.
//         e.preventDefault();
//         phone_error.innerHTML = '*Phone Number is required';
//      }
//     //-----------------------------------------------------------------------------------
//     if (!userRead_text.checked) {
//         //for checked-box
//         e.preventDefault();
//         ticked_error.innerHTML = '*You have not agreed to the "Terms and Condition" Do you want to proceed?';
//     }
//     //-----------------------------------------------------------------------------------
//         if(password != confirmPassword){
//         e.preventDefault();
//         pass_error.innerHTML = '*Password do not matched, Please try Again';
// }
// }


// //   ------------------------ cart page js ---------------------------


