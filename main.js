// Multi-language content
const translations = {
  en: {
    titleMain: "YuHan & Ceyon",
    titleSub: "Wedding Invitation",
    titleDate: "November 15, 2025",
    detailsTitle: "Details & RSVP",
    detailsLocation: "Location: Taipei, Taiwan",
    detailsTime: "Time: 6:00 PM",
    detailsDress: "Dress Code: Formal",
    detailsRsvp: "RSVP via the button or contact us for more info.",
  },
  zh: {
    titleMain: "YuHan & Ceyon",
    titleSub: "婚禮邀請函",
    titleDate: "2025年11月15日",
    detailsTitle: "婚禮細節與回覆",
    detailsLocation: "地點：台北，台灣",
    detailsTime: "時間：下午6:00",
    detailsDress: "服裝：正式",
    detailsRsvp: "請點擊按鈕或聯絡我們回覆。",
  },
  ko: {
    titleMain: "유한 & 세연",
    titleSub: "웨딩 초대장",
    titleDate: "2025년 11월 15일",
    detailsTitle: "세부 정보 및 RSVP",
    detailsLocation: "장소: 타이베이, 대만",
    detailsTime: "시간: 오후 6시",
    detailsDress: "드레스 코드: 정장",
    detailsRsvp: "버튼을 클릭하거나 문의해 주세요.",
  },
  ja: {
    titleMain: "ユーハン & セヨン",
    titleSub: "結婚式の招待状",
    titleDate: "2025年11月15日",
    detailsTitle: "詳細とご返信",
    detailsLocation: "場所：台北、台湾",
    detailsTime: "時間：午後6時",
    detailsDress: "ドレスコード：フォーマル",
    detailsRsvp: "ボタンをクリックするかご連絡ください。",
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
  const t = translations[lang] || translations["en"];
  document.getElementById("title-main").textContent = t.titleMain;
  document.getElementById("title-sub").textContent = t.titleSub;
  document.getElementById("title-date").textContent = t.titleDate;
  document.getElementById("details-title").textContent = t.detailsTitle;
  document.getElementById("details-location").textContent = t.detailsLocation;
  document.getElementById("details-time").textContent = t.detailsTime;
  document.getElementById("details-dress").textContent = t.detailsDress;
  document.getElementById("details-rsvp").textContent = t.detailsRsvp;
}

window.addEventListener("DOMContentLoaded", () => {
  setLanguage(getLang());
});
// Enable scroll after landing animation finishes
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".snap-container").classList.remove("no-scroll");
  }, 2800); // Adjust this timing to match your last animation
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
  console.log("hello");

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
