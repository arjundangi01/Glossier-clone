import { navbar, displayCart, showCart,debounceALl } from "../nav-comp/nav.js";

window.addToCart = addToCart;
window.reduceQuantity = reduceQuantity;
window.addQuantity = addQuantity;
window.deleteItem = deleteItem;
window.moveToDetailPage = moveToDetailPage;
// window.hover = hover;
document.getElementById("navbar").innerHTML = navbar();

fetchData(1);
let output;
let tempArr;
async function fetchData(page) {
  
  try {
    let response = await fetch(`https://project-1-1qlk.onrender.com/glossier?_page=${page}&_limit=12`);
    output = await response.json();
   tempArr = [...output]
    display(output);
  } catch (error) {}
}

// -----------------  products display function start-------------------

function display(array) {
  let filteredArrayCopy = [...array];
  sortAll(filteredArrayCopy, array);

  let container = document.getElementById("container");
  container.innerHTML = "";

  array.forEach((element, index, array) => {
    container.innerHTML += ` 
    <div class="prod-card">
      <div onclick="moveToDetailPage(${index})" class="prod-img-div">
          <img   src="${element.image1}" alt="">
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

// -----------------  products display function end-------------------

// function hover(index) {
//  event.target.src = output[index].image2

//   console.log("first")
// }
// function hover2(index) {
//  event.target.src = output[index].image1

//   console.log("first")
// }


// --------------------------------------------------------
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
// --------------------------------------------------------



// ------------------cart functions need in all file (start)---------------

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
// ------------------cart functions need in all file (end) ---------------



// -------------------filter start--------------------------
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
      tempArr = [...filteredArr]

      display(filteredArr);
    }
  });
});
function defaultclass(filters,className) {
  filters.forEach((element) => {
    element.classList.remove(className);
  });
}

// -------------------filter end--------------------------




// -----------------Sort start---------------------

let sortBtn = document.getElementById("sortBtn");
let sortType = document.getElementById("sort-type");
var sortOptions =  document.getElementById("sort-options")
sortBtn.addEventListener("click", () => {
  sortOptions.style.display ="block"
})



function sortAll(copyArr,array){
  let featured = document.getElementById("featured")
  let htL = document.getElementById("HtL")
  let ltH = document.getElementById("Lth")

  htL.addEventListener("click", () => {
    HTL(copyArr)
    sortOptions.style.display = "none"
    sortType.textContent = "(" + htL.textContent + ")"

  })
  ltH.addEventListener("click", () => {
    LTH(copyArr)
    sortOptions.style.display = "none"
    sortType.textContent =  "(" + ltH.textContent +")"
    

  })
  featured.addEventListener("click", () => {
    display(tempArr);
  sortOptions.style.display ="none"
  sortType.textContent = "(" + featured.textContent +")"

  })
}
function HTL(arr) {
  
   arr.sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    } else {
      return 0;
    }
  });
  display(arr);
}

function LTH(arr) {

  
  arr.sort((a, b) => {
   
    if (a.price > b.price) {
      return 1;
    } else if (a.price < b.price) {
      return -1;
    } else {
      return 0;
    }
  });
  display(arr);
  
}
 

// function def(out) {
  
//   

// }


// -----------------Sort end---------------------




// ----------------------pagination start----------------------------------------
 
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
// ----------------------pagination end----------------------------------------

debounceALl()  // exported from nav-components

let user = document.getElementById("user-name");
let logoutBtn = document.getElementById("logout-btn");
user.innerHTML = "Arjun"
logoutBtn.addEventListener("click", () => {
  user.innerHTML = `<i class="fa-regular fa-user" style="color: #000000">
  </i>`
  
})



// -----------  product detail page -----------

function moveToDetailPage(index) {
  let singleItem = output[index]
  localStorage.setItem("singleItem", JSON.stringify(singleItem));
  console.log(singleItem)
}