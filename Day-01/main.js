const ReadMoreBtn = document.querySelector(".readMore__Btn");
const text = document.querySelector(".text");

ReadMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show_more");
  if (ReadMoreBtn.innerText === "Read More") {
    ReadMoreBtn.innerText = "Read Less";
  } else {
    ReadMoreBtn.innerText = "Read More";
  }
});
