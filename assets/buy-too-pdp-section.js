function addToCart (element) {
    let formData = {
        "items": [{
            "id": +element.dataset.variantId,
            "quantity": 1
        }]
    };

    element.classList.add('processing')

    const response = fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        element.classList.remove('processing');
        
        if (response.status === 422) {
            element.classList.add('out-of-stock');
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(() => {
        element.classList.remove('processing');
    });
}