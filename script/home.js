import {
  navbar,
  displayCart,
  showCart,
  debounceALl,
  displayUser,
} from "../nav-comp/nav.js";
// window.addToCart = addToCart;
window.reduceQuantity = reduceQuantity;
window.addQuantity = addQuantity;
window.deleteItem = deleteItem;
// window.hover = hover;
document.getElementById("navbarId").innerHTML = navbar();

let clip = document.querySelectorAll(".video1");
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseover", function (e) {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
  });
}

let insta = document.querySelector("#insta");

insta.addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/glossier/feed/?hl=en";
});

// --------------------cart functionality------------

// let cartBtn = document.getElementById("cart-btn");
// cartBtn.addEventListener("click", () => {
//   showCart();
// });

// function reduceQuantity(index) {
//   let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
//   let ele = cartArr[index];
//   if (ele.quantity <= 1) {
//     cartArr.splice(index, 1);
//     localStorage.setItem("cartArr", JSON.stringify(cartArr));

//     displayCart(cartArr);
//     return;
//   }
//   ele.quantity--;
//   localStorage.setItem("cartArr", JSON.stringify(cartArr));
//   displayCart(cartArr);
// }
// function addQuantity(index) {
//   let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
//   let ele = cartArr[index];
//   ele.quantity++;
//   localStorage.setItem("cartArr", JSON.stringify(cartArr));
//   displayCart(cartArr);
// }
// function deleteItem(index) {
//   let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
//   cartArr.splice(index, 1);
//   localStorage.setItem("cartArr", JSON.stringify(cartArr));

//   displayCart(cartArr);
// }

// debounceALl();
// displayUser();
let allSkin = document.querySelector("#seeSkin");
allSkin.addEventListener("click", function () {
  window.location.href = "./Product-page/product.html";
});

let arr = [
  {
    image1:
      "https://glossier-prod.imgix.net/products/glossier-cleanser-concentrate-carousel-01.png?auto=compress,format&cs=srgb&w=540",
    image2:
      "https://glossier-prod.imgix.net/products/glossier-cleanser-concentrate-carousel-08.png?auto=compress,format&cs=srgb&w=540",
    image3:
      "https://glossier-prod.imgix.net/products/glossier-cleanser-concentrate-carousel-08.png?auto=compress,format&cs=srgb&w=540",
    video1:
      "https://player.vimeo.com/progressive_redirect/playback/815650642/rendition/480p/file.mp4?loc=external&signature=58ca21976cabfe41540bd1d6d4c3d0240f8cbc99c84ec3509ae496704a4eb872",
    name: "Cleanser Concentrate",
    desc: "Clarifying face wash",
    skinType: "Sensitive",
    rating: 5,
    price: "26",
    category: "Cleansers",
    bestSelling: "yes",
    quantity: 1,
    id: 1,
  },
  {
    image1:
      "https://glossier-prod.imgix.net/products/glossier-futuredew-carousel-01.png?auto=compress,format&cs=srgb&w=180",
    image2:
      "https://glossier-prod.imgix.net/products/glossier-futuredew-carousel-03.png?auto=compress,format&cs=srgb&w=540",
    image3:
      "https://glossier-prod.imgix.net/products/futuredew-2.jpg?auto=compress,format&cs=srgb&w=540",
    video1:
      "https://player.vimeo.com/progressive_redirect/playback/815642486/rendition/480p/file.mp4?loc=external&signature=0574411195b6974759ec4c9046dd265d50671f804c539f26d1de22499ec0e2b6",
    name: "Futuredew",
    desc: "Oil serum hybrid",
    skinType: "Sensitive",
    rating: 9,
    price: "26",
    category: "Treatments",
    bestSelling: "yes",
    quantity: 1,
    id: 2,
  },
];

let productImgs = document.querySelectorAll(".product");

productImgs.forEach((ele,index) => {
  ele.addEventListener("click", () => {
    // event.preventDefault();
    moveToDetailPage(index)
  })
})

function moveToDetailPage(index) {
  let singleItem = arr[index]
  localStorage.setItem("singleItem", JSON.stringify(singleItem));
  // window.location.assign("../product-detail.html");
  console.log(singleItem)
}