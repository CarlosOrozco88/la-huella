document.addEventListener("DOMContentLoaded", () => startJS())

function startJS() {
    window.addEventListener('scroll', handleScroll);
}

function handleScroll( { type, currentTarget }) {
    const { scrollY, innerHeight} = currentTarget;
    const scrollTop = scrollY;
    const scrollBottom = scrollY + innerHeight;
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", scrollY > 50);

    const elements = document.querySelectorAll(".parallax");
    console.clear()
    elements.forEach((elem) => {
        // let iTop = elem.parentElement.offsetTop;
        // let sParallax = elem.getAttribute("data-parallax") || "40";
        // let sScale = elem.getAttribute("data-scale") || "1";
        // let iParallax = Number(sParallax) / 100;
        // let sCoord = (iTop - scrollTop) * iParallax + 'px';
        // elem.style.transform = `translate3d(0px, ${sCoord}, 0px) scale(${sScale})`;

        const limit = elem.offsetTop + elem.offsetHeight;
        if (scrollBottom > elem.offsetTop && scrollTop <= limit){
            const backgroundPositionY = (50 + 30 * scrollY / limit) + '%';
            elem.style.backgroundPositionY = backgroundPositionY;
        } else {
            elem.style.backgroundPositionY = '50%';
        }
    })
}

function scrollToSection(event) {
    event.preventDefault();

    const elementID = event.currentTarget.hash.replace("#", "");
    const element = document.getElementById(elementID);
    let top = element.offsetTop;
    if (top > 50) {
        top -= 4 * 16;
    }
    scroll({
        top: top,
        behavior: "smooth"
    })
}
