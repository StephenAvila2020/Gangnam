// function applyGangnamStyle () {
//     //  Select the body element
//     const bodyElement = document.querySelector("body");
//     console.log("this should be the body element", bodyElement)
//     //  Apply the class of "Gangnam-Style" to the body
//     bodyElement.classList.add("gangnam-style");
//     // select all the list items
//     const listItems = document.querySelectorAll(".list-items")
//     console.log("this should be all the list items", listItems);
//     // turn the background orange
//     for (let i = 0; i < listItems.length; i++) {
//         listItems[i].classList.add("orange-background");
     
//     }
    
// }
// applyGangnamStyle() 
// // applyGangnamStyle() turning on this call starts Gangnam Style

// // Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const headerElement = document.querySelector(".article__header")
console.log(headerElement)

headerElement.textContent = "Welcome to the Stephen blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const allHeaderElements = document.querySelectorAll(".article__header")
console.log(allHeaderElements)

for (let i= 0; i< allHeaderElements.length; i++) {
    allHeaderElements[i].classList.add("important");
    
}
// Obtain a reference the element with a class of dashed and remove it.
document.querySelector(".dashed").classList.remove("dashed")
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
document.querySelector(".article__footer").classList.add("goldenrod")