console.log("index js is successfully loaded");
let linktologinForm = document.getElementsByClassName('linktologinForm');

const call = () =>{
   Array.from(linktologinForm).forEach((element)=>{
      element.submit();
      element.reset();
   });
}

//avoids form resubmission
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}