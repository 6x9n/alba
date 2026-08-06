document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const PRODUCT_EMPTY = document.querySelector('.product-empty');

  /* ---- Products page: data-driven rendering (categories + sub-categories) ---- */
  const CATEGORY_META = {
    locks:       { label: 'الانظمه الالكترونيه والبرمجيات' },
    furniture:   { label: 'الاثاث والديكور الفندقي' },
    furnishings: { label: 'المفروشات الفندقيه' },
    equipment:   { label: 'المستلزمات الفندقية' },
    trolleys:    { label: 'المعدات الفندقية' },
    hardware:    { label: 'اكسسوارات الابواب' },
    healthtools: { label: 'أدوات الصحة' },
    safetytools: { label: 'أدوات السلامة' }
  };

  const SUBCATEGORY_LABELS = {
    'smart-locks': 'الأقفال الذكية',
    'energy-savers': 'موفرو الطاقة',
    'chairs': 'الكراسي',
    'sofas': 'الكنب والصالونات',
    'tables': 'الطاولات',
    'bedding': 'المفروشات والبياضات',
    'towels': 'المناشف والأرواب',
    'trash-cans': 'سلة المهملات',
    'safes': 'خزائن الأمانات',
    'kettles': 'غلايات الشاي',
    'bathroom-acc': 'مستلزمات الحمام',
    'lobby': 'تجهيزات اللوبي',
    'room-acc': 'مستلزمات الغرف',
    'housekeeping': 'عربات التنظيف',
    'luggage': 'عربات الحقائب',
    'locks': 'أقفال وأبواب',
    'accessories': 'الإكسسوارات'
  };

  const CATEGORY_ORDER = ['locks', 'furniture', 'furnishings', 'equipment', 'trolleys', 'hardware'];

  const CATEGORY_ICONS = {
    locks: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1"/></svg>',
    equipment: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24a1 1 0 0 0-1.1 0L4 5.75"/><path d="M3 6.5v9.75a1 1 0 0 0 .5.86l7.5 4.33a1 1 0 0 0 1 0l7.5-4.33a1 1 0 0 0 .5-.86V6.5"/><path d="M12 12v9"/><path d="m20.5 10-8.5 5-8.5-5"/></svg>',
    furniture: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7"/><path d="M4 9.5V5.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4"/><path d="M9 16.5v-3"/><path d="M15 16.5v-3"/><path d="M3 13.5h18"/></svg>',
    furnishings: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M8 7.5h.01"/><path d="M8 16.5h.01"/></svg>',
    trolleys: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
    hardware: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>'
  };

  const WHATSAPP_SVG = '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  const EYE_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';

  const PRODUCT_IMG_DIR = 'assets/images/products/';
  const PLACEHOLDER_IMG = 'assets/images/placeholder.png';
  const WHATSAPP_BASE = 'https://wa.me/966562933331?text=';

  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const buildProductCard = (p) => {
    const name = p.title || p.name || 'منتج متاح للطلب';
    const imgSrc = p.image || '';
    const quoteHref = `${WHATSAPP_BASE}${encodeURIComponent(`أهلاً، أرغب بطلب عرض سعر وتوفر لـ «${name}» — مع إمكانية تزويدكم بكمية المنشأة.`)}`;
    const specs = [
      p.color ? `اللون: ${p.color}` : '',
      p.size ? `المقاس: ${p.size}` : '',
      p.code ? `الكود: ${p.code}` : ''
    ].filter(Boolean).map((s) => `<span class="product-spec">${escapeHtml(s)}</span>`).join('');

    return `<article class="product-item" tabindex="0">
      <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(name)}" loading="lazy" />
      <div class="product-info">
        <h3>${escapeHtml(name)}</h3>
        <p class="product-desc">${escapeHtml(p.description || '')}</p>
        ${specs}
        <div class="product-actions">
          <a class="product-quote" href="${quoteHref}" target="_blank" rel="noreferrer" aria-label="اطلب سعر ${escapeHtml(name)} الآن عبر واتساب">${WHATSAPP_SVG}<span>اطلب سعراً الآن</span></a>
          <button type="button" class="product-view" aria-label="عرض تفاصيل ${escapeHtml(name)}">${EYE_SVG}</button>
        </div>
      </div>
    </article>`;
  };

  const attachImageFallback = (img) => {
    img.addEventListener('error', () => {
      const tried = parseInt(img.dataset.fallback || '0', 10);
      if (tried === 0) {
        img.dataset.fallback = '1';
        img.src = PLACEHOLDER_IMG;
        if (img.alt && !img.alt.includes('الصورة قيد التحديث')) {
          img.alt += ' — الصورة قيد التحديث';
        }
      }
    });
  };

  const renderProducts = () => {
    const host = document.getElementById('productSections');
    if (!host || typeof productsData === 'undefined' || !Array.isArray(productsData)) return;

    const source = [...productsData];

    const seen = new Set();
    const items = source.filter((p) => {
      if (!p || !p.id || seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });

    const byCategory = {};
    items.forEach((p) => {
      (byCategory[p.category] = byCategory[p.category] || []).push(p);
    });

    const order = CATEGORY_ORDER.filter((c) => byCategory[c]);
    const extras = Object.keys(byCategory).filter((c) => !CATEGORY_ORDER.includes(c));

    const sectionsHtml = [...order, ...extras].map((cat) => {
      const meta = CATEGORY_META[cat] || { label: cat };
      const subMap = {};
      const direct = [];
      byCategory[cat].forEach((p) => {
        if (p.subcategory) (subMap[p.subcategory] = subMap[p.subcategory] || []).push(p);
        else direct.push(p);
      });
      const subKeys = Object.keys(subMap);

      let body = '';
      if (subKeys.length) {
        body = subKeys.map((sk) => {
          const label = SUBCATEGORY_LABELS[sk] || sk;
          return `<div class="sub-category-header">
              <h3 class="sub-category-title">${escapeHtml(label)}</h3>
              <div class="divider-line">
                <span class="line"></span>
                <span class="diamond-icon">◆</span>
                <span class="line"></span>
              </div>
            </div>
            <div class="product-grid">${subMap[sk].map(buildProductCard).join('')}</div>`;
        }).join('');
        if (direct.length) body += `<div class="product-grid">${direct.map(buildProductCard).join('')}</div>`;
      } else {
        body = `<div class="product-grid">${byCategory[cat].map(buildProductCard).join('')}</div>`;
      }

      return `<section class="product-category category-section" id="${cat}" data-category="${cat}">
        <h2 class="category-heading">
          <span class="category-heading-icon">${CATEGORY_ICONS[cat] || ''}</span>
          ${escapeHtml(meta.label)}
        </h2>
        ${body}
      </section>`;
    }).join('');

    host.innerHTML = sectionsHtml;
    host.querySelectorAll('.product-item img').forEach(attachImageFallback);
    return [...order, ...extras];
  };

  const filterHost = document.getElementById('categoryFilters');
  const productSectionsHost = document.getElementById('productSections');

  const applyCategoryFilter = (activeFilter) => {
    let visibleCount = 0;
    document.querySelectorAll('.product-category').forEach((section) => {
      const visible = activeFilter === 'all' || section.dataset.category === activeFilter;
      section.classList.toggle('is-hidden', !visible);
      section.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (PRODUCT_EMPTY) {
      PRODUCT_EMPTY.classList.toggle('is-visible', visibleCount === 0);
      PRODUCT_EMPTY.hidden = visibleCount !== 0;
    }
  };

  const initFilters = (categories) => {
    if (!filterHost) return;
    const uniqueCategories = [...new Set(['all', ...(categories || [])])];
    const buttons = uniqueCategories.map((cat) => {
      const label = cat === 'all' ? 'الكل' : (CATEGORY_META[cat] || { label: cat }).label;
      const active = cat === 'all';
      return `<button type="button" class="filter-btn${active ? ' is-active' : ''}" data-filter="${cat}" aria-pressed="${active}">${escapeHtml(label)}</button>`;
    });
    filterHost.innerHTML = buttons.join('');
  };

  if (productSectionsHost && filterHost) {
    const categories = renderProducts() || [];
    initFilters(categories);
    filterHost.addEventListener('click', (e) => {
      const button = e.target.closest('.filter-btn');
      if (!button) return;
      const filter = button.dataset.filter;
      filterHost.querySelectorAll('.filter-btn').forEach((btn) => {
        const isActive = btn === button;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });
      applyCategoryFilter(filter);
    });
    applyCategoryFilter('all');
  }

  /* ---- Footer year ---- */
  const yearTarget = document.getElementById("year");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  /* ---- Fixed navbar clone (appears on scroll) ---- */
  const fixedNav = (() => {
    const original = document.querySelector(".mainbar");
    if (!original) return null;
    const wrapper = document.createElement("div");
    wrapper.className = "mainbar-fixed";
    const clone = original.cloneNode(true);
    // Remove duplicate IDs and ARIA references in the clone
    clone.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
    clone.querySelectorAll("[aria-controls]").forEach((el) => el.setAttribute("aria-controls", ""));
    wrapper.appendChild(clone);
    wrapper.setAttribute("aria-hidden", "true");
    document.body.appendChild(wrapper);
    return { wrapper, original };
  })();

  /* ---- Refs ---- */
  const mobileToggles = document.querySelectorAll(".mobile-toggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const drawerClose = document.querySelector(".drawer-close");
  const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");
  const accordionTriggers = document.querySelectorAll(".drawer-accordion-trigger");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  /* ---- Mobile drawer ---- */
  const closeDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("is-open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    drawerOverlay?.classList.remove("is-visible");
    if (drawerOverlay) drawerOverlay.hidden = true;
    document.body.classList.remove("drawer-open");
    mobileToggles.forEach((t) => t.setAttribute("aria-expanded", "false"));
  };

  const openDrawer = () => {
    if (!mobileDrawer) return;
    if (drawerOverlay) drawerOverlay.hidden = false;
    requestAnimationFrame(() => {
      mobileDrawer.classList.add("is-open");
      drawerOverlay?.classList.add("is-visible");
    });
    mobileDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    mobileToggles.forEach((t) => t.setAttribute("aria-expanded", "true"));
  };

  const toggleDrawer = () => {
    const anyOpen = mobileDrawer?.classList.contains("is-open");
    anyOpen ? closeDrawer() : openDrawer();
  };

  closeDrawer();

  mobileToggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleDrawer);
  });

  drawerOverlay?.addEventListener("click", closeDrawer);
  drawerClose?.addEventListener("click", closeDrawer);

  document.querySelectorAll(".drawer-nav a").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  /* ---- Drawer accordion ---- */
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".drawer-group");
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      parent?.classList.toggle("is-open", !expanded);
    });
  });

  /* ---- Desktop dropdown ---- */
  const closeAllDropdowns = (except) => {
    dropdownItems.forEach((item) => {
      if (item === except) return;
      item.classList.remove("is-open");
      item.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });
  };

  dropdownItems.forEach((item) => {
    const toggle = item.querySelector(".dropdown-toggle");
    let closeTimer = null;

    const openNow = () => {
      clearTimeout(closeTimer);
      closeAllDropdowns(item);
      item.classList.add("is-open");
      toggle?.setAttribute("aria-expanded", "true");
    };

    const closeNow = () => {
      clearTimeout(closeTimer);
      item.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    };

    const scheduleClose = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(closeNow, 200);
    };

    item.addEventListener("mouseenter", () => {
      if (window.innerWidth > 992) openNow();
    });
    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 992) scheduleClose();
    });

    toggle?.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = item.classList.contains("is-open");
      isOpen ? closeNow() : openNow();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-item.has-dropdown")) {
      closeAllDropdowns();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllDropdowns();
      closeDrawer();
    }
  });

  /* ---- Nav link active state ---- */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  /* ---- Scroll events ---- */
  if (fixedNav) {
    const { wrapper: fixedNavEl, original } = fixedNav;
    const heroSection = document.querySelector(".hero-carousel");

    const getThreshold = () => {
      const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
      return heroHeight - 80;
    };

    let ticking = false;

    const updateFixedNav = () => {
      const shouldShow = window.scrollY > getThreshold();
      fixedNavEl.classList.toggle("is-visible", shouldShow);
      fixedNavEl.setAttribute("aria-hidden", String(!shouldShow));
      // Keep the off-screen original out of the focus/a11y tree while the clone is shown
      if (original) {
        original.setAttribute("aria-hidden", String(shouldShow));
        original.inert = shouldShow;
      }
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateFixedNav);
          ticking = true;
        }
      },
      { passive: true }
    );

    updateFixedNav();
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeDrawer();
    }
  });

  /* ---- Scroll reveal animations ---- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ---- Hero carousel ---- */
  const carousel = document.querySelector('.hero-carousel');
  const slides = carousel?.querySelectorAll('.carousel-slide');
  const prevBtn = carousel?.querySelector('.carousel-control.prev');
  const nextBtn = carousel?.querySelector('.carousel-control.next');
  let currentSlide = 0;
  let carouselInterval;

  if (slides && slides.length > 0) {
    const goToSlide = (index) => {
      slides.forEach((s) => s.classList.remove('active'));
      currentSlide = ((index % slides.length) + slides.length) % slides.length;
      const slide = slides[currentSlide];
      const content = slide.querySelector('.carousel-content');
      if (content) {
        content.style.animation = 'none';
        void content.offsetHeight;
        content.style.animation = '';
      }
      slide.classList.add('active');
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    const startCarousel = () => {
      if (prefersReducedMotion) return;
      carouselInterval = setInterval(nextSlide, 5000);
    };

    const stopCarousel = () => {
      clearInterval(carouselInterval);
    };

    prevBtn?.addEventListener('click', () => { stopCarousel(); prevSlide(); startCarousel(); });
    nextBtn?.addEventListener('click', () => { stopCarousel(); nextSlide(); startCarousel(); });

    carousel?.addEventListener('mouseenter', stopCarousel);
    carousel?.addEventListener('mouseleave', startCarousel);

    /* ---- Touch swipe support ---- */
    let touchStartX = null;
    let touchStartY = null;
    const SWIPE_THRESHOLD = 48;

    const swipeHandler = (evt) => {
      const first = evt.changedTouches && evt.changedTouches[0];
      if (touchStartX === null || touchStartY === null || !first) return;
      const dx = first.clientX - touchStartX;
      const dy = first.clientY - touchStartY;
      if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.4) {
        // RTL: swiping right (dx>0) moves forward
        stopCarousel();
        dx > 0 ? nextSlide() : prevSlide();
        startCarousel();
        touchStartX = null;
        touchStartY = null;
      }
    };

    carousel?.addEventListener('touchstart', (evt) => {
      const first = evt.touches && evt.touches[0];
      if (!first) return;
      touchStartX = first.clientX;
      touchStartY = first.clientY;
    }, { passive: true });

    carousel?.addEventListener('touchend', swipeHandler, { passive: true });

    if (!prefersReducedMotion) {
      startCarousel();
    }
  }

  /* ---- Marquee seamless loop ---- */
  const setupMarquee = (wrapper, speed) => {
    if (!wrapper) return;
    const track = wrapper.querySelector('.marquee-track');
    if (!track) return;
    const group = track.querySelector('.marquee-group');
    if (!group || group.children.length === 0) return;

    const items = Array.from(group.children);
    items.forEach((item) => group.appendChild(item.cloneNode(true)));

    if (prefersReducedMotion) return; // static display when reduced motion is requested

    let pos = 0;
    const getSetWidth = () => {
      let w = 0;
      for (let i = 0; i < items.length; i++) {
        w += items[i].offsetWidth + parseInt(getComputedStyle(items[i]).marginLeft || '0');
      }
      return w;
    };

    let setWidth = getSetWidth();
    if (setWidth === 0) return;
    let running = true;

    const step = () => {
      if (!running) return;
      setWidth = getSetWidth();
      if (setWidth === 0) { trackAnimId = requestAnimationFrame(step); return; }
      pos -= speed;
      pos = ((pos % setWidth) + setWidth) % setWidth - setWidth;
      track.style.transform = `translateX(${pos}px)`;
      trackAnimId = requestAnimationFrame(step);
    };

    let trackAnimId = requestAnimationFrame(step);

    let paused = false;
    wrapper.addEventListener('mouseenter', () => { paused = true; running = false; });
    wrapper.addEventListener('mouseleave', () => { if (paused) { paused = false; running = true; trackAnimId = requestAnimationFrame(step); } });
  };

  const startMarquees = () => {
    document.querySelectorAll('.marquee-wrapper').forEach((wrapper) => setupMarquee(wrapper, 1));
  };

  if (document.readyState === 'complete') {
    startMarquees();
  } else {
    window.addEventListener('load', startMarquees);
  }

  /* ---- Testimonials slider (responsive per view) ---- */
  const fallbackData = [
    { id: 1, name: "أ. محمد العتيبي", role: "مدير المشتريات - فندق هيلتون", rating: 5, comment: "تعاملنا مع الشركة في تجهيز أكثر من 150 غرفة فندقية. الجودة كانت ممتازة والتسليم في الوقت المحدد. أنصح بالتعامل معهم." },
    { id: 2, name: "أ. فهد القحطاني", role: "المدير التنفيذي - فندق ماريوت", rating: 5, comment: "من أفضل شركات التجهيزات الفندقية في المملكة. منتجات عالية الجودة وخدمة عملاء ممتازة. سعداء بالتعاون المستمر." },
    { id: 3, name: "م. سارة الدوسري", role: "مشرف التجهيزات - فندق حياة", rating: 5, comment: "تم تنفيذ المشروع بكل احترافية. التصاميم راقية والخامات ممتازة. فريق العمل متعاون وملتزم بأعلى المعايير." }
  ];

  const testimonialsData = [
    { id: 1, name: "أ. محمد العتيبي", role: "مدير المشتريات - فندق هيلتون", rating: 5, comment: "تعاملنا مع البا الحديثة التجارية في تجهيز أكثر من 150 غرفة فندقية. الجودة كانت ممتازة والتسليم في الوقت المحدد. أنصح بالتعامل معهم." },
    { id: 2, name: "أ. فهد القحطاني", role: "المدير التنفيذي - فندق ماريوت", rating: 5, comment: "من أفضل شركات التجهيزات الفندقية في المملكة. منتجات عالية الجودة وخدمة عملاء ممتازة. سعداء بالتعاون المستمر." },
    { id: 3, name: "م. سارة الدوسري", role: "مشرف التجهيزات - فندق حياة", rating: 5, comment: "تم تنفيذ المشروع بكل احترافية. التصاميم راقية والخامات ممتازة. فريق العمل متعاون وملتزم بأعلى المعايير." },
    { id: 4, name: "أ. عبدالله السبيعي", role: "مدير الفندق - فندق الشرق", rating: 5, comment: "شغل ممتاز وجودة عالية. وفرنا وقت وجهد لما اخترنا البا الحديثة التجارية. صراحة ناسبينا في كل متطلبات التجهيز." },
    { id: 5, name: "م. خالد الزهراني", role: "مدير المشاريع - منتجع النخيل", rating: 5, comment: "تعاملنا معهم في تجهيز 3 منتجعات. التزامهم بالمواعيد وجودة المنتجات شيء يذكر فيشكر. نتمنى لهم التوفيق." },
    { id: 6, name: "أ. نايف المطيري", role: "مساعد المدير - فندق كودي تاور", rating: 5, comment: "البا الحديثة التجارية خيارنا الأول في التجهيزات الفندقية. أسعار منافسة وجودة ممتازة. فريق المبيعات محترف وودود." },
    { id: 7, name: "أ. بندر الشمري", role: "المدير الإقليمي - مجموعة فنادق راديسون", rating: 5, comment: "نشكر البا الحديثة التجارية على الاحترافية العالية في التجهيز والتسليم. منتجاتهم تفوق التوقعات والخدمة ممتازة جداً." },
    { id: 8, name: "م. تركي الحربي", role: "مهندس مشاريع - فندق الريتز كارلتون", rating: 5, comment: "من أفضل الموردين اللي تعاملنا معهم. التزام تام بالمواصفات وأسعار تنافسية. فريق مميز في المتابعة والتركيب." },
    { id: 9, name: "أ. يوسف الغامدي", role: "مدير اللوجستيك - فنادق روتانا", rating: 5, comment: "تعاون مستمر من سنين مع البا الحديثة التجارية. مصداقية وجودة عالية في كل طلبية. صراحة شريك نجاح حقيقي." },
    { id: 10, name: "أ. مشاري الدوسري", role: "مالك - مجموعة شقق الفرسان", rating: 5, comment: "تجهيز 4 فروع للشقق الفندقية في وقت قياسي وبجودة ممتازة. البا الحديثة التجارية أثبتت قدرتها على تنفيذ المشاريع الكبيرة." },
    { id: 11, name: "م. هاني الزهراني", role: "استشاري ضيافة", rating: 5, comment: "أنصح وبشدة بالتعامل معهم. أثاث فندقي بخامات ممتازة وتصاميم عصرية. فريقهم يقدم استشارات احترافية قبل الشراء." },
    { id: 12, name: "أ. سعود المالكي", role: "المالك - فندق البستان", rating: 5, comment: "تم تجهيز فندقنا بالكامل خلال 3 أشهر فقط. كفاءة عالية في إدارة المشروع والتنسيق مع المقاولين. نتائج مبهرة." },
    { id: 13, name: "أ. راشد العجمي", role: "مدير العمليات - منتجع رمال", rating: 5, comment: "ما قصرت البا الحديثة التجارية معانا من أول استفسار إلى تسليم آخر قطعة. أخلاق عالية وخدمة عملاء ممتازة، الله يوفقهم." },
    { id: 14, name: "أ. حمد البقمي", role: "شيف تنفيذي - فندق كراون بلازا", rating: 5, comment: "تعاقدنا معهم لتجهيز 3 مطاعم فندقية. الجهد اللي بذلوه في التصميم والتجهيز شيء يستحق الإشادة. نشكرهم على الالتزام." },
    { id: 15, name: "م. فيصل العتيبي", role: "المدير العام - منتجع وشاليهات المرجان", rating: 5, comment: "خبرتنا مع البا الحديثة التجارية كانت ممتازة جداً. من أول اجتماع إلى التركيب والتشغيل، كل شيء كان منظم واحترافي. فخورين بشراكتنا معهم." },
    { id: 16, name: "أ. سلطان المطلق", role: "مالك - فندق الريف", rating: 5, comment: "أثاث فندقي بجودة ممتازة وأسعار منافسة. ساعدونا في تجهيز فندقنا بالكامل خلال وقت قياسي. نشكرهم على الاحترافية." },
    { id: 17, name: "أ. محمد الحارثي", role: "مدير المشتريات - مجموعة فنادق الخليج", rating: 5, comment: "تعاملنا مع البا الحديثة التجارية من سنين، وما قصروا معانا أبداً. جودة منتجات وخدمة عملاء ممتازة. أنصح بالتعامل معهم بدون تردد." },
    { id: 18, name: "م. عبدالعزيز السعيد", role: "مدير المشاريع - منتجع الواحة", rating: 5, comment: "فريق البا الحديثة التجارية محترف جداً. ساعدونا في تجهيز 5 منتجعات في وقت قياسي وبأعلى جودة. صراحة شركاء نجاح حقيقيين." },
    { id: 19, name: "أ. خالد العواد", role: "المالك - فندق الوشم", rating: 5, comment: "اخترت البا الحديثة التجارية بناءً على توصية وبالفعل ما خابت. تجهيز متكامل للفندق بمواصفات عالمية وأسعار معقولة. شكراً لفريق العمل." },
    { id: 20, name: "م. عبدالرحمن الفوزان", role: "مشرف الضيافة - فندق ميلينيوم", rating: 5, comment: "احترافية عالية في التنفيذ والمتابعة. الأثاث والتجهيزات فاقت توقعاتنا. نتعامل معهم من سنتين وما تغيرت الجودة أبداً." },
    { id: 21, name: "أ. سامي الجهني", role: "مدير عام - منتجع أمواج", rating: 5, comment: "تجهيز المنتجع بالكامل كان تجربة رائعة. البا الحديثة التجارية فهمت رؤيتنا ونفذتها بشكل يفوق التوقعات. التوصيل والتركيب في الوقت المحدد." },
    { id: 22, name: "أ. ماجد الشهراني", role: "المدير المالي - مجموعة فنادق الأحساء", rating: 5, comment: "أسعار منافسة جداً مع جودة ممتازة. العروض اللي يقدمونها حصرية وتناسب الميزانيات التشغيلية. أنصح بالتعامل معهم." },
    { id: 23, name: "م. ناصر القاسم", role: "استشاري معماري", rating: 5, comment: "أرشح البا الحديثة التجارية لكل مشاريعي. منتجاتهم تواكب أحدث trends في عالم الضيافة. الخامات ممتازة والتصاميم حرفية. فخور بشراكتنا." },
    { id: 24, name: "أ. فيصل المبارك", role: "مالك - فندق بوتيك الخبر", rating: 5, comment: "بما أن فندقي بوتيك صغير، احتجت تجهيزات خاصة ومميزة. البا الحديثة التجارية فهمت احتياجي وقدموا حلول مبتكرة وراقية جداً." },
    { id: 25, name: "أ. طلال الحميد", role: "مدير العمليات - فنادق موفنبيك", rating: 5, comment: "التزام البا الحديثة التجارية بالجودة والمواعيد شيء يحترم. خلصنا المشروع في الوقت المحدد بدون أي تأخير ومنتجاتهم ممتازة." },
    { id: 26, name: "م. بدر السالم", role: "مشرف فندقي - فندق هوليدي إن", rating: 5, comment: "خدمة ما بعد البيع عندهم ممتازة. أي استفسار أو طلب صيانة يتم التعامل معه بسرعة واحترافية. فريق يستحق الثقة." },
    { id: 27, name: "أ. محمد الرشيد", role: "المالك - شقق فندقية الرياض", rating: 5, comment: "جهزوا لي 50 شقة فندقية بالكامل. التنسيق كان سلس والنتيجة رائعة. النزلاء أشادوا بجودة الأثاث والتجهيزات." },
    { id: 28, name: "م. ياسر المطيري", role: "مدير المشتريات - فندق إنتركونتيننتال", rating: 5, comment: "البا الحديثة التجارية من الموردين المعتمدين عندنا من 5 سنوات. الجودة ثابتة والخدمة ممتازة. أسعارهم تنافسية جداً مقارنة بالجودة." },
    { id: 29, name: "أ. عبدالعزيز الحماد", role: "المدير الإقليمي - فنادق دبل تري", rating: 5, comment: "التعامل مع البا الحديثة التجارية يجعل العمل سهلاً. فريق محترف ومتفهم لاحتياجات الفنادق. التوصيل سريع والمنتجات أصلية." },
    { id: 30, name: "م. فهد الدوسري", role: "مهندس معماري - مكتب هندسي", rating: 5, comment: "أرشح البا الحديثة التجارية لكل عملائي في قطاع الضيافة. منتجاتهم عصرية وتواكب المعايير العالمية. فريق التصميم متعاون ومبدع." }
  ];

  const tslider = document.querySelector('.testimonials-slider');
  const ttrack = tslider?.querySelector('.tslider-track');
  const tProgressFill = tslider?.querySelector('#testimonialProgressFill');
  const tPrevBtn = tslider?.querySelector('.tslider-prev');
  const tNextBtn = tslider?.querySelector('.tslider-next');
  const tContainer = tslider?.querySelector('.tslider-container');

  const getPerView = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const renderTestimonialCards = (data) => {
    if (!ttrack) return;
    ttrack.innerHTML = '';
    data.forEach(item => {
      const stars = '★'.repeat(item.rating).padEnd(5, '☆');
      const card = document.createElement('div');
      card.className = 'testimonial-card tslide';
      card.innerHTML = `
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-text">${item.comment}</p>
        <div class="testimonial-author">
          <p class="testimonial-name">${item.name}</p>
          <p class="testimonial-role">${item.role}</p>
        </div>
      `;
      ttrack.appendChild(card);
    });
  };

  const data = (testimonialsData && testimonialsData.length > 0) ? testimonialsData : fallbackData;
  if (!testimonialsData || testimonialsData.length === 0) console.log('[Testimonials] Using fallback data');
  renderTestimonialCards(data);
  const tslides = ttrack?.querySelectorAll('.tslide');

  /* ---- Staggered card entrance ---- */
  const testimonialSection = document.querySelector('#testimonials');
  if (testimonialSection && tslides) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tslides.forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.06}s`;
            card.classList.add('card-visible');
          });
          // Clear inline delays once the entrance settles so hover stays snappy
          tslides.forEach((card, i) => {
            setTimeout(() => { card.style.transitionDelay = '0s'; }, (i * 0.06 + 0.75) * 1000);
          });
          cardObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    cardObserver.observe(testimonialSection);
  }

  if (tslider && tslides && tslides.length > 0) {
    let tcurrent = 0;
    let perView = getPerView();
    let pages = Math.ceil(tslides.length / perView);
    let pageStep = 0;
    let tInterval;
    let resizeTimer;

    const getGap = () => {
      if (!ttrack) return 0;
      const gap = parseFloat(getComputedStyle(ttrack).gap);
      return Number.isFinite(gap) ? gap : 0;
    };

    const measure = () => {
      // One page advances by perView slide widths plus the perView gaps between
      // them, which equals the track width + one gap (in px).
      pageStep = ttrack ? ttrack.clientWidth + getGap() : 0;
    };

    const lockTrackHeight = () => {
      if (!ttrack || !tslides.length) return;
      ttrack.style.height = '';
      let maxH = 0;
      tslides.forEach((slide) => {
        maxH = Math.max(maxH, slide.getBoundingClientRect().height);
      });
      if (maxH > 0) ttrack.style.height = `${maxH}px`;
    };

    const updateProgress = () => {
      if (!tProgressFill) return;
      const pct = pages > 0 ? ((tcurrent + 1) / pages) * 100 : 0;
      tProgressFill.style.width = `${pct}%`;
      const bar = tProgressFill.parentElement;
      if (bar) bar.setAttribute('aria-valuenow', String(Math.round(pct)));
    };

    const goToSlide = (index) => {
      tcurrent = ((index % pages) + pages) % pages;
      // Horizontal slide only — card dimensions stay locked via the track height,
      // so pagination never animates or changes heights.
      if (ttrack && pageStep > 0) {
        ttrack.style.transform = `translateX(-${tcurrent * pageStep}px)`;
      }
      updateProgress();
    };

    const stopAutoplay = () => clearInterval(tInterval);
    const startAutoplay = () => {
      clearInterval(tInterval);
      if (prefersReducedMotion) return;
      tInterval = setInterval(() => goToSlide(tcurrent + 1), 8000);
    };

    measure();
    lockTrackHeight();
    goToSlide(0);

    // Only autoplay while the testimonials section is on screen
    const tVisibility = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) startAutoplay();
        else stopAutoplay();
      });
    }, { threshold: 0.2 });
    tVisibility.observe(tslider);

    tPrevBtn?.addEventListener('click', () => {
      stopAutoplay();
      goToSlide(tcurrent - 1);
      startAutoplay();
    });
    tNextBtn?.addEventListener('click', () => {
      stopAutoplay();
      goToSlide(tcurrent + 1);
      startAutoplay();
    });
    tslider.addEventListener('mouseenter', stopAutoplay);
    tslider.addEventListener('mouseleave', startAutoplay);
    tslider.addEventListener('focusin', stopAutoplay);
    tslider.addEventListener('focusout', startAutoplay);

    /* ---- Touch swipe (RTL: swipe right moves forward) ---- */
    let tTouchStartX = null;
    tContainer?.addEventListener('touchstart', (evt) => {
      const first = evt.touches && evt.touches[0];
      if (!first) return;
      tTouchStartX = first.clientX;
    }, { passive: true });
    tContainer?.addEventListener('touchend', (evt) => {
      const first = evt.changedTouches && evt.changedTouches[0];
      if (tTouchStartX === null || !first) return;
      const dx = first.clientX - tTouchStartX;
      if (Math.abs(dx) > 48) {
        stopAutoplay();
        dx > 0 ? goToSlide(tcurrent + 1) : goToSlide(tcurrent - 1);
        startAutoplay();
      }
      tTouchStartX = null;
    }, { passive: true });

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newPerView = getPerView();
        if (newPerView !== perView) {
          perView = newPerView;
          pages = Math.ceil(tslides.length / perView);
          if (tcurrent > pages - 1) tcurrent = pages - 1;
        }
        // Re-measure geometry so the px page step and locked height track
        // the new viewport instead of jumping or clipping.
        measure();
        lockTrackHeight();
        goToSlide(tcurrent);
        startAutoplay();
      }, 150);
    };
    window.addEventListener('resize', onResize);

    // Re-lock once webfonts/layout settle so the final card heights don't shift
    window.addEventListener('load', () => {
      measure();
      lockTrackHeight();
      goToSlide(tcurrent);
    });
  }

  /* ---- Animated counters ---- */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (isNaN(target) || el.classList.contains('counted')) return;

        el.classList.add('counted');
        counterObserver.unobserve(el);

        const setFinal = () => {
          const t = target.toLocaleString();
          if (el.querySelector('.stat-number-val')) {
            el.querySelector('.stat-number-val').textContent = t;
          } else {
            el.textContent = t;
          }
        };

        if (prefersReducedMotion) {
          setFinal();
          return;
        }

        const duration = 2000;
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const current = Math.floor(progress * target);
          if (el.querySelector('.stat-number-val')) {
            el.querySelector('.stat-number-val').textContent = current.toLocaleString();
          } else {
            el.textContent = current.toLocaleString();
          }
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setFinal();
          }
        };

        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.stat-counter').forEach((el) => counterObserver.observe(el));

  /* ---- Products page wiring: product modal ---- */
  const initProductsPage = () => {
    const productModal = document.getElementById('productModal');
    if (productModal) {
      const modalImg = productModal.querySelector('.product-modal-img');
      const modalTitle = productModal.querySelector('.product-modal-title');
      const modalDesc = productModal.querySelector('.product-modal-desc');
      const modalSpecs = productModal.querySelector('.product-modal-specs');
      const modalClose = productModal.querySelector('.product-modal-close');
      const modalQuote = productModal.querySelector('.product-modal-quote');
      const focusables = () => Array.from(
        productModal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')
      );
      let lastFocused = null;

      const openModal = (product) => {
        const img = product.querySelector('img');
        const info = product.querySelector('.product-info');
        if (!img || !info) return;
        const name = info.querySelector('h3')?.textContent?.trim() || '';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalTitle.textContent = name;
        modalDesc.textContent = info.querySelector('.product-desc')?.textContent || '';
        modalSpecs.innerHTML = '';
        info.querySelectorAll('.product-spec').forEach(spec => {
          modalSpecs.appendChild(spec.cloneNode(true));
        });
        if (modalQuote) {
          modalQuote.href = `https://wa.me/966562933331?text=${encodeURIComponent(
            `أهلاً، أرغب بطلب عرض سعر وتوفر لـ «${name}» — مع إمكانية تزويدكم بكمية المنشأة.`
          )}`;
        }
        lastFocused = document.activeElement;
        productModal.classList.add('is-open');
        document.body.classList.add('modal-open');
        requestAnimationFrame(() => focusables()[0]?.focus());
      };

      const closeModal = () => {
        productModal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
        lastFocused?.focus?.();
      };

      /* Delegated binding — works with the static cards (no per-card listeners) */
      document.addEventListener('click', (e) => {
        const eye = e.target.closest('.product-view');
        if (eye) {
          e.stopPropagation();
          const item = eye.closest('.product-item');
          if (item) openModal(item);
          return;
        }
        const card = e.target.closest('.product-item');
        if (card && !e.target.closest('.product-actions')) {
          openModal(card);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest ? e.target.closest('.product-item') : null;
        if (card && e.target === card) {
          e.preventDefault();
          openModal(card);
        }
      });

      /* Focus trap inside the modal */
      productModal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        const list = focusables();
        if (list.length === 0) return;
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });

      modalClose?.addEventListener('click', closeModal);
      productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
      });

    }

  };

  initProductsPage();
});
