const burgerMenu = document.querySelector("#burger-menu");
const menu = document.querySelector("header ul");

//handle burger menu click (toggle menu list)
burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("shown");
})

//toggle the style of header on scrolling (normal/fixed)
window.onscroll = function() {
    const header =  document.querySelector("header");
    var offset = header.offsetHeight;
    var top = window.scrollY;

    if (top > offset){
        header.classList.add("fixed");
    }
    else{
        header.classList.remove("fixed");
    }
}

//scrolling effect
gsap.registerPlugin(ScrollTrigger);

//image from left to actual position
gsap.from("#hero-image", {
    scrollTrigger: "#hero-image",
    x: "-100%",
    duration: 1.5,
});

//hero content changes of opacity and margin
gsap.from("#hero-box h1", {
    scrollTrigger: "#hero-box h1",
    opacity: 0,
    duration: 1.5,
    delay: 1,
});

gsap.from("#hero-box p", {
    scrollTrigger: "#hero-box p",
    opacity: 0,
    marginBottom: "20%",
    duration: 3,
    delay: 2,
});

gsap.from("#hero-button", {
    scrollTrigger: "#hero-button",
    opacity: 0,
    duration: 2,
    delay: 2,
});

//steps from left to actual position
for (let i = 1; i <= 5; i++){
    gsap.from(`#step${i}`, {
        scrollTrigger: "#steps-container",
        x: '-200%',
        opacity: 0,
        duration: 2,
        delay: i - 1,
        ease: "slow(0.7, 0.7, false)",
    });
}

//prices cards appearing one after the other
for (let i = 1; i <= 3; i++){
    gsap.from(`#price${i}`, {
        scrollTrigger: "#prices-container",
        opacity: 0,
        duration: 1,
        delay: (i - 1.3) > 0 ? i - 1.3 : 0
    });
}

//contact form (backout ease)
gsap.from("#input-box", {
    scrollTrigger: "#input-box",
    x: "-200%",
    ease: "back.out(1.7)",
    duration: 3,
});