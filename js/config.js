/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Gravity Mantra",
    suffix: ".",
    tagline: "Multi-Storey Bar & Kitchen",
    description: "Gravity Mantra is a premium multi-storey bar and restaurant in Sector 18, Noida offering delicious multi-cuisine food, handcrafted drinks, and live music.",
    keywords: "Gravity Mantra, Noida restro bar, Sector 18 restaurants, live music Noida, biryani, North Indian food, cocktail bar",
    themeColor: "#120e0d",
    domain: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmPmJekJQpWa7qWNF9DcLlsfb26V2flNNGN7Qs6nXcCjrR1WkQPXGZEqRUxOHmgchncpDoTXQnZMyZ6fsEMwIjP4BuFT4joPLR3XSkkWv6HaM_r8IeT6NBIb_RpoDCdUtMVcwBg=w289-h312-n-k-no",
    faviconEmoji: "🍸",
    whatsappNumber: "919599196535"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#120e0d",
      bgCard: "#1c1614",
      bgLight: "#28201d",
      primary: "#e67e22",
      primaryHover: "#f39c12",
      text: "#f0e6df",
      textMuted: "#a89b91",
      accent: "#3a2c27"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Multi-Storey Restro-Bar & Kitchen",
    title: "Experience Exceptional Food & Live Music",
    description: "Immerse yourself in great vibes, comfortable seating, and an exquisite dining experience opposite TGIP Mall.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmPmJekJQpWa7qWNF9DcLlsfb26V2flNNGN7Qs6nXcCjrR1WkQPXGZEqRUxOHmgchncpDoTXQnZMyZ6fsEMwIjP4BuFT4joPLR3XSkkWv6HaM_r8IeT6NBIb_RpoDCdUtMVcwBg=w289-h312-n-k-no",
    stats: [
      { value: "7 Days", label: "Open 12 PM - 12 AM" },
      { value: "4.5 ★", label: "Top Rated Restro-Bar" },
      { value: "Multi", label: "Storey Dining & Bar" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Vibrant Ambience, Gourmet Food & Great Spirits",
    paragraphs: [
      "Located in the vibrant hub of Sector 18, Noida (opposite TGIP Mall), Gravity Mantra is a multi-storey restaurant and bar designed to offer an unforgettable dining experience.",
      "Whether you are craving authentic Awadhi Biryani, classic fish and chips, or sizzling peri-peri chicken alongside live music, Gravity Mantra provides the ideal sanctuary for food lovers and night owls alike."
    ],
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmPwzXxpEx4YH78rsQSHpSpkeQujI36XuqY26nUU7xHACgddNF0HcxSFfNFnX26g9wxKpn6yDCDjZbRRhusfNJ8mesfIceuEod70vgjE5qV5p4IXvX3rsOb5ueoipxSfTfdLaDuGCA=w145-h156-n-k-no",
    imageAlt: "Interior view of Gravity Mantra multi-storey lounge and dining",
    experienceValue: "100%",
    experienceLabel: "Great Hospitality"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Chef's Recommendations",
    title: "Popular House Specials",
    badge: "Must Try",
    description: "Signature curries, roasts, and biryanis crafted with authentic spices and fresh ingredients.",
    items: [
      {
        badge: "Chef Special",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
        alt: "Peri - Peri Chicken served with Mediterranean vegetables and pepper rice",
        diet: "nonveg",
        title: "Peri - Peri Chicken",
        price: "₹375",
        desc: "Served with Mediterranean vegetables, rich jus, pepper rice, and house-style baked potatoes."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
        alt: "Awadhi ki Biryani served with Burhani Raita and salan",
        diet: "nonveg",
        title: "Awadhi ki Biryani",
        price: "₹350",
        desc: "Aromatic slow-cooked rice delicacy (choice of veg, chicken, or lamb) served with Burhani Raita and salan."
      },
      {
        badge: "Classic",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        alt: "The Classic Fish and Chips",
        diet: "nonveg",
        title: "The Classic Fish & Chips",
        price: "₹450",
        desc: "Crispy golden fried fish fillets served with tartar sauce and seasoned fries. Needs no description!"
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Dining Deals",
    title: "Exclusive Reserve Offers",
    items: [
      {
        tag: "DINEOUT SPECIAL",
        title: "Reserve Table via Swiggy",
        desc: "Book your dining slot in advance to unlock exclusive meal deals and discount vouchers.",
        code: "GM-SWIGGY",
        highlight: false
      },
      {
        tag: "HAPPY HOURS",
        title: "Live Music Nights",
        desc: "Pair your favorite dishes with signature drinks during our special evening live music sessions.",
        code: "LIVEBEATS",
        highlight: true
      },
      {
        tag: "ZOMATO DINING",
        title: "Dine-in Discount",
        desc: "Pay your dining bill through Zomato Pay to earn cashback and partner benefits.",
        code: "GM-ZOMATO",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Explore Menu",
    title: "Multi-Cuisine Delights",
    pdfUrl: "assets/gravity-mantra-menu.pdf",
    pdfFilename: "Gravity_Mantra_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "mains", label: "Main Course", active: false },
      { id: "biryani", label: "Biryani & Rice", active: false },
      { id: "continental", label: "Continental & Grills", active: false },
      { id: "asian", label: "Asian & Oriental", active: false }
    ],
    items: [
      {
        category: "mains",
        img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=600",
        title: "Butter Chicken",
        price: "₹375",
        diet: "nonveg",
        desc: "Tender chicken cooked in a smooth, creamy tomato and butter gravy.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "mains",
        img: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=600",
        title: "Laal Maas",
        price: "₹400",
        diet: "nonveg",
        desc: "Fiery Rajasthani mutton curry prepared with whole red chillies and local spices.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "mains",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600",
        title: "Goan Fish / Prawn Curry",
        price: "₹425 / ₹525",
        diet: "nonveg",
        desc: "Traditional coconut-based Goan curry infused with tangy tamarind and aromatic spices.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "mains",
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600",
        title: "Lucknowi Nehari",
        price: "₹450",
        diet: "nonveg",
        desc: "Slow-cooked aromatic meat stew stewed overnight with traditional Lucknowi spices.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "mains",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Chettinad",
        price: "₹350",
        diet: "nonveg",
        desc: "Spicy South Indian chicken curry made with roasted spices and fresh coconut.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "biryani",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
        title: "Awadhi ki Biryani",
        price: "₹275 / ₹350 / ₹400",
        diet: "nonveg",
        desc: "Choice of Vegetarian, Chicken, or Lamb. Served with Burhani Raita and salan.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "continental",
        img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600",
        title: "Grilled Basil Chicken",
        price: "₹375",
        diet: "nonveg",
        desc: "Served with Mediterranean vegetables, jus, pepper rice, and baked potatoes.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "continental",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        title: "The Classic Fish and Chips",
        price: "₹450",
        diet: "nonveg",
        desc: "Crispy batter-fried fish fillets served with classic French fries and tartar sauce.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "asian",
        img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=600",
        title: "Red / Green Thai Curry",
        price: "₹275 / ₹350",
        diet: "veg",
        desc: "Fragrant coconut-based Thai curry packed with vegetables/chicken, served with jasmine rice.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      },
      {
        category: "asian",
        img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600",
        title: "Chilly Chicken with Gravy",
        price: "₹375",
        diet: "nonveg",
        desc: "Classic Indo-Chinese style chicken tossed with bell peppers and green chillies in savory gravy.",
        swiggyUrl: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"This place is amazing. The ambience is really fantastic and seating are comfortable. Amazing place with live music... The food tastes super and the quantity of food is also very nice. With good portions. I would recommend dahi kebabs, chicken lollypop, brownie and noodles Manchurian... Multi storey bar and restaurant in Sector 18, Noida, located opposite to GIP Mall. Food was great. Staff behavior was all very professional and polite. The overall atmosphere inside was amazing. Had an amazing dining experience at Gravity Mantra Cafe in Noida! Highly recommend to all food lovers....\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "Ashish Mishra",
        role: "Local Guide · 121 reviews"
      },
      {
        stars: 5,
        text: "\"If you're looking for a fantastic dining experience, look no further! The food was absolutely delicious and perfectly cooked, the service was friendly and attentive, and the ambiance was cozy and inviting. Every bite was a treat, and we left feeling satisfied and happy. Highly recommend!\"",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100",
        name: "Ayush Khandelwal",
        role: "Local Guide · 17 reviews"
      },
      {
        stars: 5,
        text: "\"I recently visited a restaurant bar and had a fantastic experience. The atmosphere was lively and welcoming, and the food and drinks were both top-notch. The staff were friendly and attentive, and the prices were reasonable for the quality of the experience. Highly recommended!\"",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100",
        name: "Foody Travel Moody",
        role: "Local Guide · 75 reviews"
      }
    ],
    googleCta: {
      title: "Enjoyed your time at Gravity Mantra?",
      desc: "Share your dining experience with us on Google Maps!",
      url: "https://maps.google.com/?q=Gravity+Mantra+Sector+18+Noida"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Inside Gravity Mantra",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnfZ1x5EMsJQWfVyxM1MZGR90PUyBz6J1DoaN-ePLjY6RcAN6uZc7D65mPF-gSoxJQPWkNjkLBT_SMSf7vwLCbVes1Xrf5E_exN_Z5AXR9yk4QHvU9lPu-mrtmuMXrVM0x7Iie6=w243-h203-n-k-no-nu", alt: "Gravity Mantra seating & bar space" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmtB92hCZ0Knqn402s1BALHZO5aeKfv8x7LhUABKAc1taerKJCvKpvhs3bvuUBTK8_T0_qZ_r_FfwXc8RpephObgMR5kOtI_WczAzbGqFVq1JvdnT1vPaCoobPEzcfTl1Zms3-r=w243-h174-n-k-no-nu", alt: "Multi-storey restaurant ambience" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk479NRFDtRld2fG_j4apvMOKPG--MegKsmgGhCahfH_QWqciwO4BZ8STNa0GOHFagE52bA-5IE2F0aYMdB9_6YFDNeD6lJyB3KMDcWDcitfcBYUVuvLWegVf2iDCOsCI1JPeGt6Q=w243-h406-n-k-no-nu", alt: "Bar area setup" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVWwpLJh72m7WABoJ3fnyiur07oyNlK44GuWnAJAGOzNJP_iV6p4HCpw1DvSQx4Ck0_IRUKMHuhtiki-oIf_UQCbkvSZxEfRrQSDHPCGCnlY7Pqb3JaEYpY5ZlBgFdso8HY1c=w243-h174-n-k-no-nu", alt: "Dining lounge" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Timings",
    title: "Visit Us in Sector 18",
    description: "Located conveniently in the bustling market of Sector 18, right opposite TGIP Mall.",
    address: "J 56, Opposite TGIP Mall, Sector 18, Noida, Uttar Pradesh 201301",
    hours: [
      "Monday - Sunday: 12:00 PM - 12:00 AM"
    ],
    email: "info@gravitymantra.com",
    phone: "+91 9599196535",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7424622080706!2d77.324268!3d28.569262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce548981f3ebd%3A0xb3bd388f8df4eb1!2sGravity%20Mantra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "A premier multi-storey bar and kitchen serving gourmet food, crafted drinks, and great times in Noida.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/gravitymantra?stkn=MXE5cHY5M3h3cW9ycw==", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/gravity-mantra-sector-18-noida?amp=1", iconClass: "ph-fork-knife" },
      { platform: "swiggy", url: "https://www.swiggy.com/restaurants/gravity-mantra-sector-18-vikaspuri-noida-892504/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve", iconClass: "ph-storefront" }
    ],
    copyright: "© 2026 Gravity Mantra. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "GravityMantra_Guest",
    password: "gravitymantra"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
