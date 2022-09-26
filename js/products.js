window.addEventListener("load", () => {
    if (window.innerWidth < 500) {
      document
        .querySelector(".hero-part-after")
        .appendChild(document.querySelector(".moveOn500"));
    }
  });