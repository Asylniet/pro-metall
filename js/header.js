class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    window.addEventListener("load", () => {
      const hamburger = document.querySelector(".hamburger");
      const header = document.querySelector("header");

      const languageOptions = document.querySelectorAll(".language-option");
      languageOptions.forEach((option) => {
        option.addEventListener("click", () => {
          document
            .querySelector(".language-option.clr-primary")
            .classList.remove("clr-primary");
          option.classList.add("clr-primary");
        });
      });

      hamburger.addEventListener("click", () => {
        if (header.classList.contains("open")) {
          header.classList.remove("open");
          hamburger.classList.remove("open");
        } else {
          header.classList.add("open");
          hamburger.classList.add("open");
        }
      });
    });

    const pathname = this.getAttribute("path");
    this.innerHTML = `
    <header>
    <div class="header-main-wrapper">
      <div class="header-main">
        <a href="/index.html" class="logo flex">
          <img
            src="/assets/images/logo.svg"
            alt="Тараз Металл Инвест"
            class="logo-img"
          />
          <div class="flex column start">
            <div class="company-name">
              <img src="/assets/images/taraz.svg" alt="" />
            </div>
            <div class="company-name-descr">
              <img src="/assets/images/metall.svg" alt="" />
            </div>
          </div>
        </a>
        <div class="language flex ff-inter fw-medium g10">
          <div class="language-option clr-primary">RU</div>
          <div class="language-option">QAZ</div>
        </div>
        <div class="flex column start call g10">
          <a href="tel:+77057899485" class="fw-bold fs-500 call-link clr-dark"> +7 705 789 94 85 </a>
          <a href="#" class="clr-primary order-call">Заказать звонок</a>
        </div>
        <a href="https://go.2gis.com/o2b05" target="_blank" class="address fs-500 fw-bold">
          г. Тараз, <br />
          ул. Мамбет Батыра, 15
        </a>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <nav>
      <div class="nav-wrapper fw-medium ff-inter">
        <a href="/index.html" class="nav-option ${
          pathname == "/" && "selected"
        }">Главная</a>
        <a href="/pages/about.html" class="nav-option ${
          pathname == "about" && "selected"
        }">О компании</a>
        <a href="/pages/products.html" class="nav-option ${
          pathname == "products" && "selected"
        }">Продукция</a>
        <a href="/pages/contacts.html" class="nav-option ${
          pathname == "contacts" && "selected"
        }">Контакты</a>
      </div>
    </nav>
  </header>
        `;
  }
}

customElements.define("header-component", Header);
