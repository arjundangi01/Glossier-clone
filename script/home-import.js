import { navbar, displayCart, showCart,debounceALl,displayUser } from "../nav-comp/nav.js";
import { footer } from "../footer/footer.js";
document.getElementById("footer").innerHTML = footer();


window.addToCart = addToCart;
window.reduceQuantity = reduceQuantity;
window.addQuantity = addQuantity;
window.deleteItem = deleteItem;
// window.moveToDetailPage = moveToDetailPage;

document.getElementById("navbar").innerHTML = navbar();



function addToCart(index) {
  let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
  let check = true;
  cartArr.forEach((ele) => {
    if (ele.name == output[index].name) {
      ele.quantity++;
      localStorage.setItem("cartArr", JSON.stringify(cartArr));
      displayCart(cartArr);

      check = false;
      return;
    }
  });

  if (check) {
    cartArr.push(output[index]);
    localStorage.setItem("cartArr", JSON.stringify(cartArr));
    displayCart(cartArr);
  }
}

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
  console.log("first")
}


debounceALl();
displayUser();