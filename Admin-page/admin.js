var form = document.getElementById("form");
form.addEventListener("submit", () => {
  event.preventDefault();
  sendData();
  // submitBtn.disabled = true;
});

async function sendData() {
  try {
    let name = form.name.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let skinType = form.skinType.value;
    let category = form.category.value;
    let image1 = form.img1.value;
    let image2 = form.img2.value;
    let image3 = form.img3.value;
    let video1 = form.vdo.value;
    let bestSelling = "yes";
    let quantity = 1;
    let rating = Math.round(Math.random() * 10);
    if (
      name == "" ||
      desc == "" ||
      price == "" ||
      category == "" ||
      img1 == "" ||
      img2 == "" ||
      img3 == "" ||
      vdo == ""
    ) {
    } else {
      let newObj = {
        image1,
        image2,
        image3,
        video1,
        name,
        desc,
        skinType,
        rating,
        price,
        category,
        bestSelling,
        quantity
      };

      let response = await fetch(
        `https://project-1-1qlk.onrender.com/glossier`,
        {
          method: "POST",
          body: JSON.stringify(newObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
