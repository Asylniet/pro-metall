window.addEventListener("load", () => {
  if (window.innerWidth < 500) {
    document
      .querySelector(".hero-part-after")
      .appendChild(document.querySelector(".moveOn500"));
  }
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    if (window.location.search.length > 0) {
      if (document.querySelector(".option.selected") && index === 0) {
        document.querySelector(".option.selected").classList.remove("selected");
        document.querySelector(".tab.active").classList.remove("active");
      }

      if (option.getAttribute("tab") == window.location.search.substring(5)) {
        option.classList.add("selected");
        document
          .querySelector(`.tab[tab=${option.getAttribute("tab")}`)
          .classList.add("active");
      }
    }

    option.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".option.selected").classList.remove("selected");
      document.querySelector(".tab.active").classList.remove("active");
      document
        .querySelector(`.tab[tab=${option.getAttribute("tab")}`)
        .classList.add("active");
      option.classList.add("selected");
    });
  });
});
