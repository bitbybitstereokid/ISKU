const nativeColorSwatcher = document.querySelectorAll('.product-form__input--color-swatcher');
const customColorSwatcher = document.querySelectorAll('#custom-color-swatches');

if (customColorSwatcher) {
    customColorSwatcher.forEach(el => {
        el.addEventListener('change', (e) => {
            const checkedColorValue = Array.from(el.querySelectorAll('input')).find(radio => radio.checked).value;
            nativeColorSwatcher.forEach(native => {
                native.querySelectorAll('option').forEach(option => {
                    if (option.value === checkedColorValue) {
                        option.selected = 'selected'
                    } else {
                        option.selected = false;
                    }
                })
            })
            nativeColorSwatcher[0].parentElement.dispatchEvent(new Event('change'));
        });
    })
}