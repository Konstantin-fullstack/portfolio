/* ==========================================
   North Star Developer
   animations.js

   Анимации появления элементов
   при прокрутке страницы
========================================== */

"use strict";

/**
 * Инициализация анимаций.
 */
function initAnimations() {

    const animatedElements =
        document.querySelectorAll("[data-animation]");

    if (!animatedElements.length) {
        return;
    }

    /* ==========================
       Проверяем поддержку
       IntersectionObserver
    ========================== */

    if (!("IntersectionObserver" in window)) {

        animatedElements.forEach((element) => {

            element.classList.add("is-visible");

        });

        return;
    }

    /* ==========================
       Создаём Observer
    ========================== */

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.15
        }
    );

    /* ==========================
       Начинаем наблюдение
    ========================== */

    animatedElements.forEach((element) => {

        observer.observe(element);

    });

}