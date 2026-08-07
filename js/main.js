/* ==========================================
   North Star Developer
   main.js

   Общие функции и запуск приложения
========================================== */

"use strict";

/**
 * Возвращает первый найденный элемент.
 * @param {string} selector CSS-селектор.
 * @returns {Element|null}
 */
const $ = (selector) => document.querySelector(selector);

/**
 * Возвращает список найденных элементов.
 * @param {string} selector CSS-селектор.
 * @returns {NodeListOf<Element>}
 */
const $$ = (selector) => document.querySelectorAll(selector);

/**
 * Проверяет существование элемента.
 * @param {Element|null} element
 * @returns {boolean}
 */
const exists = (element) => element !== null;

/**
 * Запуск всех модулей сайта.
 */
document.addEventListener("DOMContentLoaded", () => {

    if (typeof initNavigation === "function") {
        initNavigation();
    }

    if (typeof initFAQ === "function") {
        initFAQ();
    }

    if (typeof initEmail === "function") {
        initEmail();
    }

    if (typeof initJournal === "function") {
        initJournal();
    }

    if (typeof initAnimations === "function") {
        initAnimations();
    }

});