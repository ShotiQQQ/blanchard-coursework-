document.addEventListener('DOMContentLoaded', function () {

  /* DropDown */
  const params = {
    btnClassName: "header__down-btn",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();

  /* Swiper */

  const swiper = new Swiper('.hero__slider', {
    allowTouchMove: false,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 3000
    },
  });


  /* Choices(Select) */
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });

/* gallery Swiper */
let gallerySlider = new Swiper(".gallery__content-right", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination--right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__btns--next",
    prevEl: ".gallery__btns--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    1025: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 25
    },

    1700: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

  /* document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
        btn.classList.remove('tabs-nav__btn--active')});
        e.currentTarget.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
          tabsBtn.classList.remove('tabs-item--active')});
          document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    })
  }) */


  $(".accordion").accordion({
    heightStyle: "content",
    active: 0,
    collapsible: true
    });



const eventsSlider = new Swiper(".events__slider", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".events__button-next",
    prevEl: ".events__button-prev"
  },

  pagination: {
    el: '.events__swiper-pagination',
    clickable: true,
    },

  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    590: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

tippy('#tooltip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'violet'
});

tippy('#tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'violet'
});

tippy('#tooltip-3', {
  content: 'В стремлении повысить качество',
  theme: 'violet'
});


const projectSlider = new Swiper(".projects__swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  rewind: true,
  navigation: {
    nextEl: ".projects__button-next",
    prevEl: ".projects__button-prev"
  },

  breakpoints: {
    1501: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    691: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76327770325011, 37.60932808335869],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
          },
          {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition:  { top: "200px", right: "20px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "120px", right: "20px" }
          }
        );

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark([55.76327770325011, 37.60932808335869], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map__icon.svg',
          iconImageSize: [20, 20],
        })

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('searchControl');
    }

    document.querySelector('.header__burger').addEventListener('click', () => {
      document.querySelector('.header__up-nav--mobile').classList.toggle('mobile-active');
    })

    document.querySelector('.header__up-button').addEventListener('click', () => {
      document.querySelector('.header__up-nav--mobile').classList.toggle('mobile-active');
    })

    document.querySelector('#search').addEventListener('click', () => {
      document.querySelector('.header__search--mobile').classList.toggle('header__search--mobile-active');
      document.querySelector('#search').classList.toggle('search__mobile--active');
    })

    document.querySelector('.header__search--close').addEventListener('click', () => {
      document.querySelector('.header__search--mobile').classList.toggle('header__search--mobile-active');
      document.querySelector('#search').classList.toggle('search__mobile--active');
    })

});
