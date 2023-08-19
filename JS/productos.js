const atras = document.getElementById('atras');
const delante = document.getElementById('delante');
const opc = document.getElementById('menu');

var contador =0;
var contador2 =0;



const prod_1 = document.getElementById('producto_1');
const producto_2 = document.getElementById('producto_2');
const producto_3 = document.getElementById('producto_3');
const producto_4 = document.getElementById('producto_4');

const producto_5 = document.getElementById('producto_5');
const producto_6 = document.getElementById('producto_6');
const producto_7 = document.getElementById('producto_7');
const producto_8 = document.getElementById('producto_8');

const producto_9 = document.getElementById('producto_9');
const producto_10 = document.getElementById('producto_10');
const producto_11 = document.getElementById('producto_11');
const producto_12 = document.getElementById('producto_12');

const producto_13 = document.getElementById('producto_13');
const producto_14 = document.getElementById('producto_14');
const producto_15 = document.getElementById('producto_15');
const producto_16 = document.getElementById('producto_16');

const producto_17 = document.getElementById('producto_17');
const producto_18 = document.getElementById('producto_18');
const producto_19 = document.getElementById('producto_19');
const producto_20 = document.getElementById('producto_20');


const producto_21 = document.getElementById('producto_21');
const producto_22 = document.getElementById('producto_22');
const producto_23 = document.getElementById('producto_23');
const producto_24 = document.getElementById('producto_24');

const producto_25 = document.getElementById('producto_25');
const producto_26 = document.getElementById('producto_26');
const producto_27 = document.getElementById('producto_27');
const producto_28 = document.getElementById('producto_28');


const producto_29 = document.getElementById('producto_29');
const producto_30 = document.getElementById('producto_30');
const producto_31 = document.getElementById('producto_31');
const producto_32 = document.getElementById('producto_32');

const img1 = document.getElementById('img_1');
const img2 = document.getElementById('img_2');
const img3 = document.getElementById('img_3');
const img4 = document.getElementById('img_4');
const img5 = document.getElementById('img_5');
const img6 = document.getElementById('img_6');
const img7 = document.getElementById('img_7');
const img8 = document.getElementById('img_8');
const img9 = document.getElementById('img_9');
const img10 = document.getElementById('img_10');
const img11 = document.getElementById('img_11');
const img12 = document.getElementById('img_12');
const img13 = document.getElementById('img_13');
const img14 = document.getElementById('img_14');
const img15 = document.getElementById('img_15');
const img16 = document.getElementById('img_16');

const In_img1 = document.getElementById('In_img_1');
const In_img2 = document.getElementById('In_img_2');
const In_img3 = document.getElementById('In_img_3');
const In_img4 = document.getElementById('In_img_4');
const In_img5 = document.getElementById('In_img_5');
const In_img6 = document.getElementById('In_img_6');
const In_img7 = document.getElementById('In_img_7');
const In_img8 = document.getElementById('In_img_8');
const In_img9 = document.getElementById('In_img_9');
const In_img10 = document.getElementById('In_img_10');
const In_img11 = document.getElementById('In_img_11');
const In_img12 = document.getElementById('In_img_12');
const In_img13 = document.getElementById('In_img_13');
const In_img14 = document.getElementById('In_img_14');
const In_img15 = document.getElementById('In_img_15');
const In_img16= document.getElementById('In_img_16');

const info_1= document.getElementById('info_1');
const info_2= document.getElementById('info_2');
const info_3= document.getElementById('info_3');
const info_4= document.getElementById('info_4');
const info_5= document.getElementById('info_5');
const info_6= document.getElementById('info_6');
const info_7= document.getElementById('info_7');
const info_8= document.getElementById('info_8');

const info_9= document.getElementById('info_9');
const info_10= document.getElementById('info_10');
const info_11= document.getElementById('info_11');
const info_12= document.getElementById('info_12');
const info_13= document.getElementById('info_13');
const info_14= document.getElementById('info_14');
const info_15= document.getElementById('info_15');
const info_16= document.getElementById('info_16');

const info_17= document.getElementById('info_17');
const info_18= document.getElementById('info_18');
const info_19= document.getElementById('info_19');
const info_20= document.getElementById('info_20');
const info_21= document.getElementById('info_21');
const info_22= document.getElementById('info_22');
const info_23= document.getElementById('info_23');
const info_24= document.getElementById('info_24');
const info_25= document.getElementById('info_25');
const info_26= document.getElementById('info_26');
const info_27= document.getElementById('info_27');
const info_28= document.getElementById('info_28');
const info_29= document.getElementById('info_29');
const info_30= document.getElementById('info_30');
const info_31= document.getElementById('info_31');
const info_32= document.getElementById('info_32');





function rotar(variable, translate, rotate, rotatey, rotatex, rotatez, tiempo){
    variable.style.transform=`translate(${translate}px) rotate(${rotate}deg) rotateY(${rotatey}deg) rotateX(${rotatex}deg) rotateZ(${rotatez}deg)`;  
    variable.style.transition=tiempo;

}
function on(){
    opc.style.position="absolute";
    opc.style.transform="translate(0px)";
    
}
function cerrar(){
    opc.style.position="absolute";
    opc.style.transform="translate(-1000px)";
}


function creador(variable,img,  color, top,  left, width, height, wh_img, gh_img){
    variable.style.width=width;
    variable.style.height=height;
    variable.style.background= color;
    variable.style.left=left
    variable.style.top=top
    variable.style. position="absolute";
    img.style.width=wh_img;
    img.style.height=gh_img;


  
    
}


const des = -1000;
const punto_inicio = 0;

function cara_1(entrada){
 
     if(entrada == true){
        info_5.style.transform="translate(-1000px)";
        info_6.style.transform="translate(-1000px)";
        info_7.style.transform="translate(-1000px)";
        info_8.style.transform="translate(-1000px)";
        info_9.style.transform="translate(-1000px)";
        info_10.style.transform="translate(-1000px)";
        info_11.style.transform="translate(-1000px)";
        info_12.style.transform="translate(-1000px)";
        info_13.style.transform="translate(-1000px)";
        info_14.style.transform="translate(-1000px)";
        info_15.style.transform="translate(-1000px)";
        info_16.style.transform="translate(-1000px)";
     
      

        creador(prod_1, img1, "rgb(82, 113, 255)", "60px", "70px", "250px", "350px", "240px", "150px");
        creador(producto_2, img2,  "rgb(82, 113, 255)", "60px", "340px", "250px", "350px", "240px", "170px");
        creador(producto_3, img3, "rgb(82, 113, 255)", "60px", "610px", "250px", "350px", "240px", "150px");
        creador(producto_4, img4, "rgb(82, 113, 255)", "60px", "880px", "250px", "350px", "250px", "160px");
     

        creador(producto_5, img5, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_6, img6,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_7, img7,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_8, img8,"", "0px", "0px", "0px", "0px", "0px", "0px");

        creador(producto_9,img9,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_10,img10, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_11,img11, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_12,img12, "", "0px", "0px", "0px", "0px", "0px", "0px");

        creador(producto_13,img13,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_14,img14,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_15,img15,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_16,img16,"", "0px", "0px", "0px", "0px", "0px", "0px");



     }else if(entrada == false){
        creador(prod_1, img1, info_1, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_2, img2,  "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_3, img3, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_4, img4, "", "0px", "0px", "0px", "0px", "0px", "0px");
    
 

     } 

}

function cara2(entrada){
    if(entrada == true){
        creador(producto_5, img5, "rgb(82, 113, 255)", "60px", "70px", "250px", "350px", "200px", "160px");
        creador(producto_6, img6,"rgb(82, 113, 255)", "60px", "340px", "250px", "350px", "100px", "160px");
        creador(producto_7, img7,"rgb(82, 113, 255)", "60px", "610px", "250px", "350px", "200px", "160px");
        creador(producto_8, img8,"rgb(82, 113, 255)", "60px", "880px", "250px", "350px", "200px", "130px");
    }else if(entrada == false){
        creador(producto_5, img5, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_6, img6,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_7, img7,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_8, img8,"", "0px", "0px", "0px", "0px", "0px", "0px");
     
    } 
}
function cara3(entrada){
    if(entrada == true){
        creador(producto_9,img9, "rgb(82, 113, 255)", "60px", "70px", "250px", "350px", "200px", "160px");
        creador(producto_10,img10, "rgb(82, 113, 255)", "60px", "340px", "250px", "350px", "200px", "160px");
        creador(producto_11,img11, "rgb(82, 113, 255)", "60px", "610px", "250px", "350px", "200px", "160px");
        creador(producto_12,img12, "rgb(82, 113, 255)", "60px", "880px", "250px", "350px", "200px", "150px");
    }else if(entrada == false){
        creador(producto_9,img9, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_10,img10, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_11,img11, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_12,img12, "", "0px", "0px", "0px", "0px", "0px", "0px");
     
    } 
}
function cara4(entrada){
    if(entrada == true){
        creador(producto_13,img13, "rgb(82, 113, 255)", "60px", "70px", "250px", "350px", "200px", "160px");
        creador(producto_14,img14, "rgb(82, 113, 255)", "60px", "340px", "250px", "350px", "220px", "160px");
        creador(producto_15,img15, "rgb(82, 113, 255)", "60px", "610px", "250px", "350px", "200px", "160px");
        creador(producto_16,img16, "rgb(82, 113, 255)", "60px", "880px", "250px", "350px", "200px", "200px");
    }else if(entrada == false){
        creador(producto_13,img13, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_14,img14, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_15,img15, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_16,img16, "", "0px", "0px", "0px", "0px", "0px", "0px");
       
    } 
}












function cara5(entrada){
    if(entrada == true){
        info_17.style.transform="translate(0px)";
        info_18.style.transform="translate(0px)";
        info_19.style.transform="translate(0px)";
        info_20.style.transform="translate(0px)";
        info_21.style.transform="translate(-1000px)";
        info_22.style.transform="translate(-1000px)";
        info_23.style.transform="translate(-1000px)";
        info_24.style.transform="translate(-1000px)";
        info_25.style.transform="translate(-1000px)";
        info_26.style.transform="translate(-1000px)";
        info_27.style.transform="translate(-1000px)";
        info_28.style.transform="translate(-1000px)";
        info_29.style.transform="translate(-1000px)";
        info_30.style.transform="translate(-1000px)";
        info_31.style.transform="translate(-1000px)";
        info_32.style.transform="translate(-1000px)";
   
        
        creador(producto_21,In_img5, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_22,In_img6, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_23,In_img7, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_24,In_img8, "", "0px", "0px", "0px", "0px", "0px", "0px");

        creador(producto_25,In_img9,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_26,In_img10, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_27,In_img11,"", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_28,In_img12, "", "0px", "0px", "0px", "0px", "0px", "0px");

        creador(producto_29,In_img13, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_30,In_img14, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_31,In_img15, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_32,In_img16, "", "0px", "0px", "0px", "0px", "0px", "0px");


        creador(producto_17,In_img1, "rgb(82, 113, 255)", "600px", "70px", "250px", "350px", "200px", "160px");
        creador(producto_18,In_img2, "rgb(82, 113, 255)", "600px", "340px", "250px", "350px", "200px", "160px");
        creador(producto_19,In_img3, "rgb(82, 113, 255)", "600px", "610px", "250px", "350px", "200px", "160px");
        creador(producto_20,In_img4, "rgb(82, 113, 255)", "600px", "880px", "250px", "350px", "200px", "160px");
    }else if(entrada == false){
        creador(producto_17,In_img1, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_18,In_img2, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_19,In_img3, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_20,In_img4, "", "0px", "0px", "0px", "0px", "0px", "0px");

    } 
}

function cara6(entrada){
    if(entrada == true){
        creador(producto_21,In_img5, "rgb(82, 113, 255)", "600px", "70px", "250px", "350px", "200px", "160px");
        creador(producto_22,In_img6, "rgb(82, 113, 255)", "600px", "340px", "250px", "350px", "200px", "160px");
        creador(producto_23,In_img7, "rgb(82, 113, 255)", "600px", "610px", "250px", "350px", "200px", "160px");
        creador(producto_24,In_img8, "rgb(82, 113, 255)", "600px", "880px", "250px", "350px", "180px", "260px");
    }else if(entrada == false){
        creador(producto_21,In_img5, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_22,In_img6, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_23,In_img7, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_24,In_img8, "", "0px", "0px", "0px", "0px", "0px", "0px");
    } 
}

function cara7(entrada){
    if(entrada == true){
        creador(producto_25,In_img9, "rgb(82, 113, 255)", "600px", "70px", "250px", "350px", "140px", "260px");
        creador(producto_26,In_img10, "rgb(82, 113, 255)", "600px", "340px", "250px", "350px", "200px", "160px");
        creador(producto_27,In_img11, "rgb(82, 113, 255)", "600px", "610px", "250px", "350px", "200px", "200px");
        creador(producto_28,In_img12, "rgb(82, 113, 255)", "600px", "880px", "250px", "350px", "200px", "160px");
    }else if(entrada == false){
        creador(producto_25,In_img9, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_26,In_img10, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_27,In_img11, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_28,In_img12, "", "0px", "0px", "0px", "0px", "0px", "0px");
    } 
}

function cara8(entrada){
    if(entrada == true){
        creador(producto_29,In_img13, "rgb(82, 113, 255)", "600px", "70px", "250px", "350px", "200px", "160px");
        creador(producto_30,In_img14, "rgb(82, 113, 255)", "600px", "340px", "250px", "350px", "200px", "160px");
        creador(producto_31,In_img15, "rgb(82, 113, 255)", "600px", "610px", "250px", "350px", "240px", "160px");
        creador(producto_32,In_img16, "rgb(82, 113, 255)", "600px", "880px", "250px", "350px", "200px", "160px");
    }else if(entrada == false){
        creador(producto_29,In_img13, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_30,In_img14, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_31,In_img15, "", "0px", "0px", "0px", "0px", "0px", "0px");
        creador(producto_32,In_img16, "", "0px", "0px", "0px", "0px", "0px", "0px");
    } 
}
cara_1(true);
cara5(true);

function bt1(){
   rotar(bt1);
}
function bt2(){
    rotar(bt2);
}
function bt5(){
    rotar(bt5);
}
function bt6(){
    rotar(bt6);
}


function rotar(entrada){
    if(entrada == bt1){
        if(contador == 0){
            contador= contador+1;
            info_1.style.transform="translate(-1000px)";
            info_2.style.transform="translate(-1000px)";
            info_3.style.transform="translate(-1000px)";
            info_4.style.transform="translate(-1000px)";
            info_5.style.transform="translate(0px)";
            info_6.style.transform="translate(0px)";
            info_7.style.transform="translate(0px)";
            info_8.style.transform="translate(0px)";
            info_9.style.transform="translate(-1000px)";
            info_10.style.transform="translate(-1000px)";
            info_11.style.transform="translate(-1000px)";
            info_12.style.transform="translate(-1000px)";
            info_13.style.transform="translate(-1000px)";
            info_14.style.transform="translate(-1000px)";
            info_15.style.transform="translate(-1000px)";
            info_16.style.transform="translate(-1000px)";
            cara_1(false)
            cara2(true);
            cara3(false);
            cara4(false);
        }
        else if(contador ==1){ 
            contador = contador+1;
            info_5.style.transform="translate(-1000px)";
            info_6.style.transform="translate(-1000px)";
            info_7.style.transform="translate(-1000px)";
            info_8.style.transform="translate(-1000px)";
            info_9.style.transform="translate(0px)";
            info_10.style.transform="translate(0px)";
            info_11.style.transform="translate(0px)";
            info_12.style.transform="translate(0px)";
            info_13.style.transform="translate(-1000px)";
            info_14.style.transform="translate(-1000px)";
            info_15.style.transform="translate(-1000px)";
            info_16.style.transform="translate(-1000px)";
           
            cara_1(false);
            cara2(false);
            cara3(true);
            cara4(false);
           
        }
        else if(contador ==2){
            contador = contador+1;
            info_9.style.transform="translate(-1000px)";
            info_10.style.transform="translate(-1000px)";
            info_11.style.transform="translate(-1000px)";
            info_12.style.transform="translate(-1000px)";
            info_13.style.transform="translate(0px)";
            info_14.style.transform="translate(0px)";
            info_15.style.transform="translate(0px)";
            info_16.style.transform="translate(0px)";
            cara_1(false);
            cara2(false);
            cara3(false);
            cara4(true);
            
           


        }
       
    }else if(entrada == bt2){
        if(contador == 4){
            contador= contador-1;
            info_13.style.transform="translate(0px)";
            cara_1(false);
            cara2(false);
            cara3(false);
            cara4(true);
          
        }
        else if(contador ==3){ 
            contador = contador-1;
            info_5.style.transform="translate(-1000px)";
            info_6.style.transform="translate(-1000px)";
            info_7.style.transform="translate(-1000px)";
            info_8.style.transform="translate(-1000px)";
            info_9.style.transform="translate(0px)";
            info_10.style.transform="translate(0px)";
            info_11.style.transform="translate(0px)";
            info_12.style.transform="translate(0px)";
            info_13.style.transform="translate(-1000px)";
            info_14.style.transform="translate(-1000px)";
            info_15.style.transform="translate(-1000px)";
            info_16.style.transform="translate(-1000px)";
        
            cara_1(false);
            cara2(false);
            cara3(true);
            cara4(false);
            
           

        }
        else if(contador ==2){
            contador = contador-1;
            info_5.style.transform="translate(0px)";
            info_6.style.transform="translate(0px)";
            info_7.style.transform="translate(0px)";
            info_8.style.transform="translate(0px)";
            info_9.style.transform="translate(-1000px)";
            info_10.style.transform="translate(-1000px)";
            info_11.style.transform="translate(-1000px)";
            info_12.style.transform="translate(-1000px)";
            info_13.style.transform="translate(-1000px)";
            info_14.style.transform="translate(-1000px)";
            info_15.style.transform="translate(-1000px)";
            info_16.style.transform="translate(-1000px)";
            cara_1(false)
            cara2(true);
            cara3(false);
            cara4(false); 
            
          

        }
        else if(contador ==1){
            contador = contador-1;
            cara_1(true)
            cara2(false);
            cara3(false);
            cara4(false);
            info_1.style.transform="translate(0px)";
            info_2.style.transform="translate(0px)";
            info_3.style.transform="translate(0px)";
            info_4.style.transform="translate(0px)";
          
          
   
          
        }
         
    }
    else if(entrada == bt5){
        if(contador2 == 0){
            contador2= contador2+1;
            info_17.style.transform="translate(-1000px)";
            info_18.style.transform="translate(-1000px)";
            info_19.style.transform="translate(-1000px)";
            info_20.style.transform="translate(-1000px)";
            info_21.style.transform="translate(0px)";
            info_22.style.transform="translate(0px)";
            info_23.style.transform="translate(0px)";
            info_24.style.transform="translate(0px)";
            info_25.style.transform="translate(-1000px)";
            info_26.style.transform="translate(-1000px)";
            info_27.style.transform="translate(-1000px)";
            info_28.style.transform="translate(-1000px)";
            info_29.style.transform="translate(-1000px)";
            info_30.style.transform="translate(-1000px)";
            info_31.style.transform="translate(-1000px)";
            info_32.style.transform="translate(-1000px)";
            cara5(false);
            cara6(true);
            cara7(false);
            cara8(false);
        }
        else if(contador2 ==1){ 
            contador2 = contador2+1;
            info_21.style.transform="translate(-1000px)";
            info_22.style.transform="translate(-1000px)";
            info_23.style.transform="translate(-1000px)";
            info_24.style.transform="translate(-1000px)";
            info_25.style.transform="translate(0px)";
            info_26.style.transform="translate(0px)";
            info_27.style.transform="translate(0px)";
            info_28.style.transform="translate(0px)";
            info_29.style.transform="translate(-1000px)";
            info_30.style.transform="translate(-1000px)";
            info_31.style.transform="translate(-1000px)";
            info_32.style.transform="translate(-1000px)";
            cara5(false);
            cara6(false);
            cara7(true);
            cara8(false);
        

        }
        else if(contador2 ==2){
            contador2 = contador2+1;
            info_25.style.transform="translate(-1000px)";
            info_26.style.transform="translate(-1000px)";
            info_27.style.transform="translate(-1000px)";
            info_28.style.transform="translate(-1000px)";
            info_29.style.transform="translate(0px)";
            info_30.style.transform="translate(0px)";
            info_31.style.transform="translate(0px)";
            info_32.style.transform="translate(0px)";
            cara5(false);
            cara6(false);
            cara7(false);
            cara8(true);
        

        }
    }
    else if(entrada == bt6){
        if(contador2 == 3){
            contador2= contador2-1;
            info_21.style.transform="translate(-1000px)";
            info_22.style.transform="translate(-1000px)";
            info_23.style.transform="translate(-1000px)";
            info_24.style.transform="translate(-1000px)";
            info_25.style.transform="translate(0px)";
            info_26.style.transform="translate(0px)";
            info_27.style.transform="translate(0px)";
            info_28.style.transform="translate(0px)";
            info_29.style.transform="translate(-1000px)";
            info_30.style.transform="translate(-1000px)";
            info_31.style.transform="translate(-1000px)";
            info_32.style.transform="translate(-1000px)";

            
            cara5(false);
            cara6(false);
            cara7(true);
            cara8(false);
        }
        else if(contador2 ==2){ 
            contador2 = contador2-1;
            info_21.style.transform="translate(0px)";
            info_22.style.transform="translate(0px)";
            info_23.style.transform="translate(0px)";
            info_24.style.transform="translate(0px)";
            info_25.style.transform="translate(-1000px)";
            info_26.style.transform="translate(-1000px)";
            info_27.style.transform="translate(-1000px)";
            info_28.style.transform="translate(-1000px)";
            info_29.style.transform="translate(-1000px)";
            info_30.style.transform="translate(-1000px)";
            info_31.style.transform="translate(-1000px)";
            info_32.style.transform="translate(-1000px)";
            cara5(false);
            cara6(true);
            cara7(false);
            cara8(false);
         
        

        }
        else if(contador2 ==1){
            contador2 = contador2-1;
            cara5(true);
            cara6(false);
            cara7(false);
            cara8(false);
          

        }
        
    }

    console.log(contador2);
    
    
}









