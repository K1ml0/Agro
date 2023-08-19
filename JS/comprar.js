const imagen = document.getElementById('img_cop');
const out = document.getElementById('co');
const findo_img = document.getElementById('imh_ag');




function salir(){
    out.style.transform="translate(-2000px)";


}

function agrandar(){
   out.style.position="absolute"
    out.style.transform="translate(2000px)";
    findo_img.style.height="350px";
    findo_img.style.widows="100px";
    findo_img.style.top="100px";
    findo_img.style.left="30%";
  
}

