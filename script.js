//showing container after 4000ms

const container = document.querySelector(".container");

setTimeout(() => {
  container.style.display="block";
}, 4000);

//the section above can be achieved by the following code:
//in css: .display .container {
  //display: block;
//}
//in js: 
// window.onload(() => {
// setTimeout(() => {
// document.quertSelector("body").classList.add("display");
// }, 4000);
// });


//moving sidebar
const hamb=document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");

hamb.addEventListener("click", () => {
    sidebar.classList.toggle("change");
    hamb.classList.toggle("change")
});

//for team section, go to page https://gijsroge.github.io/tilt.js/ and downlod, find the src folder, open it, 
//copy the code and paste it into a new file called tilt.js, which is included as a script file into index.html
//also, inlude jQuery link into Index.html page
//all 'card' components must have the attribute data-tilt.


//scroll-btn

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    //to remove the property from the html element after 1 second, setTimeout is executed after 1 second once we click the button
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });


  
  //sidebar menu
  // Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
    // Original:
    // const sectionTop = current.offsetTop - 50;
    //  
    // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
    // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
    //
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}



