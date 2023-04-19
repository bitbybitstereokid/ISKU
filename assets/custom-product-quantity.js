const quantityInput = document.querySelector('.custom-quantity-wrapper .quantity__input');
const priceDependsByQtyElement = document.querySelector('.custom-quantity-wrapper .price--based-quiantity');

if (quantityInput && priceDependsByQtyElement) {
    quantityInput.addEventListener('change', () => {
        if (!quantityInput.value) quantityInput.value = 1;

        const updatedPrice = priceDependsByQtyElement.dataset.basePrice * quantityInput.value;
        const formadetPrice = (updatedPrice / 100).toFixed(2) + window.currentCurrency;
        priceDependsByQtyElement.innerText = formadetPrice;
    })
}