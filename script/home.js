let clip = document.querySelectorAll(".video1");
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseover", function (e) {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
  });
}

