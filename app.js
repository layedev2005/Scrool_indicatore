const scroolI = document.querySelector(".scroolBare")
const content = document.querySelector(".content")


const observer = new IntersectionObserver(handleIntersect)
observer.observe(content) 


function handleIntersect(entries){
    const el = entries[0]
    if (el.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation)
    }else if (el.isIntersecting){
        window.removeEventListener("scroll", indicatorAnimation)
    }
}

function indicatorAnimation(){
    if (window.scrollY > content.offsetTop) {
        const pourcentage = ((window.scrollY - content.offsetTop) /
        content.scrollHeight * 100).toFixed(2);
        scroolI.style.transform = `scaleX(${(pourcentage / 100)})`
        
    } else {
        scroolI.style.transform = `scaleX(0)`
    }
}

