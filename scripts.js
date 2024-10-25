// Filtro de búsqueda
document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const batidos = document.querySelectorAll('.batido');

    batidos.forEach(batido => {
        const name = batido.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            batido.style.display = 'block';
        } else {
            batido.style.display = 'none';
        }
    });
});

// Modal de compra
const buyButtons = document.querySelectorAll('.buy-btn');
const modal = document.getElementById('buyModal');
const closeModal = document.querySelector('.modal .close');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('confirmPurchase').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    alert(`Has comprado ${quantity} batidos usando ${paymentMethod}.`);
    modal.style.display = 'none';
});
