// Multi-language content
const translations = {
  en: {
    titleMain: "YuHan & Ceyon",
    titleSub: "Wedding Invitation",
    titleDate: "November 15, 2025",
    detailsTitle: "Date Time & Location",
    detailsLocation: "52 Jianguo N Rd, Zhongshan District, Taipei City",
    detailsTime: "Saturday, November 15, 2025, 6:00 PM",
    descriptionTitle: "Marriage",
    descriptionContent:
      "Horizontal and vertical lines intersect like woven fabric, and we want to weave our lives together into a family. Based on mutual respect and sincerity, we are starting to build a warm and solid home. Give us your blessings and encouragement, so we can live correctly with our dreams and intentions. We will cherish our hearts and create a path of happiness together.",
    commentsTitle: "Leave a Message",
    commentsDescription:
      "We would love to hear from you! Please leave your blessings and messages below.",
    rsvpText:
      "Kindly RSVP by October 15 to let us know if you will join our celebration and make our day truly special.",
    detailsDescription:
      "The weeding will be held at the Chanson Bistro, located in the heart of Taipei City. We look forward to celebrating this special day with you!",
    rsvpDescription: "Open RSVP",
    thanksTitle: "Thank You!",
    thanksMessage: "We are looking forward to celebrating with you!",
  },
  zh: {
    titleMain: "裕翰 & Ceyon",
    titleSub: "婚禮邀請函",
    titleDate: "2025年11月15日",
    detailsTitle: "婚禮日期與地點",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025年11月15日（星期六） 下午6:00",
    descriptionTitle: "結婚",
    descriptionContent:
      "結婚 橫線和縱線相遇，就像織成一塊布一樣， 我們兩個也想把各自的生活編成一個家庭。 以對彼此的尊重和真心為基礎，打造堅實溫馨的家園的我們的開始 祝福和鼓勵我，讓我能夠以美好的夢想和正確的意志正確生活 我會長久地保留那顆心，一起創造幸福的道路。",
    commentsTitle: "留下您的祝福或心意",
    commentsDescription: "您的話語將在我們的特別日子被珍藏與回味。",
    rsvpText: "請於10月15日前回覆是否出席，您的到來將讓我們的日子更加美好。",
    detailsDescription:
      "婚禮將在位於台北市中心的香頌私宅洋樓舉行。我們期待與您一同慶祝這個特別的日子！",
    rsvpDescription: "開啟 RSVP",
    thanksTitle: "感謝您！",
    thanksMessage: "我們期待與您一同慶祝！",
  },
  ko: {
    titleMain: "유한 & 세연",
    titleSub: "웨딩 초대장",
    titleDate: "2025년 11월 15일",
    detailsTitle: "날짜, 시간 및 장소",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025년 11월 15일 토요일 오후 6시",
    descriptionTitle: "결혼",
    descriptionContent:
      "가로와 세로의 선이 만나는 것처럼 우리의 삶을 하나로 엮어 하나의 가정을 만들고자 합니다. 서로에 대한 존중과 진심을 바탕으로 따뜻하고 견고한 가정을 시작합니다. 축복과 격려를 주셔서 우리의 꿈과 의지를 올바르게 지켜나갈 수 있도록 해 주세요. 우리는 마음을 소중히 하고 함께 행복의 길을 만들어 갈 것입니다.",
    commentsTitle: "축복이나 마음을 남겨주세요",
    commentsDescription:
      "당신의 말씀이 우리의 특별한 날에 소중히 간직될 것입니다.",
    rsvpText:
      "2025년 10월 15일까지 참석 여부를 알려주시고, 당신의 참석이 우리의 날을 더욱 특별하게 만듭니다.",
    detailsDescription:
      "결혼식은 타이베이 시 중심에 위치한 香頌私宅洋樓에서 열립니다. 이 특별한 날을 함께 축하하기를 기대합니다!",
    rsvpDescription: "RSVP 열기",
    thanksTitle: "감사합니다!",
    thanksMessage: "여러분과 함께 축하할 날을 기대합니다!",
  },
  ja: {
    titleMain: "ユーハン & セヨン",
    titleSub: "結婚式の招待状",
    titleDate: "2025年11月15日",
    detailsTitle: "日時と場所",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025年11月15日（土）午後6時",
    descriptionTitle: "結婚",
    descriptionContent:
      "水平線と垂直線が交わるように、私たちはそれぞれの生活を一つの家庭として編みたいと思います。互いへの尊重と誠意に基づき、温かく堅実な家庭を築き始めます。私たちが夢と意志を正しく生きられるよう、祝福と励ましをお願いします。心を大切にし、一緒に幸福への道を作っていきます。",
    commentsTitle: "祝福やメッセージをお書きください",
    commentsDescription: "あなたの言葉は、私たちの特別な日に大切に残されます。",
    rsvpText:
      "2025年10月15日までにご出欠をご連絡いただき、あなたのご参加が私たちの特別な一日をより素晴らしいものにします。",
    detailsDescription:
      "結婚式は台北市の中心にある香頌私宅洋樓で行われます。この特別な日を皆さまと一緒にお祝いできることを楽しみにしています！",
    rsvpDescription: "RSVPを開く",
    thanksTitle: "心より感謝申し上げます",
    thanksMessage: "皆さまと一緒にお祝いできることを楽しみにしています！",
  },
};

function getLang() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("ko")) return "ko";
  if (lang.startsWith("ja")) return "ja";
  return "en";
}

function setLanguage(lang) {
  console.log("Setting language to:", lang);
  document.documentElement.lang = lang;
  const t = translations[lang] || translations["en"];
  document.getElementById("title-main").textContent = t.titleMain;
  document.getElementById("title-sub").textContent = t.titleSub;
  document.getElementById("title-date").textContent = t.titleDate;
  document.getElementById("details-title").textContent = t.detailsTitle;
  document.getElementById("details-location").textContent = t.detailsLocation;
  document.getElementById("details-time").textContent = t.detailsTime;
  document.getElementById("description-title").textContent = t.descriptionTitle;
  document.getElementById("description-content").textContent =
    t.descriptionContent;

  document.getElementById("comments-title").textContent = t.commentsTitle;
  document.getElementById("comments-description").textContent =
    t.commentsDescription;

  document.getElementById("rsvp-text").textContent = t.rsvpText;
  document.getElementById("rsvp-description").textContent = t.rsvpDescription;

  let detailsDescText = t.detailsDescription;
  if (detailsDescText.includes("Chanson Bistro")) {
    detailsDescText = detailsDescText.replace(
      "Chanson Bistro",
      '<a href="https://www.google.com/maps/place/香頌私宅洋樓｜台北中山區高級餐廳推薦｜必吃私廚美食｜台北約會生日餐廳｜台北包場尾牙春酒餐廳推薦/@25.0539118,121.5363847,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a960065bd68b:0x3da82c7702c0e455!8m2!3d25.0539118!4d121.5363847!16s%2Fg%2F11c2l0z2_9?entry=tts&g_ep=EgoyMDI1MDkxNy4wIPu8ASoASAFQAw%3D%3D&skid=05ea0fe9-e5eb-4efc-94cd-ee8d7505de1e" target="_blank">Chanson Bistro</a>'
    );
  } else if (detailsDescText.includes("香頌私宅洋樓")) {
    detailsDescText = detailsDescText.replace(
      "香頌私宅洋樓",
      '<a href="https://www.google.com/maps/place/香頌私宅洋樓｜台北中山區高級餐廳推薦｜必吃私廚美食｜台北約會生日餐廳｜台北包場尾牙春酒餐廳推薦/@25.0539118,121.5363847,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a960065bd68b:0x3da82c7702c0e455!8m2!3d25.0539118!4d121.5363847!16s%2Fg%2F11c2l0z2_9?entry=tts&g_ep=EgoyMDI1MDkxNy4wIPu8ASoASAFQAw%3D%3D&skid=05ea0fe9-e5eb-4efc-94cd-ee8d7505de1e" target="_blank">香頌私宅洋樓</a>'
    );
  }
  document.getElementById("details-description").innerHTML = detailsDescText;

  document.getElementById("thanks-title").textContent = t.thanksTitle;
  document.getElementById("thanks-text").textContent = t.thanksMessage;
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("Detected language:", getLang());
  setLanguage(getLang());
});
// Enable scroll after landing animation finishes
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".snap-container").classList.remove("no-scroll");
  }, 1800); // Adjust this timing to match your last animation
});

document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  if (name && email) {
    document.getElementById(
      "rsvp-message"
    ).textContent = `Thank you, ${name}! Your RSVP has been received.`;
    e.target.reset();
  } else {
    document.getElementById("rsvp-message").textContent =
      "Please fill in all fields.";
  }
});

// Gallery initialization (scoped to .gallery-section)
window.addEventListener("DOMContentLoaded", () => {
  const gallerySection = document.querySelector(".gallery-section");
  if (!gallerySection) return;

  const track = gallerySection.querySelector(".gallery-track");
  const slides = Array.from(track.querySelectorAll(".gallery-slide"));
  const dotsContainer = gallerySection.querySelector(".gallery-dots");
  const counter = gallerySection.querySelector(".gallery-counter");
  if (!track || slides.length === 0 || !dotsContainer) return;

  // make section focusable for keyboard navigation
  if (!gallerySection.hasAttribute("tabindex"))
    gallerySection.setAttribute("tabindex", "0");

  // build dots
  dotsContainer.innerHTML = "";
  slides.forEach((slide, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = i === 0 ? "active" : "";
    btn.setAttribute("aria-label", `Go to photo ${i + 1}`);
    btn.setAttribute("data-index", String(i));
    btn.addEventListener("click", () => {
      track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setActive(i);
    });
    dotsContainer.appendChild(btn);
  });

  // helper to set active dot and counter
  function setActive(index) {
    const buttons = Array.from(dotsContainer.querySelectorAll("button"));
    buttons.forEach((b, bi) => {
      b.classList.toggle("active", bi === index);
      b.setAttribute("aria-pressed", bi === index ? "true" : "false");
    });
    if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
  }

  // compute current index from scroll position
  function currentIndex() {
    const w = track.clientWidth || window.innerWidth;
    return Math.round(track.scrollLeft / w);
  }

  // sync on scroll using rAF
  let raf = null;
  track.addEventListener(
    "scroll",
    () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const idx = Math.min(Math.max(currentIndex(), 0), slides.length - 1);
        setActive(idx);
        raf = null;
      });
    },
    { passive: true }
  );

  // keyboard navigation: left/right arrows
  gallerySection.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "Right") {
      e.preventDefault();
      const idx = Math.min(currentIndex() + 1, slides.length - 1);
      track.scrollTo({ left: slides[idx].offsetLeft, behavior: "smooth" });
      setActive(idx);
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      e.preventDefault();
      const idx = Math.max(currentIndex() - 1, 0);
      track.scrollTo({ left: slides[idx].offsetLeft, behavior: "smooth" });
      setActive(idx);
    }
  });

  // initial counter state
  setActive(0);

  // ensure active stays correct after resize
  window.addEventListener("resize", () => {
    setActive(currentIndex());
  });
});

// Smooth scroll to RSVP section when RSVP button is clicked
const rsvpBtn = document.querySelector(".rsvp-link a"); // adjust selector if needed
if (rsvpBtn) {
  rsvpBtn.addEventListener("click", (e) => {
    const rsvpSection = document.querySelector(".RSVP-section");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

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
  let lastTranslateX = 0;
  let lastTranslateY = 0;

  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // requestAnimationFrame batching for transform updates
  let rafId = null;

  // Store transform origin (percent, relative to image, 0-100)
  let originXPercent = 50;
  let originYPercent = 50;

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
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
    // Reset transform state on open
    scale = 1;
    lastScale = 1;
    translateX = 0;
    translateY = 0;
    lastTranslateX = 0;
    lastTranslateY = 0;
    originXPercent = 50;
    originYPercent = 50;
    lightboxImg.style.transformOrigin = "50% 50%";
    scheduleUpdate();
  };

  document.querySelectorAll(".gallery-slide img").forEach((img) => {
    let touchStartX = 0;
    let touchStartY = 0;
    const threshold = 10;

    img.addEventListener("click", () => openLightbox(img));

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
      lastTranslateX = translateX;
      lastTranslateY = translateY;
    }
  });

  // Mouse drag support
  lightboxInner.addEventListener("mousedown", (e) => {
    if (scale > 1) {
      isDragging = true;
      dragStartX = e.clientX - translateX;
      dragStartY = e.clientY - translateY;
      // Only set originXPercent/YPercent once per gesture, if wanted (not needed for drag)
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

  window.addEventListener("mouseup", (e) => {
    if (isDragging) {
      isDragging = false;
      lastTranslateX = translateX;
      lastTranslateY = translateY;
    }
  });

  // Mouse wheel and trackpad pinch zoom for PC
  lightboxInner.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();

      // On Mac trackpad, pinch zoom triggers deltaY with ctrlKey = true
      let delta = 0;
      if (e.ctrlKey) {
        // Only update originXPercent/YPercent once per gesture, so only if ctrlKey and maybe not every wheel event
        setTransformOriginFromMouse(e);
        // Treat as pinch zoom
        delta = -e.deltaY / 100; // scale factor proportional to pinch
      } else {
        // Optional: allow regular scroll zoom with shift key or ignore
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

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
