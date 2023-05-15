//Filter collection mobile + product form
document.addEventListener('reInitCollectionSort', () => {
    filterInitialization();
})
filterInitialization();

function filterInitialization() {
    let tooltipElem;
    let variantColors = document.querySelectorAll('.product-label-hover');

    variantColors.forEach((variant) => {

        variant.onmouseover = function (event) {
            if (window.innerWidth >= 768) {
                let target = event.target;

                // если у нас есть подсказка...
                let tooltipHtmlColor = target.dataset.variantColor;
                let tooltipHtmlUrl = target.dataset.variantUrl;
                if (!tooltipHtmlColor) return;
                if (!tooltipHtmlColor) return;

                // ...создадим элемент для подсказки

                tooltipElem = document.createElement('div');
                tooltipElem.className = 'variant__hovering';
                tooltipElem.innerHTML += `<span class="variant__hovering--image" style="${tooltipHtmlUrl}; display: block;"></span>`;
                tooltipElem.innerHTML += `<span class="variant__hovering--title">${tooltipHtmlColor}</span>`;
                variant.append(tooltipElem);

                // спозиционируем его сверху от аннотируемого элемента (top-center)
                let coords = target.getBoundingClientRect();

                let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
                let right = coords.right - (target.offsetWidth - tooltipElem.offsetWidth) / 2;

                let top = coords.top - tooltipElem.offsetHeight - 5;

                if (left < 0) {
                    right = '';
                    tooltipElem.style.right = right;
                    tooltipElem.style.left = '0';
                } else if (right > window.innerWidth) {
                    left = '';
                    tooltipElem.style.right = '0';
                    tooltipElem.style.left = left;

                } else {
                    tooltipElem.style.left = left + 'px';
                }

                // if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
                //     top = coords.top + target.offsetHeight + 5;
                // }

                tooltipElem.style.top = top + 'px';
            }
        }

        variant.onmouseout = function (e) {
            if (tooltipElem) {
                tooltipElem.remove();
                tooltipElem = null;
            }
        };
    });
}