/* ==========================================
   North Star Developer
   navigation.js

   Управление навигацией сайта
========================================== */

"use strict";

/**
 * Инициализация навигации.
 */
function initNavigation() {

    const nav = document.querySelector(".nav");

    if (!nav) {
        return;
    }

    const links = nav.querySelectorAll("a");

    if (!links.length) {
        return;
    }

    /* ==========================
       Определяем текущую страницу
    ========================== */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    links.forEach((link) => {

        const linkPage =
            link.getAttribute("href")?.split("/").pop();

        if (linkPage === currentPage) {

            link.classList.add("active");

            link.setAttribute("aria-current", "page");

        }

    });

}