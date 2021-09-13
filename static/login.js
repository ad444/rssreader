let loginform = document.getElementById('loginform');
let loginFormSubmitBtn = document.getElementById('loginFormSubmitBtn');

loginFormSubmitBtn.addEventListener('click',()=>{
    loginform.submit();
    loginform.reset();
})

//avoids form resubmission
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}