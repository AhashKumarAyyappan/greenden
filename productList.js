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


//Search funtionality 

var searchInput = document.getElementById("search-bar")
var searchResult = document.getElementById("product-list")
var h3List = searchResult.querySelectorAll("div")

console.log(h3List[1].querySelector("h3").textContent)
searchInput.addEventListener("keyup",function(){
    //console.log(event.target.value)
    var enterValue = event.target.value.toLowerCase()
    //console.log(enterValue)
    for(i = 0;i<h3List.length;i++){
       var storeH3List =  h3List[i].querySelector("h3").textContent.toLowerCase()
        console.log(storeH3List)
        if(storeH3List.indexOf(enterValue)<0){
            console.log("inside if")
            h3List[i].style.display = "none"
        }else{
            console.log("inside else")
            h3List[i].style.display = "block"
        }
    }


})