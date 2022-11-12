const menu = document.querySelector('.menu')
const links = document.querySelectorAll('.links')
const toggleMenu = () =>{
    menu.classList.toggle('open')
    document.body.classList.toggle('open')
}

for(link of links){
    link.addEventListener("click",()=>{
        menu.classList.remove('open')
        document.body.classList.remove('open')
    })
}
