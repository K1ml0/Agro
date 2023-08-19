const color = document.getElementById('login');

function ir(){
   var c = 12345;
   var u = "jd.alzate29@ciaf.edu.co";
   var u1 = "jd.carvajal26@ciaf.edu.co";
   var u2 = "j.londono01@ciaf.edu.co";
   var u3 = "e.sanchez28@ciaf.edu.co";
   var tipo = "Comprador"
   if(u != "" && c != ""){
      if(document.form.password.value == c && document.form.login.value == u&& document.form.tipo.value == tipo){
         color.style.boxShadow="0 0 10px green, 0 0 40px green, 0 0 80px green";
         window.location="agro.html";
    
       }else if(document.form.password.value == c && document.form.login.value == u1 && document.form.tipo.value == tipo){
         color.style.boxShadow="0 0 10px green, 0 0 40px green, 0 0 80px green";
         window.location="agro.html";
    
       }else if(document.form.password.value == c && document.form.login.value == u2 && document.form.tipo.value == tipo){
         color.style.boxShadow="0 0 10px green, 0 0 40px green, 0 0 80px green";
         window.location="agro.html";
    
       }
       else if(document.form.password.value == c && document.form.login.value == u3 && document.form.tipo.value == tipo){
         color.style.boxShadow="0 0 10px green, 0 0 40px green, 0 0 80px green";
         window.location="agro.html";
    
       }
       else{
         color.style.boxShadow="0 0 10px red, 0 0 40px red, 0 0 80px red";
         alert("ERROR en usuario o contraseña, intentalo de nuevo")
      }
   }
 
}
function redi(){
   window.location="agro.html";

}