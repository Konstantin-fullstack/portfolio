/* ==========================================
   North Star Developer
   journal.js

   Интерактивный дневник
========================================== */

"use strict";

/**
 * Инициализация дневника.
 */
function initJournal() {

    const logo = $("#logoButton");
    const modal = $("#journal-modal");
    const closeButton = $("#closeModal");

    const intro = $("#intro");
    const manifesto = $("#manifest");
    const continueButton = $("#continueJourney");

    if (
        !logo ||
        !modal ||
        !closeButton ||
        !intro ||
        !manifesto ||
        !continueButton
    ) {
        return;
    }

    logo.addEventListener("click", openJournal);

    closeButton.addEventListener("click", closeJournal);

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            closeJournal();
        }

    });

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeJournal();

        }

    });

    continueButton.addEventListener("click", closeJournal);

}

/* ==========================================
   Открытие дневника
========================================== */

function openJournal() {

    const modal = $("#journal-modal");

    const intro = $("#intro");

    const manifesto = $("#manifest");

    document.body.classList.add("lock-scroll");

    modal.classList.add("active");

    intro.textContent = "";

    manifesto.classList.add("hidden");

    typeWriter();

}

/* ==========================================
   Закрытие
========================================== */

function closeJournal() {

    document.body.classList.remove("lock-scroll");

    $("#journal-modal").classList.remove("active");

}

/* ==========================================
   Эффект печатной машинки
========================================== */

function typeWriter() {

    const intro = $("#intro");

    const manifesto = $("#manifest");

    const text =
`Север не указывает цель.

Он помогает не потерять направление.

North Star Developer —
это дневник человека,
который решил изменить свою жизнь.

Не через громкие слова.

А через ежедневную работу.

Строка за строкой.

Проект за проектом.`;

    let index = 0;

    intro.textContent = "";

    const timer = setInterval(() => {

        intro.textContent += text[index];

        index++;

        if (index >= text.length) {

            clearInterval(timer);

            showManifest();

        }

    }, 28);

}

/* ==========================================
   Показ манифеста
========================================== */

function showManifest() {

    const manifesto = $("#manifest");

    manifesto.classList.remove("hidden");

    const items = manifesto.querySelectorAll("li");

    items.forEach((item) => {

        item.style.opacity = 0;

        item.style.transform = "translateY(20px)";

    });

    items.forEach((item, index) => {

        setTimeout(() => {

            item.style.transition = ".5s";

            item.style.opacity = 1;

            item.style.transform = "translateY(0)";

        }, index * 350);

    });

}