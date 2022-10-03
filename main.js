const contextMenu = document.querySelector(".wrapper"),
shareMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", e => {
    console.log("Right Button Clicked");
    e.preventDefault();//preventing default context menu of the browser
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth;
    cmHeight = contextMenu.offsetHeight;

    if(x > (winWidth - cmWidth - shareMenu.offsetWidth) ){
        shareMenu.style.left = "-10em";
    } else{
        shareMenu.style.left = "";
        shareMenu.style.right = "-10em";
    }

    if(x > (winWidth - cmWidth) ){
        x = winWidth - cmWidth;
    }
    

    if(y > (winHeight - cmHeight) ){
        y = winHeight - cmHeight;
    }

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => contextMenu.style.visibility = "hidden");