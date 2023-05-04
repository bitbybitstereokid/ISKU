let btnHeight = document.querySelector('.collection-hero--producer-button button');
let colDesc = document.querySelector('.collection-hero-producer--desc');

if (btnHeight) {
    btnHeight.addEventListener('click', (e) => {
        if (colDesc.classList.contains("active")) {
            colDesc.classList.remove("active");
            colDesc.style.height = colDesc.scrollHeight + "px";
        } else {
            colDesc.classList.add("active");
            colDesc.style.height = '189px';
        }
    });
}

function clickSort(block) {
    block.classList.toggle('is-active');
}

function clickOption(op) {
    let customOption = document.querySelectorAll('.custom-select-list ul li button');
    let colTitle = document.querySelector('.custom-select-list .custom-select__title');
    let formSelect = document.querySelector('.FacetSortForm');
    let optionData = op.dataset.value;
    customOption.forEach((optionLi) => {
        optionLi.classList.remove('selected');
    });

    const text = optionData;
    let $select = document.querySelector('#SortBy');
    let $options = Array.from($select.options);
    let optionToSelect = $options.find(item => item.value === text);
    optionToSelect.selected = true;
    formSelect.dispatchEvent(new Event('input'));
    op.classList.add('selected');
    colTitle.innerHTML = op.innerHTML;
}


window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 749) {
        let filterOpened = document.querySelectorAll('#FacetsWrapperDesktop details');

        filterOpened.forEach((detail) => {
            detail.setAttribute('open', 'true');
        });
    }
});

// document.addEventListener('click', function(e) {
//     if (!e.target.matches('.custom-select-list')) document.querySelector('.custom-select-list').classList.remove('is-active');
// });