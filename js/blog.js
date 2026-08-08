// ========================================
// BLOG DATA
// ========================================

const articles = [
    {
        id: "javascript",
        number: 1,
        date: "08.08.2026",
        category: "JavaScript",

        title:
            "Как я изучал JavaScript и чуть не проиграл битву с одной переменной",

        excerpt:
            "История о JavaScript, первой книге и нескольких попытках понять, что вообще происходит."
    }
];


// ========================================
// DOM ELEMENTS
// ========================================

const articlesList = document.querySelector("#articles-list");


// ========================================
// RENDER ARTICLES
// ========================================

function renderArticles(articlesToRender) {

    articlesList.innerHTML = "";

    articlesToRender.forEach(article => {

        const articleCard = document.createElement("article");

        articleCard.classList.add("article-card");

        articleCard.innerHTML = `
            <p class="article-number">
                📖 Запись №${article.number}
            </p>

            <div class="article-meta">

                <time>
                    ${article.date}
                </time>

                <span>
                    ${article.category}
                </span>

            </div>

            <h2>
                ${article.title}
            </h2>

            <p class="article-excerpt">
                ${article.excerpt}
            </p>

            <a
                href="article.html?id=${article.id}"
                class="article-link">

                Читать запись →

            </a>
        `;

        articlesList.append(articleCard);
    });
}


// ========================================
// INITIAL RENDER
// ========================================

renderArticles(articles);