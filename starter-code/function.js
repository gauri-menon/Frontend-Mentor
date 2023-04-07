function openMenu() {
    document.getElementsByClassName("navbar")[0].style.display="flex";
    document.getElementsByTagName("hr")[0].style.display="flex";
    // document.getElementsByClassName("navbar")[0].style.flexDirection="column";
    document.getElementsByClassName("flex-nav")[0].style.justifyContent="flex-end";
    // document.getElementsByClassName("flex-nav")[0].style.flexDirection="column";
    document.getElementsByClassName("menu-open")[0].style.display="none";
    document.getElementsByClassName("menu-close")[0].style.display="initial";
}

function closeMenu() {

    document.getElementsByClassName("menu-close")[0].style.display="none";
    document.getElementsByClassName("menu-open")[0].style.display="initial";
    document.getElementsByClassName("navbar")[0].style.display="none";
}

function validateForm() {
    var x=document.getElementsByTagName("form");
}