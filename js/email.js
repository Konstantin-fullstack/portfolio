/* ==========================================
   North Star Developer
   email.js

   Работа с формой обратной связи и EmailJS
========================================== */

"use strict";

/**
 * Инициализация формы обратной связи.
 */
function initEmail() {

    /* ==========================
       Получаем элементы
    ========================== */

    const openButton = $("#open-feedback-btn");
    const feedbackModal = $("#feedback-modal");
    const thanksModal = $("#thanks-modal");

    const closeButton = $(".close-btn");
    const closeThanksButton = $("#close-thanks-btn");

    const form = $("#feedback-form");

    /* ==========================
       Если формы нет — выходим
    ========================== */

    if (!feedbackModal || !form) {
        return;
    }

    /* ==========================
       Открытие окна
    ========================== */

    if (openButton) {

        openButton.addEventListener("click", () => {

            feedbackModal.classList.remove("hidden");

        });

    }

    /* ==========================
       Закрытие окна
    ========================== */

    if (closeButton) {

        closeButton.addEventListener("click", () => {

            feedbackModal.classList.add("hidden");

        });

    }

    /* ==========================
       Закрытие по клику вне окна
    ========================== */

    feedbackModal.addEventListener("click", (event) => {

        if (event.target === feedbackModal) {

            feedbackModal.classList.add("hidden");

        }

    });

    /* ==========================
       Закрытие окна благодарности
    ========================== */

    if (closeThanksButton && thanksModal) {

        closeThanksButton.addEventListener("click", () => {

            thanksModal.classList.add("hidden");

        });

    }

    /* ==========================
       Отправка формы
    ========================== */

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        try {

            await emailjs.sendForm(

                // "YOUR_SERVICE_ID"
                'service_oofga9v',
                // "YOUR_TEMPLATE_ID"
               'template_t9drcd4' ,
                form,
                // "YOUR_PUBLIC_KEY"
                'D0Yn6zK0vwLwO_TBr'

            );

            feedbackModal.classList.add("hidden");

            if (thanksModal) {

                thanksModal.classList.remove("hidden");

            }

            form.reset();

        } catch (error) {

            console.error("Ошибка EmailJS:", error);

            alert("Не удалось отправить сообщение. Попробуйте ещё раз.");

        }

    });

}