class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="aboutUs">
    <div class="aboutUs-wrapper container flex column start">
      <div class="fs-600 fw-bold clr-accent title">О компании</div>
      <div class="flex start wrap">
        <div class="statisticBlock">
          <div class="number">12</div>
          <div class="descr">
            лет <br />
            на рынке
          </div>
        </div>
        <div class="statisticBlock">
          <div class="number">700+</div>
          <div class="descr">
            довольных <br />
            клиентов
          </div>
        </div>
        <div class="statisticBlock">
          <div class="number">150+</div>
          <div class="descr">
            наименований <br />
            товаров
          </div>
        </div>
      </div>
      <div class="aboutUs-descr ff-inter">
        ТОО «Тараз металл инвест» представляет широкий ассортимент
        металлопродукции: арматура, круг стальной, катанка, прокат листовой
        – горячекатаный, холоднокатаный, рифленый, просечно-вытяжной, трубы
        профильные, трубы водогазопроводные, трубы электросварные, сталь
        угловая, швеллер, балка двутавровая, полоса, квадрат, проволока
        ВР-1, проволока вязальная, сетка кладочная. Мы объединяем десятки
        производителей продукции из металла, вы можете приобрести товар из
        наличия или заказать в сжатые сроки.
      </div>
    </div>
  </section>
  <section class="profit container flex column">
    <div class="title fs-700 fw-bold clr-neutral center">
      Почему работать с нами - выгодно?
    </div>
    <div class="flex column g20">
      <div class="flex wrap profit-row">
        <div class="profit-block flex start g10">
          <img src="/assets/images/profit/profit 1.svg" alt="" />
          <div class="flex column start">
            <div class="profit-title">Высокое качество</div>
            <div class="profit-descr">
              Сертифицированная и прошедшая строгий контроль качества
              продукция от лучших производителей.
            </div>
          </div>
        </div>
        <div class="profit-block flex start g10">
          <img src="/assets/images/profit/profit 2.svg" alt="" />
          <div class="flex column start">
            <div class="profit-title">Широкий ассортимент</div>
            <div class="profit-descr">
              Мы предлагаем широкий перечень продукции в полном соответствии
              с ГОСТ.
            </div>
          </div>
        </div>
        <div class="profit-block flex start g10">
          <img src="/assets/images/profit/profit 3.svg" alt="" />
          <div class="flex column start">
            <div class="profit-title">Честная торговля</div>
            <div class="profit-descr">
              Мы гарантируем нашим клиентам предельно точный вес и качество
              заказанного товара.
            </div>
          </div>
        </div>
      </div>

      <div class="flex wrap profit-row">
        <div class="profit-block flex start g10">
          <img src="/assets/images/profit/profit 4.svg" alt="" />
          <div class="flex column start">
            <div class="profit-title">Точность сроков</div>
            <div class="profit-descr">
              Оперативная доставка товара в любую точку г. Тараз и
              Жамбылской области, с гарантией 100 % сохранности его рабочих
              характеристик.
            </div>
          </div>
        </div>
        <div class="profit-block flex start g10">
          <img src="/assets/images/profit/profit 5.svg" alt="" />
          <div class="flex column start">
            <div class="profit-title">Партнерство</div>
            <div class="profit-descr">
              Постоянным клиентам Компании предлагаются особые условия
              оплаты и работы.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="partners container flex column">
    <div class="title fs-700 fw-bold center">Наши партнеры</div>
    <div class="flex wrap">
      <div class="partner">
        <img src="/assets/images/partners/partner-1.jpg" alt="" />
      </div>
      <div class="partner">
        <img src="/assets/images/partners/partner-2.jpg" alt="" />
      </div>
      <div class="partner">
        <img src="/assets/images/partners/partner-3.jpg" alt="" />
      </div>
      <div class="partner" id="askQuestion">
        <img src="/assets/images/partners/partner-4.jpg" alt="" />
      </div>
    </div>
  </section>
  <section class="question container">
    <div class="flex wrap question-flex">
      <div class="flex column question-part">
        <div class="title fs-700 fw-bold center">Задать вопрос</div>
        <div class="ff-inter center fs-18">
          Заполните форму и наши специалисты свяжутся с вами в ближайшее
          время
        </div>
        <form action="#" class="flex column g10">
          <input type="text" placeholder="Ваше имя" />
          <input type="tel" placeholder="Ваше телефон" />
          <textarea placeholder="Сообщение"></textarea>
          <button type="submit" class="button">Отправить</button>
        </form>
      </div>

      <div class="flex column kaspi">
        <div class="title fs-700 fw-bold center">Kaspi QR</div>
        <div class="fw-bold fs-500">Сканируйте и платите</div>
        <img src="/assets/images/kaspi.jpg" alt="Kaspi QR" />
      </div>
    </div>
  </section>
  <section class="container toStart">
    <a href="#top" class="circle">
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.6938 11.4031L9 4.72397L2.30625 11.4031L0.25 9.34689L9 0.596887L17.75 9.34689L15.6938 11.4031Z"
          fill="#F4F0F8"
        />
      </svg>
    </a>
  </section>
</main>
<section class="preFooter">
  <div class="container">
    <img src="/assets/images/full logo.png" alt="logo" />
  </div>
</section>
<footer class="flex start">
  <div class="container">
    <div class="footer-wrapper flex wrap">
      <div class="phones flex start g20 pos-rel">
        <img src="/assets/icons/call.svg" alt="" class="tel" />
        <div class="flex column g10 start">
          <a href="tel:+77057899485">+7 705 789 94 85</a>
          <a href="tel:++77057899482">+7 705 789 94 82</a>
          <a href="tel:+77057899487">+7 705 789 94 87</a>
          <a href="tel:+77262523063">+7 (7262) 52 30 63</a>
        </div>
      </div>
      <div class="footer-mid flex column start">
        <div class="flex g20 start pos-rel">
          <img src="/assets/icons/location.svg" alt="" class="tel" />
          <a href=""
            >г. Тараз, <br />
            ул. Мамбет Батыра, 15</a
          >
        </div>
        <div class="flex column social g10">
          <span class="fs-18">Наши соцсети</span>
          <div class="flex start">
            <img src="/assets/icons/facebook.svg" alt="" />
            <img src="/assets/icons/instagram.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex column start g20 links clr-neutral">
        <a href="#">Главная</a>
        <a href="#">О компании</a>
        <a href="#">Продукция</a>
        <a href="#">Контакты</a>
      </div>
    </div>
  </div>
</footer>
        `;
  }
}

customElements.define("footer-component", Footer);
