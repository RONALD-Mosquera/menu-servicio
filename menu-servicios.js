'use strict'
const contenedorizquierda   = document.querySelector                ('.pildora__izquierda')
const contenedorderecha     = document.querySelector                ('.pildora__derecha')
const btnmodulo             = contenedorizquierda.querySelectorAll  ('.izquierda__btnmodulo')
const btn                   = contenedorizquierda.querySelectorAll  ('.izquierda__btn')
const desplegable           = contenedorizquierda.querySelectorAll  ('.izquierda__todas')
const leccion               = contenedorizquierda.querySelectorAll  ('izquierda__leccion')
const losli                 = contenedorizquierda.querySelectorAll  ('.izquierda__li')
const laslecciones          = contenedorizquierda.querySelectorAll  ('.izquierda__leccion')
const loader                = document.querySelectorAll             ('.loader')
const btninterior           = contenedorderecha.querySelectorAll    ('.listadoplan')
const continterior          = contenedorderecha.querySelectorAll    ('.contenido__absoluta')
const contenidoder          = contenedorderecha.querySelectorAll    ('.derecha__absoluta')
//animación del menú principal desplegar y cerrar
btnmodulo.forEach((cadaBtn , i) =>{  
    btnmodulo[i].addEventListener('click', ()=>{
        if(btnmodulo[i].classList.contains ('activo')){
            desplegable[i].classList.remove('activo')
        }
        btnmodulo.forEach ((cadaBtn,i)=>{
        desplegable[i].classList.remove('activo')   
        }) 
        desplegable[i].classList.add('activo')
    })  
}) 

// cambiar el contenido interior y añadir un loader
btninterior.forEach((cadaBtn , i) =>{ 
    btninterior[i].addEventListener('click', ()=>{
      console.log(i)

        btninterior.forEach ((cadaBtn,i)=>{ 
            btninterior[i].classList.remove('btnplan')
            continterior[i].classList.remove('full__activo')
        })
        btninterior[i].classList.add('btnplan')
        
        setTimeout(() => {
            loader.forEach((cadaloader,carga)=>{
                loader[carga].classList.add('loaderactivo')
                loader[carga].classList.remove('loaderinactivo') 
            })
            }, 10);
        setTimeout(() => {
            loader.forEach((cadaloader,carga)=>{
                loader[carga].classList.add ('loaderinactivo') 
                loader[carga].classList.remove('loaderactivo') 
            })
            
            console.log(i)
            continterior[i].classList.add('full__activo') 
        }, 1000); 
        
    })
    
}) 

//seleccionar del desplegable
losli.forEach((cadaLi , k) => {
    
     losli[k].addEventListener ( 'click', ()=>{
         losli.forEach (( cadaLi , k) => {
            contenidoder[k].classList.add('derecha__absinactiva')
            contenidoder[k].classList.remove('derecha__absactiva')
            laslecciones[k].classList.remove ('izquierda__color')
            
         })
    contenidoder[k].classList.remove ('derecha__absinactiva')
    contenidoder[k].classList.add ('derecha__absactiva')

    laslecciones[k].classList.add ('izquierda__color')
     })
        
 })


 
//solucion al cambio de "Cadali" de la izquierda y que el contenido de la derecha se active la primera
 losli.forEach((paco , j) => {
    
    losli[j].addEventListener ( 'click', ()=>{
        let a = j;
        let b = j;
        console.log('estas dando clic a la izquierda el número:')
        console.log(j)
        if (a == 1) {a = 3}
        else if (a == 2) {a = 6} 
       
       

        // else if (a == 4) {a = 15}
        // else if (a == 5) {a = 8}
        // else if (a == 6) {a = 12}
        // else if (a == 7) {a = 15}
        


        if (b == 1) {b = 3}
        else if (b == 2) {b =6}
        
        
        
        
        btninterior.forEach((cadapaco , p)=>{
            btninterior[p].classList.remove ('btnplan')
            continterior[p].classList.remove ('full__activo')
        })
        console.log(a)
        
        btninterior[a].classList.add ('btnplan')
        console.log(btninterior[a])
        continterior[b].classList.add ('full__activo')
        console.log(b)
        console.log(continterior[b])
        

    })
       
})



//copiar texto