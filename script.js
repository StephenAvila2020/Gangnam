function applyGangnamStyle () {
    //  Select the body element
    const bodyElement = document.querySelector("body");
    console.log("this should be the body element", bodyElement)
    //  Apply the class of "Gangnam-Style" to the body
    bodyElement.classList.add("gangnam-style");
    // select all the list items
    const listItems = document.querySelectorAll(".list-items")
    console.log("this should be all the list items", listItems);
    // turn the background orange
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add("orange-background");
        
    }
    

}
// applyGangnamStyle() turning on this call starts Gangnam Style