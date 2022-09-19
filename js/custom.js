var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px"

function menutoggel() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"

    }
    else {
        MenuItems.style.maxHeight = "0px"

    }

}

// --------js product gallery

var ProductImg = document.getElementById("product-img")
var SmallImg = document.getElementsByClassName("small-img")

SmallImg[0].onclick = function () {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
}


