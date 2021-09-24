let loginform = document.getElementById('loginform');
let loginFormSubmitBtn = document.getElementById('loginFormSubmitBtn');

// calling input elements
let userDetails = document.getElementsByClassName('userDetails');

loginFormSubmitBtn.addEventListener('click',()=>{
    let verified = true;
    Array.from(userDetails).forEach((elem)=>{
        if(elem.value === ""){
            elem.style.cssText = 'border:1px solid red';
            elem.className += " notVerified";
            verified = false;
        }
    })
    if(verified !== false){
        loginform.submit();
        loginform.reset();
        Array.from(userDetails).forEach((elem)=>{
            elem.style.cssText = 'border:1px solid grey';
            elem.className = "form-control userDetails";
        })
    }
})

//applying function to set input element to default CSS on focusing

Array.from(userDetails).forEach((elem)=>{
  elem.addEventListener('focus', ()=>{
      elem.style.cssText = "border: 1px solid #ced4da;";
      elem.className = "form-control userDetails";
  })
})

//avoids form resubmission
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}