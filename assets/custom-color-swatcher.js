const nativeColorSwatcher = document.querySelector('.product-form__input--color-swatcher');
const customColorSwatcher = document.getElementById('custom-color-swatches');

customColorSwatcher.addEventListener('change', (e) => {
    const checkedColorValue = Array.from(customColorSwatcher.querySelectorAll('input')).find(radio => radio.checked).value;
    Array.from(nativeColorSwatcher.querySelectorAll('option')).forEach((option) => {
       return option.value === checkedColorValue ? option.selected = 'selected' : option.selected = false;
    });
    nativeColorSwatcher.parentElement.dispatchEvent(new Event('change'));
})