document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".catalog-button");
  const hiddenItems = document.querySelectorAll(".catalog-item.hidden");


  const isMobile = () => window.innerWidth < 768;

  
  button.addEventListener("click", () => {
    if (!isMobile()) return; 

    let count = 0;

    hiddenItems.forEach((item) => {
      if (item.classList.contains("hidden") && count < 2) {
        item.classList.remove("hidden");
        count++;
      }
    });

    if (!document.querySelector(".catalog-item.hidden")) {
      button.style.display = "none";
    }
  });
});