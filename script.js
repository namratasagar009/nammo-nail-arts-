/* ===========================
   NAMMO NAIL ARTS - SCRIPT.JS
   =========================== */

// ===========================
// DATA
// ===========================
const services = [
  {
    id: 1,
    name: "Gel Nail Art",
    desc: "Long-lasting glossy gel nails with stunning designs that stay perfect for 3-4 weeks.",
    price: 1200,
    duration: "60 min",
    rating: 4.9,
    reviews: 128,
    badge: "Most Popular",
    category: "gel",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80"
  },
  {
    id: 2,
    name: "Acrylic Nails",
    desc: "Beautiful acrylic extensions sculpted to perfection in any shape and length you desire.",
    price: 1800,
    duration: "90 min",
    rating: 4.8,
    reviews: 94,
    badge: "Premium",
    category: "acrylic",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80&crop=entropy&sig=1"
  },
  {
    id: 3,
    name: "Bridal Nail Design",
    desc: "Exquisite bridal nail art with lace patterns, pearls, and crystals for your special day.",
    price: 3500,
    duration: "120 min",
    rating: 5.0,
    reviews: 67,
    badge: "Bridal Special",
    category: "bridal",
    img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500&q=80"
  },
  {
    id: 4,
    name: "French Manicure",
    desc: "Classic and timeless French manicure with pristine white tips and a natural pink base.",
    price: 800,
    duration: "45 min",
    rating: 4.7,
    reviews: 215,
    badge: "Classic",
    category: "gel",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80&crop=entropy&sig=2"
  },
  {
    id: 5,
    name: "Custom Nail Art",
    desc: "Hand-painted custom designs — from florals to abstract art. Your imagination, our canvas.",
    price: 2200,
    duration: "100 min",
    rating: 4.9,
    reviews: 83,
    badge: "Artistic",
    category: "custom",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80&crop=entropy&sig=3"
  },
  {
    id: 6,
    name: "Nail Extensions",
    desc: "Glamorous nail extensions crafted to give you the perfect length and flawless finish.",
    price: 1500,
    duration: "75 min",
    rating: 4.8,
    reviews: 110,
    badge: "Glamour",
    category: "acrylic",
    img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500&q=80&crop=entropy&sig=4"
  }
];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80", label: "Gel Art", category: "gel" },
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80", label: "Bridal Design", category: "bridal" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80&fit=crop&h=600", label: "Custom Art", category: "custom" },
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80&fit=crop&h=280", label: "Acrylic Nails", category: "acrylic" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80&fit=crop&h=350", label: "French Manicure", category: "gel" },
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80&fit=crop&h=450", label: "Gel Ombre", category: "gel" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80&fit=crop&h=320", label: "Custom Design", category: "custom" },
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80&fit=crop&h=500", label: "Bridal Art", category: "bridal" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80&fit=crop&h=260", label: "Acrylic Extensions", category: "acrylic" },
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80&fit=crop&h=400", label: "Nail Art", category: "custom" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80&fit=crop&h=480", label: "Gel Nails", category: "gel" },
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80&fit=crop&h=300", label: "Bridal Special", category: "bridal" }
];

const reviews = [
  {
    name: "Priya Sharma",
    date: "February 2025",
    text: "Absolutely love my nails! The gel art design lasted over 3 weeks without even a single chip. Nammo is truly an artist — I receive compliments wherever I go!",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5
  },
  {
    name: "Ananya Reddy",
    date: "January 2025",
    text: "Got my bridal nails done here and they were absolutely magical! The pearl and lace design was exactly what I envisioned. I cried happy tears on my wedding day!",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 5
  },
  {
    name: "Meera Patel",
    date: "March 2025",
    text: "Best nail salon experience EVER. The team is so professional and the studio is spotlessly clean. My acrylic nails are perfection. Will never go anywhere else!",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5
  },
  {
    name: "Ritu Verma",
    date: "December 2024",
    text: "The custom nail art I got was beyond gorgeous! The artist hand-painted tiny flowers on each nail. Worth every rupee. I'm hooked on Nammo Nail Arts forever!",
    avatar: "https://i.pravatar.cc/100?img=4",
    rating: 5
  },
  {
    name: "Sneha Gupta",
    date: "February 2025",
    text: "I've been coming here for 6 months now. Every single visit is perfect. The French manicure here is the most elegant I've had in my life. Simply outstanding!",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5
  },
  {
    name: "Kavya Nair",
    date: "March 2025",
    text: "Came for nail extensions before my sister's wedding — absolutely thrilled! The team is so warm and welcoming. This is my forever nail salon. Pure luxury experience!",
    avatar: "https://i.pravatar.cc/100?img=6",
    rating: 5
  }
];

// ===========================
// CART STATE
// ===========================
let cart = [];

// ===========================
// INITIALIZE ON LOAD
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderGallery('all');
  renderReviews();
  createParticles();
  initScrollEffects();
  initNavHighlight();
  setMinBookingDate();
  initGalleryFilter();
  document.getElementById('cartFloatBtn').style.display = 'flex';
});

// ===========================
// RENDER SERVICES
// ===========================
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map(s => `
    <div class="service-card reveal" data-category="${s.category}">
      <div class="service-img-wrap">
        <img src="${s.img}" alt="${s.name}" class="service-img" loading="lazy" />
        <div class="service-badge">${s.badge}</div>
      </div>
      <div class="service-card-body">
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.desc}</p>
        <div class="service-rating">
          <div class="stars">${renderStars(s.rating)}</div>
          <span class="rating-count">${s.rating} (${s.reviews} reviews)</span>
        </div>
        <div class="service-price-row">
          <span class="service-price">₹${s.price.toLocaleString('en-IN')}</span>
          <span class="service-duration"><i class="fas fa-clock"></i> ${s.duration}</span>
        </div>
        <div class="service-actions">
          <button class="btn-cart" onclick="addToCart(${s.id})" id="cart-btn-${s.id}">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
          <button class="btn-book" onclick="bookNow('${s.name}')">
            <i class="fas fa-calendar-alt"></i> Book Now
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  let stars = '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars += '<i class="fas fa-star"></i>';
  if (half) stars += '<i class="fas fa-star-half-alt"></i>';
  return stars;
}

// ===========================
// RENDER GALLERY
// ===========================
function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(g => g.category === filter);
  grid.innerHTML = filtered.map(g => `
    <div class="gallery-item reveal" data-category="${g.category}">
      <img src="${g.src}" alt="${g.label}" loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-label"><i class="fas fa-spa"></i> ${g.label}</span>
      </div>
    </div>
  `).join('');
  initReveal();
}

function initGalleryFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      btns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderGallery(this.dataset.filter);
    });
  });
}

// ===========================
// RENDER REVIEWS
// ===========================
function renderReviews() {
  const slider = document.getElementById('reviewsSlider');
  slider.innerHTML = reviews.map(r => `
    <div class="review-card reveal">
      <div class="review-rating">${'<i class="fas fa-star"></i>'.repeat(r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <img src="${r.avatar}" alt="${r.name}" class="review-avatar" loading="lazy" />
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===========================
// CART FUNCTIONS
// ===========================
function addToCart(id) {
  const service = services.find(s => s.id === id);
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...service, qty: 1 });
  }

  updateCartUI();
  showToast(`<i class="fas fa-check-circle"></i> "${service.name}" added to cart!`);

  // Button feedback
  const btn = document.getElementById(`cart-btn-${id}`);
  if (btn) {
    btn.innerHTML = '<i class="fas fa-check"></i> Added!';
    btn.style.background = 'var(--pink-pale)';
    btn.style.borderColor = 'var(--pink-deep)';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
      btn.style.background = '';
      btn.style.borderColor = '';
    }, 1500);
  }
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((a, c) => a + c.qty, 0);
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartBadge').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty</p>
        <span>Add some beautiful nail services!</span>
      </div>`;
    footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(c => `
      <div class="cart-item">
        <img src="${c.img}" alt="${c.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4>${c.name}</h4>
          <span>₹${(c.price * c.qty).toLocaleString('en-IN')}</span>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQty(${c.id}, -1)"><i class="fas fa-minus"></i></button>
            <span class="qty-num">${c.qty}</span>
            <button class="qty-btn" onclick="updateQty(${c.id}, 1)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${c.id})"><i class="fas fa-trash-alt"></i></button>
      </div>
    `).join('');
    footerEl.style.display = 'block';
    document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function checkout() {
  toggleCart();
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  showToast('<i class="fas fa-calendar-alt"></i> Please complete your booking below!');
}

// ===========================
// BOOK NOW (quick fill form)
// ===========================
function bookNow(serviceName) {
  const select = document.getElementById('bookService');
  for (let opt of select.options) {
    if (opt.text.includes(serviceName.split(' ')[0])) {
      select.value = opt.value;
      break;
    }
  }
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// ===========================
// BOOKING FORM
// ===========================
function submitBooking(e) {
  e.preventDefault();
  const name = document.getElementById('bookName').value;
  const phone = document.getElementById('bookPhone').value;
  const service = document.getElementById('bookService').value;
  const date = document.getElementById('bookDate').value;
  const time = document.getElementById('bookTime').value;

  const formatted = new Date(date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  document.getElementById('modalDetails').innerHTML = `
    <div>👤 <strong>Name:</strong> ${name}</div>
    <div>📞 <strong>Phone:</strong> ${phone}</div>
    <div>💅 <strong>Service:</strong> ${service}</div>
    <div>📅 <strong>Date:</strong> ${formatted}</div>
    <div>🕐 <strong>Time:</strong> ${time}</div>
  `;

  document.getElementById('successModal').classList.add('active');
  document.getElementById('bookingForm').reset();
}

function closeModal() {
  document.getElementById('successModal').classList.remove('active');
}

function setMinBookingDate() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('bookDate').setAttribute('min', today);
}

// ===========================
// NAVBAR
// ===========================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');
  const scrollY = window.scrollY;

  if (scrollY > 60) {
    navbar.classList.add('scrolled');
    scrollTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollTop.classList.remove('visible');
  }
});

function toggleMenu() {
  const links = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  links.classList.toggle('open');
  hamburger.classList.toggle('open');
}

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });
}

// ===========================
// SCROLL TO TOP
// ===========================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// HERO PARTICLES
// ===========================
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 3;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(p);
  }
}

// ===========================
// INTERSECTION OBSERVER
// ===========================
function initScrollEffects() {
  initReveal();
}

function initReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ===========================
// TOAST NOTIFICATION
// ===========================
let toastTimer;
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
