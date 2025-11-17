// lets start yaay!

document.getElementById("menu").addEventListener("click", showHide);

let isShown = true;

function showHide(){

    let sideBarHideShow = document.getElementsByClassName('navStyle')[0];

    if(isShown){
        sideBarHideShow.style.display = "none";
        menu.style.position = "absolute";
        menu.style.left = "50px";
        menu.style.top = "30px";
        menu.style.width = "calc(100%-50px)";
        document.getElementsByClassName('container-content')[0].style.width = "100%";
        document.getElementsByClassName('container-content')[0].style.left = "0px";
        isShown = false;
    }

    else{
        sideBarHideShow.style.display = "block";
        menu.style.position = "fixed";
        menu.style.left = "calc(20vw/2)";
        menu.style.width = "60px";
        document.getElementsByClassName('container-content')[0].style.width = "60%";
        document.getElementsByClassName('container-content')[0].style.left = "50vh";
        isShown = true;
    }
}