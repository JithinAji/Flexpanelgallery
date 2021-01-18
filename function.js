document.querySelectorAll(".panels").forEach((item) => {
  item.style.display = `flex`;
});

document.querySelectorAll(".panel").forEach((item) => {
  item.style.flexGrow = `1`;
});

document.querySelectorAll(".panel p").forEach((item, index) => {
  console.log(index % 3);
  item.style.display = `flex`;
  item.style.justifyContent = "center";
  item.style.height = `33vh`;
  item.style.alignItems = `center`;
  index % 3 != 1 ? (item.style.opacity = `0`) : ``;
});

document.querySelectorAll(".panel").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.parentElement.childNodes[1].style.opacity == 0) {
      event.target.parentElement.childNodes[1].style.opacity = `1`;
      event.target.parentElement.childNodes[5].style.opacity = `1`;
      event.target.parentElement.classList.add("open");
      event.target.parentElement.style.flexGrow = "5";
    } else {
      event.target.parentElement.childNodes[1].style.opacity = `0`;
      event.target.parentElement.childNodes[5].style.opacity = `0`;
      event.target.parentElement.classList.remove("open");
      event.target.parentElement.style.flexGrow = "1";
    }
  });
});
