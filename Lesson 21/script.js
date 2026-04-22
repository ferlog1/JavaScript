let matn = "   aLISHER   ";
let tozaMatn = matn.trim();
let natija = tozaMatn.charAt(0).toUpperCase() + tozaMatn.slice(1).toLowerCase();
console.log(natija); 



let email = "test@gmail.com";
let isEmailValid = 
    email.includes("@") &&              
    email.includes(".") &&                
    !email.includes(" ") &&              
    email.indexOf("@") !== 0 &&           
    email.indexOf("@") < email.length - 1;
console.log(isEmailValid); 



let telefon = "+998 (90) 123-45-67";
let tozaTelefon = telefon.replace(/[()\-\s]/g, "");
console.log(tozaTelefon);