const nativeColorSwatcher = document.querySelectorAll('.product-form__input--color-swatcher');
const customColorSwatcher = document.querySelectorAll('.custom-color-swatches');

if (customColorSwatcher) {
    customColorSwatcher.forEach((el) => {
        el.addEventListener('change', (e) => {
            let customOptionPosition = el.dataset.optionPosition
            const checkedColorValue = Array.from(el.querySelectorAll('input')).find(radio => radio.checked).value;
            nativeColorSwatcher.forEach(native => {
                if (native.dataset.optionPosition == customOptionPosition) {
                    native.querySelectorAll('option').forEach(option => {
                        if (option.value === checkedColorValue) {
                            option.selected = 'selected'
                        } else {
                            option.selected = false;
                        }
                    })
                    native.parentElement.dispatchEvent(new Event('change'));
                }
            })
        });
    })
}