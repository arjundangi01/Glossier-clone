
import { navbar, displayCart, showCart,debounceALl } from "../nav-comp/nav.js";
// window.addToCart = addToCart;
window.reduceQuantity = reduceQuantity;
window.addQuantity = addQuantity;
window.deleteItem = deleteItem;
// window.hover = hover;
document.getElementById("navbar").innerHTML = navbar();


let clip = document.querySelectorAll(".video1");
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseover", function (e) {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
  });
}

let insta=document.querySelector("#insta");

insta.addEventListener("click",function(){
  window.location.href="https://www.instagram.com/glossier/feed/?hl=en";
})






// --------------------cart functionality------------



let cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", () => {
  showCart();
});

function reduceQuantity(index) {
  let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
  let ele = cartArr[index];
  if (ele.quantity <= 1) {
    cartArr.splice(index, 1);
    localStorage.setItem("cartArr", JSON.stringify(cartArr));

    displayCart(cartArr);
    return;
  }
  ele.quantity--;
  localStorage.setItem("cartArr", JSON.stringify(cartArr));
  displayCart(cartArr);
}
function addQuantity(index) {
  let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
  let ele = cartArr[index];
  ele.quantity++;
  localStorage.setItem("cartArr", JSON.stringify(cartArr));
  displayCart(cartArr);
}
function deleteItem(index) {
  let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
  cartArr.splice(index, 1);
  localStorage.setItem("cartArr", JSON.stringify(cartArr));

  displayCart(cartArr);
}

debounceALl()