let primImg=document.querySelector('.image1')
let secImg=document.querySelector('.image2')
let terImg=document.querySelector('.image3')
let cuaImg=document.querySelector('.image4')

const aparecer=((entry,salida)=>{
    entry.forEach(entradas => {
        if(entradas.isIntersecting){
            entradas.target.classList.remove('inicial')
            
        }
    });
    
    
})

const obserVar=new IntersectionObserver(aparecer,{
    root:null,
    rootMargin:'0px 0px 0px 0px',
    threshold:0.5
})

obserVar.observe(primImg)
obserVar.observe(secImg)
obserVar.observe(terImg)
obserVar.observe(cuaImg)


