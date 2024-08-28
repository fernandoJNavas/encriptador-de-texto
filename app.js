const botonEncriptar = document.getElementById('btnEncriptar');
const textoEncriptar = document.querySelector('.texto');
const aviso = document.querySelector(".principal__section__p");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".segunda__section__primerdiv");
const botonDesepcritar = document.getElementById('btnDesepcritar');
const botonCopiar = document.querySelector(".botonCopiar");

// funsion encriptar 
botonEncriptar.addEventListener("click", e=> {
  e.preventDefault();
  let texto = textoEncriptar.value;
  let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " 
);
 if(texto ==""){
  aviso.style.background ="#6D96A6";
  aviso.style.color = "#4A5958";
  aviso.style.fontweight = "800";
  aviso.textContent = 'El campo de texto no debe estar vacio';
  
  setTimeout(()=>{
    aviso.removeAttribute("style");
  },1500);
 } 
 else if(texto !==txt){
    aviso.style.background = "#6D96A6";
    aviso.style.color = "#4A5958";
    aviso.style.fontweight = "800";
    aviso.textContent = 'No debe tener acentos y caracteres especiales';
  
    setTimeout(()=>{
      aviso.removeAttribute("style");
   },1500);

  }
  else{
    texto = texto.replace(/e/mg,"enter");
    texto = texto.replace(/i/mg,"imes");
    texto = texto.replace(/a/mg,"ai");
    texto = texto.replace(/o/mg,"ober");
    texto = texto.replace(/u/mg,"ufat");

    respuesta.innerHTML = texto;
    botonCopiar.style.visibility = "inherit";
    contenido.remove();

  }
})
// funcionalidad desencriptar 
botonDesepcritar.addEventListener("click", e=> {
  e.preventDefault();
  let texto = textoEncriptar.value;
  let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " 
);
 if(texto ==""){
  aviso.style.background ="#6D96A6";
  aviso.style.color = "#4A5958";
  aviso.style.fontweight = "800";
  aviso.textContent = 'El campo de texto no debe estar vacio';
  
  setTimeout(()=>{
    aviso.removeAttribute("style");
  },1500);
 } 
 else if(texto !==txt){
    aviso.style.background = "#6D96A6";
    aviso.style.color = "#4A5958";
    aviso.style.fontweight = "800";
    aviso.textContent = 'No debe tener acentos y caracteres especiales';
  
    setTimeout(()=>{
      aviso.removeAttribute("style");
   },1500);

  }

 
  else{
    texto = texto.replace(/enter/mg,"e");
    texto = texto.replace(/imes/mg,"i");
    texto = texto.replace(/ai/mg,"a");
    texto = texto.replace(/ober/mg,"o");
    texto = texto.replace(/ufat/mg,"u");

    respuesta.innerHTML = texto;
    botonCopiar.style.visibility = "inherit";
    contenido.remove();

  }
});

 //funcionalidad boton copiar  
  botonCopiar.addEventListener('click', e => {
   e.preventDefault();
   let copiar = respuesta;
   copiar.select();
   document.execCommand('copy');

  });


