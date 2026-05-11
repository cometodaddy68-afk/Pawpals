let currentCategory = 'All';
let currentSort = 'popular';
let currentSearch = '';

function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function renderProducts(productsToRender, targetGrid) {
  const grid = targetGrid || document.getElementById('products-grid');
  if (!grid) return;

  if (productsToRender.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-light);"><div style="font-size:3rem;margin-bottom:12px;">🔍</div><h3>No products found</h3><p>Try a different search or category.</p></div>`;
    return;
  }

  grid.innerHTML = productsToRender.map(p => {
    const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    const badgeClass = p.badge === 'Hot' ? 'hot' : p.badge === 'Sale' ? 'sale' : p.badge === 'Premium' ? 'premium' : '';
    return `
    <div class="product-card">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
        ${discount > 0 ? `<span style="position:absolute;top:12px;right:12px;background:var(--danger);color:white;padding:4px 8px;border-radius:var(--radius-full);font-size:0.7rem;font-weight:700;">−${discount}%</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span style="color:#FFD93D;">${renderStars(p.rating)}</span>
          <span>${p.rating}</span>
          <span>(${p.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">₹${p.price.toLocaleString()}</span>
          ${p.originalPrice ? `<span class="original-price">₹${p.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn btn-add-cart" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="btn btn-view" onclick="location.href='product-detail.html?id=${p.id}'">View</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderCategories() {
  const bar = document.getElementById('category-bar');
  if (!bar) return;
  bar.innerHTML = categories.map(c => `
    <div class="category-card ${c.name === currentCategory ? 'active' : ''}" onclick="filterByCategory('${c.name}')">
      <div class="category-icon">${c.icon}</div>
      <h4>${c.name}</h4>
      <p>${c.count} items</p>
    </div>
  `).join('');
}

function filterByCategory(category) {
  currentCategory = category;
  applyFilters();
  renderCategories();
}

function applyFilters() {
  let filtered = [...products];

  if (currentCategory !== 'All') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch) {
    const s = currentSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(s) ||
      p.category.toLowerCase().includes(s) ||
      p.description.toLowerCase().includes(s)
    );
  }

  switch (currentSort) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    case 'newest': filtered.sort((a, b) => b.id - a.id); break;
    default: filtered.sort((a, b) => b.reviews - a.reviews); break;
  }

  renderProducts(filtered);
}

function initProductsPage() {
  renderCategories();
  applyFilters();

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentSearch = searchInput.value;
      applyFilters();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      applyFilters();
    });
  }
}

function initProductDetail() {
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  const container = document.getElementById('product-detail');

  if (!product) {
    container.innerHTML = '<div style="text-align:center;padding:60px 20px;"><h2>Product not found</h2><a href="products.html" class="btn btn-primary">Browse Products</a></div>';
    return;
  }

  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  container.innerHTML = `
    <div class="detail-image"><img src="${product.image}" alt="${product.name}"></div>
    <div class="detail-info">
      <div class="detail-category">${product.category}</div>
      <h1>${product.name}</h1>
      <div class="detail-rating">
        <span style="color:#FFD93D;font-size:1.2rem;">${renderStars(product.rating)}</span>
        <span style="font-weight:700;">${product.rating}</span>
        <span style="color:var(--text-light);">(${product.reviews} reviews)</span>
      </div>
      <div class="detail-price">
        <span class="current-price">₹${product.price.toLocaleString()}</span>
        ${product.originalPrice ? `<span class="original-price" style="font-size:1.2rem;">₹${product.originalPrice.toLocaleString()}</span>` : ''}
        ${discount > 0 ? `<span class="discount" style="font-size:1rem;">Save ${discount}%</span>` : ''}
      </div>
      <p class="detail-desc">${product.description}</p>
      <ul class="detail-features">
        ${product.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="detail-actions">
        <button class="btn btn-primary" onclick="addToCart(${product.id});">Add to Cart — ₹${product.price.toLocaleString()}</button>
        <button class="btn btn-outline" onclick="location.href='checkout.html'" style="border-color:var(--border);color:var(--text);">Buy Now</button>
      </div>
    </div>`;

  document.title = `${product.name} — PawPals India`;

  const bc = document.getElementById('breadcrumb-product');
  if (bc) bc.textContent = product.name;

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const relatedGrid = document.getElementById('related-products');
  if (relatedGrid) renderProducts(related.length ? related : products.filter(p => p.id !== product.id).slice(0, 4), relatedGrid);
}

function initCheckout() {
  renderCheckoutSummary();

  const form = document.getElementById('checkout-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) {
      showToast('Your cart is empty!', 'error');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Processing...';

    const formData = new FormData(form);
    const order = {
      id: 'PP' + Date.now().toString(36).toUpperCase(),
      date: new Date().toISOString(),
      customer: Object.fromEntries(formData),
      items: cart,
      total: getCartTotal()
    };

    try {
      const orders = JSON.parse(localStorage.getItem('pawpals_orders') || '[]');
      orders.push(order);
      localStorage.setItem('pawpals_orders', JSON.stringify(orders));
      localStorage.removeItem('pawpals_cart');
      sendTelegramNotification(order);
      showToast('Order placed successfully! 🎉', 'success');
      setTimeout(() => {
        window.location.href = `order-success.html?id=${order.id}`;
      }, 1000);
    } catch (err) {
      showToast('Something went wrong. Please try again.', 'error');
      btn.disabled = false;
      btn.textContent = 'Place Order';
    }
  });
}

function initSuccessPage() {
  const params = new URLSearchParams(location.search);
  const orderId = params.get('id');
  const container = document.getElementById('success-container');
  if (container && orderId) {
    container.innerHTML = `
      <div class="success-page">
        <div class="success-icon">🎉</div>
        <h1>Order Placed!</h1>
        <p>Your order <strong>#${orderId}</strong> has been placed successfully. We'll contact you within 24 hours to confirm.</p>
        <p style="font-size:0.9rem;color:var(--text-light);">📧 You'll receive order details on your email.</p>
        <a href="products.html" class="btn btn-primary" style="margin-top:16px;">Continue Shopping</a>
      </div>`;
  }
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input.value) {
      showToast('Subscribed! Welcome to PawPals 🐾', 'success');
      input.value = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  initMobileMenu();

  if (document.getElementById('products-grid')) initProductsPage();
  if (document.getElementById('product-detail')) initProductDetail();
  if (document.getElementById('cart-container')) renderCartPage();
  if (document.getElementById('checkout-form')) initCheckout();
  if (document.getElementById('success-container')) initSuccessPage();
  if (document.getElementById('newsletter-form')) initNewsletter();
});
