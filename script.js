let secondDiv = document.getElementById("second-div");
let hoverDiv = document.getElementById("hover-div");
let user = document.getElementById("user");
let share = document.querySelector(".share");
let shareContainer = document.querySelector(".share-container");

const mediaQuery = window.matchMedia("(min-width: 768px)");

document.getElementById("toggleBtn1").onclick = function () {
  if (secondDiv.style.display === "none" && window.innerWidth < 768) {
    user.style.display = "none";
    secondDiv.style.display = "grid";
    
  } else {
    secondDiv.style.display = "none";
  }
};

document.getElementById("toggleBtn2").onclick = function () {
  if (user.style.display === "none" && window.innerWidth < 768) {
    user.style.display = "grid";
    secondDiv.style.display = "none";
  } else {
    user.style.display = "none";
  }
};

shareContainer.addEventListener("mouseover", function () {
  if (window.innerWidth > 1024) {
    hoverDiv.style.display = "grid";
    shareContainer.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
    share.style.fill = "white";
  }
});

shareContainer.addEventListener("mouseout", function () {
  if (window.innerWidth > 1024) {
    hoverDiv.style.display = "none";
    shareContainer.style.backgroundColor = "var(--Light-Grayish-Blue)";
  }
});
