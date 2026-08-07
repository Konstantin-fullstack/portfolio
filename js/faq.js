/* ==========================================
   North Star Developer
   faq.js

   Управление FAQ
========================================== */

"use strict";

/**
 * Инициализация FAQ.
 */
function initFAQ() {

    /* ==========================
       Получаем все вопросы
    ========================== */

    const faqItems = $$(".faq-item");

    if (!faqItems.length) {
        return;
    }

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) {
            return;
        }

        /* ==========================
           Клик по вопросу
        ========================== */

        question.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            /* ==========================
               Закрываем остальные
            ========================== */

            faqItems.forEach((faq) => {

                faq.classList.remove("active");

                const faqAnswer = faq.querySelector(".faq-answer");

                if (faqAnswer) {
                    faqAnswer.style.maxHeight = null;
                }

            });

            /* ==========================
               Если уже открыт —
               просто закрываем
            ========================== */

            if (isOpen) {
                return;
            }

            /* ==========================
               Открываем выбранный
            ========================== */

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        });

        /* ==========================
           Поддержка клавиатуры
        ========================== */

        question.addEventListener("keydown", (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                question.click();

            }

        });

    });

}