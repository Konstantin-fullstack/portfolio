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
// querySelectorAll возвращает список всех элементов
// с классом .faq-question

const buttons = document.querySelectorAll(".faq-question");


// Находим все карточки FAQ
// Каждая карточка содержит:
// - кнопку с вопросом
// - блок с ответом

const items = document.querySelectorAll(".faq-item");


// Перебираем все кнопки вопросов
// Для каждой кнопки добавляем обработчик клика

buttons.forEach(function(button) {


    // addEventListener отслеживает событие "click"
    // Когда пользователь нажимает на вопрос,
    // запускается функция внутри

    button.addEventListener("click", function() {


        // parentElement поднимается на один уровень вверх по DOM

        // Наша структура:
        //
        // button.faq-question
        //        |
        //        ↓
        // div.faq-item
        //
        // Поэтому получаем карточку,
        // к которой относится нажатый вопрос

        const item = button.parentElement;



        // Проверяем, есть ли у карточки класс active

        // classList.contains("active")
        // возвращает:
        //
        // true  — если класс есть
        // false — если класса нет

        // То есть переменная отвечает на вопрос:
        //
        // "Этот FAQ сейчас открыт?"

        const isOpen = item.classList.contains("active");



        // Если вопрос уже открыт

        if (isOpen) {


            // Убираем класс active

            // После этого CSS скрывает ответ

            item.classList.remove("active");


        } else {


            // Если вопрос был закрыт,
            // сначала закрываем все остальные вопросы


            items.forEach(function(item) {


                // Удаляем active у каждой карточки

                // В итоге все ответы закрываются

                item.classList.remove("active");


            });



            // Теперь открываем только тот вопрос,
            // по которому пользователь кликнул

            item.classList.add("active");


        }


    });


});

/* ==========================================
   North Star Developer Journal
========================================== */



`Север не указывает цель.

Он помогает не потерять направление.

North Star Developer —
это не про технологии.

Это про человека,
который однажды решил
создавать полезные вещи.
`;

logo.addEventListener("click", ()=>{

    modal.classList.add("active");

    typewriter.textContent="";

    manifest.classList.add("hidden");

    let i=0;

    const timer=setInterval(()=>{

        typewriter.textContent+=intro[i];

        i++;

        if(i===intro.length){

            clearInterval(timer);

            setTimeout(()=>{

                manifest.classList.remove("hidden");

            },800);

        }

    },35);

});

closeBtn.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click",(event)=>{

    if(event.target===modal){

        modal.classList.remove("active");

    }

});