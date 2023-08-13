// let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
let cartArr = [
  {
    image1:
      "https://glossier-prod.imgix.net/products/glossier-futuredew-carousel-01.png?auto=compress,format&cs=srgb&w=540",
    image2:
      "https://glossier-prod.imgix.net/products/futuredew-9.jpg?auto=compress,format&cs=srgb&w=540",
    image3:
      "https://glossier-prod.imgix.net/files/glossier-futuredew-module-03.png?auto=compress,format&cs=srgb&w=540",
    video1:
      "https://player.vimeo.com/progressive_redirect/playback/815642486/rendition/480p/file.mp4?loc=external&signature=0574411195b6974759ec4c9046dd265d50671f804c539f26d1de22499ec0e2b6",
    name: "Futuredew",
    desc: "Oil serum hybrid",
    skinType: "Dry",
    rating: 2161,
    price: 26,
    category: "Treatments",
    bestSelling: "yes",
    quantity: 2,
  },
  {
    image1:
      "https://glossier-prod.imgix.net/products/glossier-mjc-carousel-01.png?auto=compress,format&cs=srgb&w=540",
    image2:
      "https://glossier-prod.imgix.net/products/glossier-mjc-carousel-08.png?auto=compress,format&cs=srgb&w=540",
    image3:
      "https://glossier-prod.imgix.net/files/glossier-mjc-ugc-02.png?auto=compress,format&cs=srgb&w=540",
    video1:
      "https://player.vimeo.com/progressive_redirect/playback/815656484/rendition/480p/file.mp4?loc=external&signature=6f6c77bf3ae648324b247d8ed8798e9119d4e5513bb53bb899929122e35eba41",
    name: "Milky Jelly Cleanser",
    desc: "Conditioning face wash",
    skinType: "Dry",
    rating: 4004,
    price: 19,
    category: "Cleansers",
    bestSelling: "yes",
    quantity: 4,
  },
  {
    image1:
      "https://glossier-prod.imgix.net/products/glossier-futuredew-carousel-01.png?auto=compress,format&cs=srgb&w=540",
    image2:
      "https://glossier-prod.imgix.net/products/futuredew-9.jpg?auto=compress,format&cs=srgb&w=540",
    image3:
      "https://glossier-prod.imgix.net/files/glossier-futuredew-module-03.png?auto=compress,format&cs=srgb&w=540",
    video1:
      "https://player.vimeo.com/progressive_redirect/playback/815642486/rendition/480p/file.mp4?loc=external&signature=0574411195b6974759ec4c9046dd265d50671f804c539f26d1de22499ec0e2b6",
    name: "Futuredew",
    desc: "Oil serum hybrid",
    skinType: "Dry",
    rating: 2161,
    price: 26,
    category: "Treatments",
    bestSelling: "yes",
    quantity: 1,
  },
  {
    image1:
      "https://glossier-prod.imgix.net/products/glossier-mjc-carousel-01.png?auto=compress,format&cs=srgb&w=540",
    image2:
      "https://glossier-prod.imgix.net/products/glossier-mjc-carousel-08.png?auto=compress,format&cs=srgb&w=540",
    image3:
      "https://glossier-prod.imgix.net/files/glossier-mjc-ugc-02.png?auto=compress,format&cs=srgb&w=540",
    video1:
      "https://player.vimeo.com/progressive_redirect/playback/815656484/rendition/480p/file.mp4?loc=external&signature=6f6c77bf3ae648324b247d8ed8798e9119d4e5513bb53bb899929122e35eba41",
    name: "Milky Jelly Cleanser",
    desc: "Conditioning face wash",
    skinType: "Dry",
    rating: 4004,
    price: 19,
    category: "Cleansers",
    bestSelling: "yes",
    quantity: 1,
  },
];

let totalPrice = cartArr.reduce((acc, el) => acc + el.quantity * el.price, 0);
let orgPrice = totalPrice;

document.querySelector("#total").textContent = `$ ${Math.round(
  totalPrice
).toFixed(2)}`;

document.querySelector("#sstotal").textContent = `Total : $${Math.round(
  totalPrice
).toFixed(2)}`;

document.querySelector("#subtotal").textContent = `$ ${Math.round(
  totalPrice
).toFixed(2)}`;
console.log(totalPrice);
displayCart(cartArr);

let content = document.querySelectorAll(".content");
content.forEach((div) => {
  div.addEventListener("click", () => {
    content.forEach((el) => {
      el.style.border = "1px solid gray";
      el.querySelector(".radio").checked = false;
    });

    div.style.border = "2px solid black";
    div.querySelector(".radio").checked = true;

    let extraCharge = div
      .querySelector("[data-charge]")
      .getAttribute("data-charge");
    let newTotal = parseInt(extraCharge) + parseInt(orgPrice);

    totalPrice = newTotal;
    console.log(totalPrice);
    document.querySelector("#total").textContent = `$ ${Math.round(
      newTotal
    ).toFixed(2)}`;

    document.querySelector("#sstotal").textContent = `Total : $${Math.round(
      totalPrice
    ).toFixed(2)}`;

    document.querySelector("#shipping").textContent = `$ ${Math.round(
      extraCharge
    ).toFixed(2)}`;
  });
});

let date = new Date();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let day = date.getDate();
console.log(day);
let month = date.getMonth();
document.querySelector("#standard-delivery").textContent = `${months[month]} ${
  day + 7
} - ${day + 10}`;

document.querySelector("#expedited-delivery").textContent = `${months[month]} ${
  day + 3
}`;

document.querySelector("#overnight-delivery").textContent = `${months[month]} ${
  day + 1
}`;

// Appending cart items;

function displayCart(arr) {
  arr.forEach((el, i) => {
    let div = document.createElement("div");
    div.setAttribute("id", "eachCardDiv");

    let leftCartDiv = document.createElement("div");
    leftCartDiv.setAttribute("id", "leftCartDiv");
    let firstDiv = document.createElement("div");
    firstDiv.setAttribute("id", "cartImg");
    let quantityDiv = document.createElement("div");
    quantityDiv.setAttribute("id", "quantityDiv");
    quantityDiv.textContent = el.quantity;
    let img = document.createElement("img");
    img.setAttribute("src", el.image1);
    // leftCartDiv.append(img, name);
    firstDiv.append(img, quantityDiv);

    let secondDiv = document.createElement("div");
    secondDiv.setAttribute("id", "secDiv");
    let name = document.createElement("h4");
    name.textContent = el.name;
    let desc = document.createElement("p");
    desc.textContent = el.desc;

    secondDiv.append(name, desc);
    leftCartDiv.append(firstDiv, secondDiv);

    let rightCartDiv = document.createElement("div");
    let price = document.createElement("p");
    price.setAttribute("id", "price");
    let cost = Math.round(el.price);
    price.textContent = `$ ${cost.toFixed(2)}`;
    rightCartDiv.append(price);

    div.append(leftCartDiv, rightCartDiv);
    document.querySelector("#cart-items").append(div);
  });
}
document.querySelector("#alert button").addEventListener("click", () => {
  document.querySelector("#alert-container").style.display = "none";
});

document.querySelector("#payment-btn").addEventListener("click", () => {
  event.preventDefault();

  let firstName = document.querySelector("#first-name").value;
  let lastName = document.querySelector("#last-name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let country = document.querySelector("#country").value;
  let address = document.querySelector("#address").value;
  console.log(address);
  let city = document.querySelector("#city").value;
  let state = document.querySelector("#state").value;
  let zipcode = document.querySelector("#zipcode").value;
  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    phone == "" ||
    country == "" ||
    address == "" ||
    city == "" ||
    state == "" ||
    zipcode == ""
  ) {
    // alert("Please Fill all the required details!");
    document.querySelector("#alert-container").style.display = "block";
    return;
  }

  let deliveryDetails = {
    email: email,
    country: country,
    address: address,
    city: city,
    state: state,
    zipcode: zipcode,
    orgPrice: orgPrice,
    finalPrice: totalPrice,
  };
  // console.log(deliveryDetails);
  localStorage.setItem("deliveryDetails", JSON.stringify(deliveryDetails));

  window.location.href = "payment.html";
});
