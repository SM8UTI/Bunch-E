const projects_data = [
    {
        title:'Restaurant App Ui',
        img:'dist/assets/projects/App-1.png',
        link:'https://www.behance.net/gallery/150255911/Plant-Decoration-Shopping-app-ui-design-sm8uti',
        category:'UI/UX Design'
    },
    {
        title:'Webook Website Ui',
        img:'dist/assets/projects/App-4.png',
        link:'https://webook.netlify.app/',
        category:'Website Development'
    },
    {
        title:'Plant App Ui',
        img:'dist/assets/projects/App-2.png',
        link:'https://www.behance.net/gallery/150255911/Plant-Decoration-Shopping-app-ui-design-sm8uti',
        category:'UI/UX Design'
    },
    {
        title:'Iceland Website Ui',
        img:'dist/assets/projects/App-5.png',
        link:'https://sm8uti.github.io/Iceland-website/',
        category:'Web Development'
    },
    {
        title:'NFT App Ui',
        img:'dist/assets/projects/App-3.png',
        link:'https://www.behance.net/gallery/149857535/NFT-App-UI-Design',
        category:'UI/UX Design'
    },
]

function projects(){
    const swiperWrapper = document.querySelector('.swiper-wrapper')
    for(let i = 0;i<projects_data.length;i++){
        let imgsrc = projects_data[i].img
        let linksrc = projects_data[i].link
        let altText = projects_data[i].title
        let categoryText = projects_data[i].category
        swiperWrapper.innerHTML += `
                    <div class="box swiper-slide">
                    <img src="${imgsrc}" alt="${altText}">
                    <ul>
                        <li>${categoryText}</li>
                    </ul>
                    <a href="${linksrc}"
                        target="_blank">
                        <span class="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </a>
            </div>
        `
    }
}

projects()

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

function projectFunction(){

    const mediaQuery = window.matchMedia('(min-width: 768px)')

    function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
        var swiper = new Swiper(".project-container", {
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        });
    }
    }
    // Register event listener
    mediaQuery.addListener(handleTabletChange)

    // Initial check
    handleTabletChange(mediaQuery)

}
const media = window.matchMedia('(min-width: 768px)')

const handleTabletChange() => {
        if (e.matches) {
        var swiper = new Swiper(".project-container", {
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        });
    }
}

media.addListener(handleTabletChange)

    // Initial check
handleTabletChange(mediaQuery)