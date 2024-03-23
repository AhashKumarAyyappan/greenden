var showMenu = document.getElementById("show-menu")
var mobNavBar = document.getElementById("mobile-nav-bar")

var closeMenu = document.getElementById("close-icon")

showMenu.addEventListener("click",function(){
    console.log("function")
    mobNavBar.style.right = "0"
})


closeMenu.addEventListener("click",function(){
    mobNavBar.style.right = "-50%"
})