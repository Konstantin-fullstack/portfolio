document.write ("Последнее изменение: " + document. lastModified)


/* =========================
Получаем элементы HTML
========================= */

const openBtn = document.getElementById('open-feedback-btn');

const feedbackModal = document.getElementById('feedback-modal');

const thanksModal = document.getElementById('thanks-modal');

const closeBtn = document.querySelector('.close-btn');

const closeThanksBtn = document.getElementById('close-thanks-btn');

const form = document.getElementById('feedback-form');

/* =========================
Инициализация EmailJS
========================= */

// ВСТАВЬ СЮДА СВОЙ PUBLIC KEY ИЗ КАБИНЕТА EMAILJS

emailjs.init('D0Yn6zK0vwLwO_TBr');

/* =========================
Открытие формы
========================= */

openBtn.addEventListener('click', () => {

feedbackModal.classList.remove('hidden');

});

/* =========================
Закрытие формы по крестику
========================= */

closeBtn.addEventListener('click', () => {

feedbackModal.classList.add('hidden');

});

/* =========================
Закрытие формы
при клике вне окна
========================= */

feedbackModal.addEventListener('click', (e) => {

if (e.target === feedbackModal) {

feedbackModal.classList.add('hidden');

}

});

/* =========================
Отправка формы
========================= */

form.addEventListener('submit', (e) => {

// Запрещаем стандартную отправку формы
e.preventDefault();

// Находим кнопку отправки
const btn = e.target.querySelector(
'button[type="submit"]'
);

// Сохраняем исходный текст кнопки
const originalText = btn.innerText;

// Блокируем кнопку
btn.disabled = true;

// Меняем текст кнопки
btn.innerText = 'Отправка...';

/* =========================
Отправка через EmailJS
========================= */

emailjs.sendForm(

// ВСТАВЬ СВОЙ SERVICE ID
'service_oofga9v',

// ВСТАВЬ СВОЙ TEMPLATE ID
'template_t9drcd4',

// Передаём данные формы
form

).then(

// Успешная отправка
() => {

  // Очищаем форму
  form.reset();


  // Закрываем форму
  feedbackModal.classList.add('hidden');


  // Открываем окно «Спасибо»
  thanksModal.classList.remove('hidden');


  // Разблокируем кнопку
  btn.disabled = false;


  // Возвращаем исходный текст
  btn.innerText = originalText;

},


// Ошибка отправки
(err) => {

  console.error(err);

  alert(
    'Ошибка отправки. Попробуйте позже.'
  );


  // Разблокируем кнопку
  btn.disabled = false;


  // Возвращаем исходный текст
  btn.innerText = originalText;

}

);

});

/* =========================
Закрытие окна «Спасибо»
========================= */

closeThanksBtn.addEventListener('click', () => {

thanksModal.classList.add('hidden');

});

/* =========================
Закрытие окна «Спасибо»
при клике вне окна
========================= */

thanksModal.addEventListener('click', (e) => {

if (e.target === thanksModal) {

thanksModal.classList.add('hidden');

}

});

// Находим все кнопки вопросов FAQ
const buttons = document.querySelectorAll(".faq-question");

// Перебираем каждую найденную кнопку
buttons.forEach(function(button) {

    // Добавляем обработчик клика
    button.addEventListener("click", function() {

        // Получаем родительский элемент (.faq-item)
        // и переключаем класс active
        button.parentElement.classList.toggle("active");

    });

});