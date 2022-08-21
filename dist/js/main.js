window.addEventListener('scroll',function(){
    const header = document.querySelector('.primary-header');
    header.classList.toggle("sticky",window.scrollY > 0);
})

function togglemenu(){
    const menu = document.querySelector('.menu-btn')
    const nav = document.querySelector('.navbar')
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}

function hoverImage(img1,text){
    const imghv = document.getElementById('ImageHv')
    const ichv = document.getElementById('IconHv')
    imghv.src = `${img1}`
    // ichv.innerText = `${text}`
}
