document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for subscribing.');
            newsletterForm.reset();
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon.');

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const submissions = JSON.parse(localStorage.getItem('customOrders')) || [];
            submissions.push({
                name,
                email,
                message,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('customOrders', JSON.stringify(submissions));

            contactForm.reset();
        });
    }

    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const cartItemsList = document.getElementById('cart-items');
    function renderCartItems() {
        cartItemsList.innerHTML = '';
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li>(No items in cart)</li>';
        } else {
            cart.forEach(name => {
                const li = document.createElement('li');
                li.textContent = name;
                cartItemsList.appendChild(li);
            });
        }
    }
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemCard = btn.closest('.item-card');
            const itemName = itemCard.querySelector('.item-name').textContent;
            cart.push(itemName);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            alert('Item added to cart.');
        });
    });


    const viewCartBtn = document.getElementById('view-cart');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close-modal');

    if (viewCartBtn && cartModal && cartItemsList && closeModal) {
        viewCartBtn.addEventListener('click', () => {
            renderCartItems();
            cartModal.style.display = 'flex';
        });
        closeModal.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

        document.getElementById('clear-cart').addEventListener('click', () => {
            if (cart.length) {
                cart = [];
                sessionStorage.removeItem('cart');
                alert('Cart cleared');
                cartModal.style.display = 'none';
            }   else {
                alert('No items to clear');
            }
            renderCartItems();
            cartModal.style.display = 'none';
        });
    
        document.getElementById('process-order').addEventListener('click', () => {
            if (cart.length) {
                alert('Thank you for your order');
                cart = [];
                sessionStorage.removeItem('cart');
            } else {
                alert('Cart is empty');
            }
            renderCartItems();
            cartModal.style.display = 'none';
        });
    }
});