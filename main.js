// Shared constants
const MAP_URL =
  "https://www.google.com/maps/place/香頌私宅洋樓｜台北中山區高級餐廳推薦｜必吃私廚美食｜台北約會生日餐廳｜台北包場尾牙春酒餐廳推薦/@25.0539118,121.5363847,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a960065bd68b:0x3da82c7702c0e455!8m2!3d25.0539118!4d121.5363847!16s%2Fg%2F11c2l0z2_9?entry=tts&g_ep=EgoyMDI1MDkxNy4wIPu8ASoASAFQAw%3D%3D&skid=05ea0fe9-e5eb-4efc-94cd-ee8d7505de1e";

const GALLERY_IMAGES = [
  "0.01.jpg",
  "0.02.jpg",
  "0.03.jpg",
  "0.04.jpg",
  "0.05.jpg",
  "0.06.jpg",
  "0.07.jpg",
  "1.00.jpg",
  "1.01.jpg",
  "1.02.jpg",
  "1.03.jpg",
  "1.04.jpg",
  "1.05.jpg",
  "1.06.jpg",
  "1.07.jpg",
  "1.08.jpg",
  "1.09.jpg",
  "2.00.jpg",
  "2.01.jpg",
  "2.02.jpg",
  "2.03.jpg",
  "2.04.jpg",
  "2.05.jpg",
  "8.00.jpg",
  "8.01.jpg",
  "8.02.jpg",
  "8.03.jpg",
  "9.00.jpg",
  "9.01.jpg",
  "9.02.jpg",
];

function getLang() {
  const lang = navigator.language || navigator.userLanguage || "";
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("ko")) return "ko";
  if (lang.startsWith("ja")) return "ja";
  return "en";
}

function setText(id, text) {
  document.getElementById(id).textContent = text;
}

// Wrap each word of an element in a span so it can light up as you scroll.
// Whitespace (including the non-breaking spaces the Korean text relies on)
// stays as plain text, so the text itself is unchanged.
function splitWords(el) {
  const text = el.textContent;
  const segmenter =
    typeof Intl !== "undefined" && Intl.Segmenter
      ? new Intl.Segmenter(document.documentElement.lang, { granularity: "word" })
      : null;
  const pieces = segmenter
    ? Array.from(segmenter.segment(text), (seg) => seg.segment)
    : Array.from(text);
  const total = pieces.filter((piece) => !/^\s+$/.test(piece)).length;
  el.textContent = "";
  let n = 0;
  pieces.forEach((piece) => {
    if (/^\s+$/.test(piece)) {
      el.appendChild(document.createTextNode(piece));
      return;
    }
    const span = document.createElement("span");
    span.className = "word";
    span.style.setProperty("--i", (n / total).toFixed(3));
    span.textContent = piece;
    el.appendChild(span);
    n += 1;
  });
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  const t = translations[lang] || translations["en"];

  setText("title-main", t.titleMain);
  setText("title-date", t.titleDate);
  setText("details-title", t.detailsTitle);
  setText("details-location", t.detailsLocation);
  setText("details-time", t.detailsTime);
  setText("description-title", t.descriptionTitle);
  setText("description-content", t.descriptionContent);
  splitWords(document.getElementById("description-content"));

  setText("groom-title", t.groomTitle);
  setText("groom-name", t.groomName);
  setText("groom-parents-title", t.groomParentsTitle);
  setText("groom-father", t.groomFather);
  setText("groom-mother", t.groomMother);
  setText("bride-title", t.brideTitle);
  setText("bride-name", t.brideName);
  setText("bride-parents-title", t.brideParentsTitle);
  setText("bride-father", t.brideFather);
  setText("bride-mother", t.brideMother);

  setText("comments-title", t.commentsTitle);
  setText("comments-description", t.commentsDescription);

  setText("rsvp-text", t.rsvpText);
  setText("rsvp-description", t.rsvpDescription);

  // Link the venue name to Google Maps (the name differs per language).
  const detailsDescription = document.getElementById("details-description");
  detailsDescription.textContent = "";
  const parts = t.detailsDescription.split(/(Chanson Bistro|香頌私宅洋樓)/);
  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      const link = document.createElement("a");
      link.href = MAP_URL;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = part;
      detailsDescription.appendChild(link);
    } else if (part) {
      detailsDescription.appendChild(document.createTextNode(part));
    }
  });

  setText("thanks-title", t.thanksTitle);
  setText("thanks-text", t.thanksMessage);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
}

// Language: starts from the system language; the switcher changes it for this visit
window.addEventListener("DOMContentLoaded", () => {
  setLanguage(getLang());
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});

// Enable scroll once the landing animation finishes (the RSVP button's fade-in
// is the last one); the timeout is a fallback if animationend never fires.
window.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const lastAnimated = document.querySelector(".fade-in-rsvp");
  let unlocked = false;
  const unlock = () => {
    if (unlocked) return;
    unlocked = true;
    root.classList.remove("no-scroll");
  };
  if (lastAnimated) lastAnimated.addEventListener("animationend", unlock);
  setTimeout(unlock, 3000);
});

// Scroll-driven scenes. Each pinned .scene gets its progress as --p (0 to 1);
// the corner flowers get --fs (scale) and --e (end of page); .reveal blocks
// get --rv/--rd so they animate in and out; the gallery gets --gv (zoom).
window.addEventListener("DOMContentLoaded", () => {
  const scenes = Array.from(document.querySelectorAll(".scene"));
  const deco = document.querySelector(".deco");
  const landing = document.querySelector(".landing-bg");
  const thanks = document.querySelector(".thanks-section");
  const gallery = document.querySelector(".gallery-section");
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  const clamp01 = (n) => Math.min(1, Math.max(0, n));
  const smooth = (n) => n * n * (3 - 2 * n);
  let queued = false;

  function sceneProgress(rect, vh) {
    const span = rect.height - vh;
    return span > 0 ? clamp01(-rect.top / span) : 0;
  }

  function update() {
    queued = false;
    const vh = window.innerHeight;
    scenes.forEach((scene) => {
      const rect = scene.getBoundingClientRect();
      if (rect.bottom < -vh || rect.top > 2 * vh) return; // far away: skip
      scene.style.setProperty("--p", sceneProgress(rect, vh).toFixed(4));
    });
    const atEnd = window.scrollY + vh >= document.documentElement.scrollHeight - 2;
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -vh || rect.top > 2 * vh) return;
      // 0 to 1 as the block comes in from the bottom, and 1 to 0 as it leaves at the top
      // data-by-section: follow the whole section's arrival (a slow, full-screen ramp)
      const panel = el.hasAttribute("data-by-section") ? el.closest(".panel") : null;
      const enter = atEnd
        ? 1
        : panel
          ? smooth(clamp01((vh - panel.getBoundingClientRect().top) / (vh * 0.95)))
          : smooth(clamp01((vh * 0.98 - rect.top) / (vh * 0.3)));
      const exit = smooth(clamp01(rect.bottom / 80));
      el.style.setProperty("--rv", Math.min(enter, exit).toFixed(3));
      el.style.setProperty("--rd", ((1 - enter) * 70 - (1 - exit) * 50).toFixed(1));
    });
    if (gallery) {
      // 1 while the gallery fills the screen, falling to 0 as it scrolls away either way
      const gv = 1 - Math.min(1, Math.abs(gallery.getBoundingClientRect().top) / vh);
      gallery.style.setProperty("--gv", gv.toFixed(3));
    }
    if (deco && landing && thanks) {
      // Flowers: full size on the landing, half size while reading, full size again at the end
      const shrink = smooth(sceneProgress(landing.getBoundingClientRect(), vh));
      const end = smooth(clamp01((vh - thanks.getBoundingClientRect().top) / vh));
      deco.style.setProperty("--fs", (1 - 0.5 * shrink + 0.5 * end).toFixed(4));
      deco.style.setProperty("--e", end.toFixed(4));
    }
  }

  function queueUpdate() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }

  window.addEventListener("scroll", queueUpdate, { passive: true });
  window.addEventListener("resize", queueUpdate);
  window.addEventListener("load", queueUpdate);
  update();
});

// Gallery (scoped to .gallery-section)
window.addEventListener("DOMContentLoaded", () => {
  const gallerySection = document.querySelector(".gallery-section");
  if (!gallerySection) return;

  const track = gallerySection.querySelector(".gallery-track");
  const dotsContainer = gallerySection.querySelector(".gallery-dots");
  const counter = gallerySection.querySelector(".gallery-counter");
  if (!track || !dotsContainer) return;

  GALLERY_IMAGES.forEach((file, idx) => {
    const slide = document.createElement("div");
    slide.className = "gallery-slide";
    const img = document.createElement("img");
    img.src = `assets/gallery/${file}`;
    img.alt = `Photo ${idx + 1}`;
    img.loading = idx === 0 ? "eager" : "lazy";
    img.decoding = "async";
    slide.appendChild(img);
    track.appendChild(slide);
  });

  const slides = Array.from(track.querySelectorAll(".gallery-slide"));

  // make section focusable for keyboard navigation
  if (!gallerySection.hasAttribute("tabindex"))
    gallerySection.setAttribute("tabindex", "0");

  const maxDots = 5;
  let dotsStart = -1;

  // The slide whose centre is nearest the centre of the track
  function currentIndex() {
    const centre = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - centre);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    return best;
  }

  // Dots show a window of up to maxDots around the current slide, with small
  // end dots when more slides exist beyond the window.
  function windowStart(index) {
    const total = slides.length;
    if (total <= maxDots) return 0;
    const start = Math.max(0, index - Math.floor(maxDots / 2));
    return Math.min(start, total - maxDots);
  }

  function renderDots(index) {
    dotsStart = windowStart(index);
    const total = slides.length;
    const end = Math.min(total, dotsStart + maxDots);
    dotsContainer.innerHTML = "";
    for (let i = dotsStart; i < end; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      if ((dotsStart > 0 && i === dotsStart) || (end < total && i === end - 1)) {
        btn.classList.add("small");
      }
      btn.setAttribute("aria-label", `Go to photo ${i + 1}`);
      btn.setAttribute("data-index", i);
      btn.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(btn);
    }
  }

  function setActive(index) {
    dotsContainer.querySelectorAll("button").forEach((b) => {
      const active = Number(b.getAttribute("data-index")) === index;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
  }

  // Rebuild the dots only when the visible window moves
  function sync(index) {
    if (windowStart(index) !== dotsStart) renderDots(index);
    setActive(index);
  }

  function goTo(index) {
    const idx = Math.min(Math.max(index, 0), slides.length - 1);
    const slide = slides[idx];
    const left = slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
    sync(idx);
  }

  // sync on scroll using rAF
  let raf = null;
  track.addEventListener(
    "scroll",
    () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        sync(currentIndex());
        raf = null;
      });
    },
    { passive: true }
  );

  // keyboard navigation: left/right arrows
  gallerySection.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "Right") {
      e.preventDefault();
      goTo(currentIndex() + 1);
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      e.preventDefault();
      goTo(currentIndex() - 1);
    }
  });

  // Mouse drag-to-scroll (touch already scrolls natively). A drag must not
  // count as a click, or it would open the lightbox.
  let dragStartX = 0;
  let dragStartLeft = 0;
  let pressed = false;
  let dragged = false;
  track.addEventListener("mousedown", (e) => {
    pressed = true;
    dragged = false;
    dragStartX = e.pageX;
    dragStartLeft = track.scrollLeft;
  });
  window.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    const dx = e.pageX - dragStartX;
    if (Math.abs(dx) > 4) {
      dragged = true;
      track.classList.add("is-dragging");
    }
    if (dragged) track.scrollLeft = dragStartLeft - dx;
  });
  window.addEventListener("mouseup", () => {
    pressed = false;
    track.classList.remove("is-dragging");
  });
  track.addEventListener(
    "click",
    (e) => {
      if (dragged) {
        e.stopPropagation();
        e.preventDefault();
        dragged = false;
      }
    },
    true
  );

  renderDots(0);
  setActive(0);

  window.addEventListener("resize", () => sync(currentIndex()));
});

// Pause the video when it is less than half visible
window.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video-wrapper video");
  if (!video) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
          video.pause();
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(video);
});

// RSVP button scrolls to the RSVP section
window.addEventListener("DOMContentLoaded", () => {
  const rsvpBtn = document.getElementById("rsvp-btn");
  const rsvpSection = document.querySelector(".RSVP-section");
  if (!rsvpBtn || !rsvpSection) return;

  rsvpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    rsvpSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Lightbox for gallery images (PC and iPhone support)
window.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector("#lightbox .close");
  const lightboxInner = document.getElementById("lightbox-inner");

  if (!lightbox || !lightboxImg || !closeBtn || !lightboxInner) return;

  // Variables for transform state
  let scale = 1;
  let lastScale = 1;
  let startDistance = 0;
  let isPinching = false;

  let translateX = 0;
  let translateY = 0;

  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // requestAnimationFrame batching for transform updates
  let rafId = null;

  // Store transform origin (percent, relative to image, 0-100)
  let originXPercent = 50;
  let originYPercent = 50;

  // Element that opened the lightbox, to restore focus on close
  let openerImg = null;

  // Helper to clamp value between min and max
  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  // Helper to get max allowed translation so image never drags too far outside container
  function getMaxTranslate() {
    // Use natural size * scale
    const img = lightboxImg;
    const container = lightboxInner;
    let imgWidth = img.naturalWidth || img.width;
    let imgHeight = img.naturalHeight || img.height;
    let contWidth = container.clientWidth;
    let contHeight = container.clientHeight;
    let scaledWidth = imgWidth * scale;
    let scaledHeight = imgHeight * scale;
    // If image smaller than container, center: allow 0 translation only
    let maxX = Math.max(0, (scaledWidth - contWidth) / 2);
    let maxY = Math.max(0, (scaledHeight - contHeight) / 2);
    return { maxX, maxY };
  }

  // Batch transform updates using requestAnimationFrame
  function scheduleUpdate() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      // Clamp translateX, translateY so image never drags too far outside
      const { maxX, maxY } = getMaxTranslate();
      translateX = clamp(translateX, -maxX, maxX);
      translateY = clamp(translateY, -maxY, maxY);
      lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      rafId = null;
    });
  }

  // Helper to get midpoint of two touches relative to image in percent
  function setTransformOriginFromTouches(touches) {
    if (touches.length !== 2) return;
    const rect = lightboxImg.getBoundingClientRect();
    const x1 = touches[0].clientX;
    const y1 = touches[0].clientY;
    const x2 = touches[1].clientX;
    const y2 = touches[1].clientY;
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    originXPercent = ((midX - rect.left) / rect.width) * 100;
    originYPercent = ((midY - rect.top) / rect.height) * 100;
    lightboxImg.style.transformOrigin = `${originXPercent}% ${originYPercent}%`;
  }

  // Helper to set transform origin from mouse position relative to image in percent
  function setTransformOriginFromMouse(event) {
    const rect = lightboxImg.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    originXPercent = ((x - rect.left) / rect.width) * 100;
    originYPercent = ((y - rect.top) / rect.height) * 100;
    lightboxImg.style.transformOrigin = `${originXPercent}% ${originYPercent}%`;
  }

  const getDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const openLightbox = (img) => {
    openerImg = img;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.style.display = "flex";
    // Reset transform state on open
    scale = 1;
    lastScale = 1;
    translateX = 0;
    translateY = 0;
    originXPercent = 50;
    originYPercent = 50;
    lightboxImg.style.transformOrigin = "50% 50%";
    scheduleUpdate();
    closeBtn.focus();
  };

  const closeLightbox = () => {
    lightbox.style.display = "none";
    if (openerImg) openerImg.focus({ preventScroll: true });
    openerImg = null;
  };

  const isOpen = () => lightbox.style.display === "flex";

  // Gallery images: click for mouse/keyboard, tap detection for touch
  document.querySelectorAll(".gallery-slide img").forEach((img) => {
    let touchStartX = 0;
    let touchStartY = 0;
    const threshold = 10;

    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.addEventListener("click", () => openLightbox(img));
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(img);
      }
    });

    img.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    });

    img.addEventListener("touchend", (e) => {
      if (e.changedTouches.length === 1) {
        const deltaX = Math.abs(e.changedTouches[0].clientX - touchStartX);
        const deltaY = Math.abs(e.changedTouches[0].clientY - touchStartY);
        if (deltaX < threshold && deltaY < threshold) {
          // Suppress the synthetic click so the lightbox isn't opened twice
          e.preventDefault();
          openLightbox(img);
        }
      }
    });
  });

  // Pinch-to-zoom on mobile
  lightboxInner.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      isPinching = true;
      startDistance = getDistance(e.touches);
      lastScale = scale;
      if (startDistance < 10) startDistance = 10;
      // Only update originXPercent/YPercent at gesture start
      setTransformOriginFromTouches(e.touches);
    } else if (e.touches.length === 1 && scale > 1) {
      // Start dragging
      isDragging = true;
      dragStartX = e.touches[0].clientX - translateX;
      dragStartY = e.touches[0].clientY - translateY;
    }
  });

  lightboxInner.addEventListener("touchmove", (e) => {
    if (isPinching && e.touches.length === 2) {
      const currentDistance = getDistance(e.touches);
      scale = Math.min(
        Math.max(lastScale * (currentDistance / startDistance), 1),
        5
      );
      // Do not update originXPercent/YPercent here (only at gesture start)
      scheduleUpdate();
      e.preventDefault();
    } else if (isDragging && e.touches.length === 1 && scale > 1) {
      translateX = e.touches[0].clientX - dragStartX;
      translateY = e.touches[0].clientY - dragStartY;
      scheduleUpdate();
      e.preventDefault();
    }
  });

  lightboxInner.addEventListener("touchend", (e) => {
    if (e.touches.length < 2) {
      isPinching = false;
    }
    if (e.touches.length === 0) {
      isDragging = false;
    }
  });

  // Mouse drag support
  lightboxInner.addEventListener("mousedown", (e) => {
    if (scale > 1) {
      isDragging = true;
      dragStartX = e.clientX - translateX;
      dragStartY = e.clientY - translateY;
      e.preventDefault();
    }
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging && scale > 1) {
      translateX = e.clientX - dragStartX;
      translateY = e.clientY - dragStartY;
      scheduleUpdate();
      e.preventDefault();
    }
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Mouse wheel and trackpad pinch zoom for PC
  lightboxInner.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();

      // On Mac trackpad, pinch zoom triggers deltaY with ctrlKey = true
      let delta = 0;
      if (e.ctrlKey) {
        setTransformOriginFromMouse(e);
        // Treat as pinch zoom
        delta = -e.deltaY / 100; // scale factor proportional to pinch
      } else {
        return; // do nothing on normal scroll
      }

      const newScale = Math.min(Math.max(scale + delta, 1), 5);

      if (newScale !== scale) {
        // Adjust translateX and translateY to zoom relative to transform origin
        const rect = lightboxImg.getBoundingClientRect();
        // Use stored originXPercent/YPercent
        const originX = rect.left + (originXPercent / 100) * rect.width;
        const originY = rect.top + (originYPercent / 100) * rect.height;

        // Calculate offset from origin to current translate
        const dx = e.clientX - originX;
        const dy = e.clientY - originY;

        // Calculate scale change ratio
        const scaleRatio = newScale / scale;

        // Update translate to keep the point under cursor stable
        translateX = translateX - dx * (scaleRatio - 1);
        translateY = translateY - dy * (scaleRatio - 1);

        scale = newScale;
        scheduleUpdate();
      }
    },
    { passive: false }
  );

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeLightbox();
  });
});
