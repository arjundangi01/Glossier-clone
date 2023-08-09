import { navbar, displayCart, showCart,debounceALl } from "../nav-comp/nav.js";
// import { displayCart } from "../cart-page/cart.js";
window.addToCart = addToCart;
window.reduceQuantity = reduceQuantity;
window.addQuantity = addQuantity;
window.deleteItem = deleteItem;
window.hover = hover;
window.hover2 = hover2;

document.getElementById("navbar").innerHTML = navbar();

fetchData(1);
let output;
async function fetchData(page) {
  
  try {
    let response = await fetch(`https://project-1-1qlk.onrender.com/glossier?_page=${page}&_limit=12`);
    output = await response.json();
   
    display(output);
  } catch (error) {}
}

// -----------------

function display(array) {
  let container = document.getElementById("container");
  container.innerHTML = "";

  array.forEach((element, index, array) => {
    container.innerHTML += ` 
    <div class="prod-card">
      <div class="prod-img-div">
          <img  onmouseover="hover(${index})" onmouseout="hover2(${index})"  src="${element.image1}" alt="">
      </div>

      <div class="prod-detail-div">
          <p>${element.desc}</p>
          <div class="prod-price-card">
            <p>${element.name}</p>
            <p>$ ${element.price}</p>
          </div>
       </div>
       <div  data-bs-toggle="offcanvas"
       data-bs-target="#offcanvasNavbar"
       aria-controls="offcanvasNavbar"
       aria-label="Toggle navigation"
       class="bag-btn-card">
        <button class="bag-btn" onclick="addToCart(${index})">Add to bag</button>
       </div>
    
   </div>`;
    
  });


}

function hover(index) {
 event.target.src = output[index].image2

  console.log("first")
}
function hover2(index) {
 event.target.src = output[index].image1

  console.log("first")
}

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
}

// -------------------filter----------------
let filters = document.querySelectorAll(".filter");
filters.forEach((ele) => {
  ele.addEventListener("click", () => {
    defaultclass(filters, "clicked");
    if (ele.textContent != "All skincare") {
      document.querySelector(".pagination").style.display = "none"
    } else {
      document.querySelector(".pagination").style.display = "block"
      
    }
    ele.classList.add("clicked");
    let value = ele.getAttribute("value");
    if (value == "") {
      display(output);
    } else {
      let filteredArr = output.filter((element) => {
        return element.category == value;
      });
      display(filteredArr);
    }
  });
});
function defaultclass(filters,className) {
  filters.forEach((element) => {
    element.classList.remove(className);
  });
}

// -----------------Sort---------------------

// function htL(out) {
  
//   let sorted =  out.sort((a, b) => {
//     if (a.price > b.price) {
//       return -1;
//     } else if (a.price < b.price) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   display(sorted);
// }

// function lth(out) {
//   let copy = [...out];
  
//   let sorted =  copy.sort((a, b) => {
   
//     if (a.price > b.price) {
//       return 1;
//     } else if (a.price < b.price) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   display(sorted);
//   console.log(output)
// }
 

// function def(out) {
  
//   display(out);

// }
// ----------------------pagination----------------------------------------
 
let pages = document.querySelectorAll(".page");
pages.forEach((page) => {
  page.addEventListener("click", () => {
    defaultclass(pages,"is-active");

    page.classList.add('is-active')
    event.preventDefault();
    let num = page.textContent;
    console.log(num)
    fetchData(num);

  })
})

debounceALl()
