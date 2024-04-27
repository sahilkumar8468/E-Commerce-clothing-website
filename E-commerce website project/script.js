const bar= document.querySelector('#bar');
const nav=document.querySelector('#navbar');
const close =document.querySelector('#close');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
   close.addEventListener('click',()=>{
       nav.classList.remove('active')
       })
}


// sproduct code
const MainImg=document.querySelector('#MainImg');
const Smalling=document.querySelectorAll('.smalling');

if(MainImg){
    Smalling[0].addEventListener('click',()=>{
        MainImg.src=Smalling[0].src;
    })
}
if(MainImg){
    Smalling[1].addEventListener('click',()=>{
        MainImg.src=Smalling[1].src;
    })
}
if(MainImg){
    Smalling[2].addEventListener('click',()=>{
        MainImg.src=Smalling[2].src;
    })
}
if(MainImg){
    Smalling[3].addEventListener('click',()=>{
        MainImg.src=Smalling[3].src;
    })
}

