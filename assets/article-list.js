const articleList = document.querySelector('.article-list__grid');
const sectionId = articleList.dataset.sectionId;
const pageCount = articleList.dataset.pageCount;
let nextPage = 2;
const loadMoreBtn = document.querySelector('.article-list__load-more');

async function getNewArticles () {
    const response = await fetch(window.location.pathname + `?sections=${sectionId}&page=${nextPage}`)
    const data = await response.json();
    return data;
}

async function loadMoreArticles () {
    loadMoreBtn.classList.add('loading');
    let section = document.createElement('div');
    let newArticles = await getNewArticles();
    section.innerHTML = newArticles[sectionId];
    const newArticlesHTML = section.querySelector('.article-list__grid').innerHTML;
    articleList.innerHTML += newArticlesHTML;
    nextPage++;

    if (!(nextPage <= pageCount)) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('loading');
    }
}

if (nextPage <= pageCount) {
    loadMoreBtn.addEventListener('click', loadMoreArticles);
} else {
    loadMoreBtn.classList.add('hidden')
}
