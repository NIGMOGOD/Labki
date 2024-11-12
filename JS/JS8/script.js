const priceInput = document.getElementById('price-input');
const priceList = document.getElementById('price-list');

function createCurrentPriceSpan(value) {
    const span = document.createElement('span');
    span.className = 'current-price';
    span.textContent = `Current Price: $${value}`;
    
    const closeButton = document.createElement('span');
    closeButton.className = 'close-btn';
    closeButton.textContent = 'X';
    
    closeButton.onclick = function() {
        priceList.removeChild(span);
    };

    span.appendChild(closeButton);
    priceList.appendChild(span);
}

priceInput.addEventListener('blur', () => {
    const value = priceInput.value;

    priceInput.style.borderColor = ''; 
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) errorMessage.remove();

    if (value < 0) {
        priceInput.style.borderColor = 'red';
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = 'Please enter correct price';
        priceInput.insertAdjacentElement('afterend', error);
    } else if (value) {
        createCurrentPriceSpan(value);
        priceInput.value = ''; 
    }
});
