const closeEl = document.querySelector(".fa-xmark")
const openEl = document.querySelector(".fa-bars")


const dropDown = document.querySelector(".menu-mobile-dropdown")

openEl.addEventListener("click",()=>{
    dropDown.style.transform =`translateX(0%)`;
    openEl.style.display = `none`
    closeEl.classList.add("active")
})

closeEl.addEventListener("click",()=>{
    dropDown.style.transform =`translateX(100%)`;
    openEl.style.display = `block`
    closeEl.classList.remove("active")
})

const induBtn = document.querySelector(".industry")
const industryDd = document.querySelector(".industry-dd")

induBtn.addEventListener("click", () =>{

    if (industryDd.classList.contains("active")) {
        industryDd.classList.remove("active")
    } else {
        industryDd.classList.add("active")
    }
})

// PRODUCT DROP DOWN
const prodBtn = document.querySelector(".products")
const productDd = document.querySelector(".products-dd")

prodBtn.addEventListener("click", () =>{

    if (productDd.classList.contains("active")) {
        productDd.classList.remove("active")
    } else {
        productDd.classList.add("active")
    }
})

// COMPANY DROP DOWN
const compBtn = document.querySelector(".company")
const companyDd = document.querySelector(".company-dd")

compBtn.addEventListener("click", () =>{

    if (companyDd.classList.contains("active")) {
        companyDd.classList.remove("active")
    } else {
        companyDd.classList.add("active")
    }
})

// Resources DROP DOWN
const resBtn = document.querySelector(".resources")
const resourcesDd = document.querySelector(".resources-dd")

resBtn.addEventListener("click", () =>{

    if (resourcesDd.classList.contains("active")) {
        resourcesDd.classList.remove("active")
    } else {
        resourcesDd.classList.add("active")
    }
})


const industryCon = document.querySelector(".industry-popup")
const btnindu = document.querySelector(".btn-industry")
const popup1 = document.querySelector(".popup-1")
let mouseOver = false;
let timeoutId;
// const btnindu = document.querySelector(".btn-industry")
// const btnindu = document.querySelector(".btn-industry")

btnindu.addEventListener("mouseenter", ()=>{
    popup1.style.display = "block"
    popup2.style.display = "none"
    popup3.style.display = "none"
    mouseOver = true
})

btnindu.addEventListener("mouseleave", ()=>{
    mouseOver = false
    timeoutId = setTimeout(function(){
        if (!mouseOver) {
            popup1.style.display = "none"
        }
    }, 100)
    
})

popup1.addEventListener("mouseenter", ()=>{
    mouseOver = true
    popup1.style.display = "block"
})

popup1.addEventListener("mouseleave", ()=>{
    mouseOver = false
    popup1.style.display = "none"
})


// PRODUCTS DROPDOWN
const btnproduct = document.querySelector(".product-btn")
const popup2 = document.querySelector(".popup-2")

btnproduct.addEventListener("mouseenter", ()=>{
    popup2.style.display = "block"
    popup3.style.display = "none"
    mouseOver = true
})

btnproduct.addEventListener("mouseleave", ()=>{
    mouseOver = false
    timeoutId = setTimeout(function(){
        if (!mouseOver) {
            popup2.style.display = "none"
        }
    }, 100)
    // popup2.style.display = "none"
    // popup2.style.display = "none"
})

popup2.addEventListener("mouseenter", ()=>{
    mouseOver = true
    popup2.style.display = "block"
})

popup2.addEventListener("mouseleave", ()=>{
    mouseOver = false
    popup2.style.display = "none"
})


// COMPANY DROPDOWN
const btnCompany = document.querySelector(".company-btn")
const popup3 = document.querySelector(".popup-3")
let openDropdown;

btnCompany.addEventListener("mouseenter", ()=>{
    mouseOver = true
    popup3.style.display = "block"
    if (mouseOver = true) {
        popup2.style.display = "none"
    }
})
btnCompany.addEventListener("mouseleave", ()=>{
    mouseOver = false
    timeoutId = setTimeout(function(){
        if (!mouseOver) {
            popup3.style.display = "none"
        }
    }, 100)
    
})
popup3.addEventListener("mouseenter", ()=>{
    mouseOver = true
    if (popup3.style.display === "block") {
        popup2.style.display === "none"
    }
    popup3.style.display === "block"
})
popup3.addEventListener("mouseleave", ()=>{
    mouseOver = false
    popup3.style.display = "none"
})


// Resource DROPDOWN
const btnResource = document.querySelector(".resources-btn")
const popup4 = document.querySelector(".popup-4")


btnResource.addEventListener("mouseenter", ()=>{
    popup4.style.display = "block"
    mouseOver = true
    if (mouseOver === true) {
        popup3.style.display = "none"
    }
})

btnResource.addEventListener("mouseleave", ()=>{
    // popup4.style.display = "block"
    mouseOver = false
    timeoutId = setTimeout(function(){
        if (!mouseOver) {
            popup4.style.display = "none"
        }
    }, 250)
    
    
})
popup4.addEventListener("mouseenter", ()=>{
    mouseOver = true
    if (popup3.style.display === "block") {
        popup2.style.display === "none"
    }
    popup4.style.display === "block"
})
popup4.addEventListener("mouseleave", ()=>{
    mouseOver = false
    popup4.style.display = "none"
})


// PLAY VIDEO
const playBtn = document.querySelector(".play-description")
const trailerVideo = document.querySelector(".trailer-container")
const closeBtn = document.querySelector(".fa-sharp")


console.log(trailerVideo);
console.log(playBtn);

playBtn.addEventListener("click", ()=>{
    trailerVideo.classList.remove("active")
})

closeBtn.addEventListener("click", ()=>{
    trailerVideo.classList.add("active")
})



// ---------------------------------------\
const elements = document.querySelectorAll(".border")

elements.forEach((element, index)=>{
    element.addEventListener("click", function(){
        elements.forEach(el =>{
            el.classList.remove("active")
        })
        element.classList.add("active")
    })
})
