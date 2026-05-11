function getCart() {
  try { return JSON.parse(localStorage.getItem('pawpals_cart')) || []; } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('pawpals_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1, name: product.name, price: product.price, image: product.image });
  }
  saveCart(cart);
  showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCartPage();
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    return removeFromCart(productId);
  }
  saveCart(cart);
  renderCartPage();
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCartPage() {
  const container = document.getElementById('cart-container');
  if (!container) return;
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:4rem;margin-bottom:16px;">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <a href="products.html" class="btn btn-primary">Browse Products</a>
      </div>`;
    return;
  }

  const shipping = 0;
  const subtotal = getCartTotal();
  const total = subtotal + shipping;

  container.innerHTML = `
    <div class="cart-items">
      ${cart.map(item => {
        const p = products.find(pr => pr.id === item.id);
        return `
        <div class="cart-item">
          <div class="cart-item-image"><img src="${p ? p.image : item.image}" alt="${item.name}" loading="lazy"></div>
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p class="cart-item-price">₹${item.price.toLocaleString()}</p>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
              <span style="font-weight:700;min-width:24px;text-align:center;">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <div class="cart-item-total">
            <div class="price">₹${(item.price * item.qty).toLocaleString()}</div>
            <span class="remove" onclick="removeFromCart(${item.id})">Remove</span>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div class="cart-summary">
      <div class="cart-summary-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
      <div class="cart-summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '₹' + shipping}</span></div>
      <div class="cart-summary-row total"><span>Total</span><span>₹${total.toLocaleString()}</span></div>
      <a href="checkout.html" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:16px;">Proceed to Checkout</a>
      <a href="products.html" style="display:block;text-align:center;margin-top:12px;font-size:0.9rem;color:var(--text-light);">Continue Shopping</a>
    </div>`;
}

function renderCheckoutSummary() {
  const container = document.getElementById('order-summary');
  if (!container) return;
  const cart = getCart();

  const totalEl = document.getElementById('checkout-total');
  if (totalEl) totalEl.textContent = getCartTotal().toLocaleString();

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty. <a href="products.html">Shop now</a></p>';
    return;
  }

  container.innerHTML = `
    <div class="order-summary-card">
      <h3>Order Summary (${cart.reduce((s,i) => s + i.qty, 0)} items)</h3>
      ${cart.map(item => `
        <div class="order-item">
          <span>${item.name} × ${item.qty}</span>
          <span>₹${(item.price * item.qty).toLocaleString()}</span>
        </div>
      `).join('')}
      <div class="order-item" style="border-top:1px solid var(--border);margin-top:8px;padding-top:8px;font-weight:700;font-size:1.1rem;">
        <span>Total</span>
        <span>₹${getCartTotal().toLocaleString()}</span>
      </div>
    </div>`;
}

updateCartCount();
