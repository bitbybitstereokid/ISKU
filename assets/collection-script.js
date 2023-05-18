function loadMoreClick() {
    let postsOnPage = document.querySelector('#product-grid');
    let loadNextPage = document.querySelector('.next-page__load');
    let loadNextPageValue = loadNextPage.querySelector('.url_page').value;
    let loadTotalPage = loadNextPage.querySelector('.total__page').value;
    let loaderButton = document.querySelector('.load-more-posts');
    let collectionBlock = document.querySelector('#ProductGridContainer .collection');
    collectionBlock.classList.add('loading');

    fetch(loadNextPageValue)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = data;

            let titlePage = newDiv.querySelector('title').innerText;
            let newPosts = newDiv.querySelectorAll('#product-grid .grid__item');

            newPosts.forEach((div) => {
                postsOnPage.append(div);
            });

            let newLoadNextPage = newDiv.querySelector('.next-page__load');
            let newLoadNextPageValue = newLoadNextPage.querySelector('.url_page').value;
            let newLoadCurrentPage = newLoadNextPage.querySelector('.current__page').value;

            loadNextPage.querySelector('.url_page').value = newLoadNextPageValue;

            // window.history.replaceState(null, titlePage, loadNextPageValue);
            // document.title = titlePage;
            collectionBlock.classList.remove('loading');

            let postsOnPages = document.querySelectorAll('#product-grid .grid__item');
            let currentElements = document.querySelector('.wrap-elements-pagination .currentElements');
            currentElements.innerText = postsOnPages.length;

            if (newLoadCurrentPage === loadTotalPage) {
                loaderButton.remove();
            }
        });
}

let btnFilter = document.querySelector('.facets-custom__filter > button');
let btnFilterClose = document.querySelector('.facets__heading--title button')
let modalBackdrop = document.querySelector('.facets-container .mobile_backdrop')
let mobileFilter = document.querySelector('.mobile-facets__filter');

btnFilter.addEventListener('click', function () {
    mobileFilter.classList.add('is-active');
    modalBackdrop.classList.add('is-active');
    document.querySelector('html').classList.add('overflow-hidden');
    document.querySelector('body').classList.add('overflow-hidden');
});

btnFilterClose.addEventListener('click', function () {
    mobileFilter.classList.remove('is-active');
    modalBackdrop.classList.remove('is-active');
    document.querySelector('html').classList.remove('overflow-hidden');
    document.querySelector('body').classList.remove('overflow-hidden');
});

modalBackdrop.addEventListener('click', function () {
    mobileFilter.classList.remove('is-active');
    modalBackdrop.classList.remove('is-active');
    document.querySelector('html').classList.remove('overflow-hidden');
    document.querySelector('body').classList.remove('overflow-hidden');
});