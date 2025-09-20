// Multi-language content
const translations = {
  en: {
    titleMain: "YuHan & Ceyon",
    titleSub: "Wedding Invitation",
    titleDate: "November 15, 2025",
    detailsTitle: "Details & RSVP",
    detailsLocation: "52 Jianguo N Rd, Zhongshan District, Taipei City",
    detailsTime: "Saturday, November 15, 2025, 6:00 PM",
    descriptionTitle: "Marriage",
    descriptionContent:
      "Horizontal and vertical lines intersect like woven fabric, and we want to weave our lives together into a family. Based on mutual respect and sincerity, we are starting to build a warm and solid home. Give us your blessings and encouragement, so we can live correctly with our dreams and intentions. We will cherish our hearts and create a path of happiness together.",
    commentsTitle: "Leave a Message",
    commentsDescription:
      "We would love to hear from you! Please leave your blessings and messages below.",
  },
  zh: {
    titleMain: "YuHan & Ceyon",
    titleSub: "婚禮邀請函",
    titleDate: "2025年11月15日",
    detailsTitle: "婚禮細節與回覆",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025年11月15日（星期六） 下午6:00",
    descriptionTitle: "結婚",
    descriptionContent:
      "結婚 橫線和縱線相遇，就像織成一塊布一樣， 我們兩個也想把各自的生活編成一個家庭。 以對彼此的尊重和真心為基礎，打造堅實溫馨的家園的我們的開始 祝福和鼓勵我，讓我能夠以美好的夢想和正確的意志正確生活 我會長久地保留那顆心，一起創造幸福的道路。",
    commentsTitle: "留下您的祝福或心意",
    commentsDescription: "您的話語將在我們的特別日子被珍藏與回味。",
  },
  ko: {
    titleMain: "유한 & 세연",
    titleSub: "웨딩 초대장",
    titleDate: "2025년 11월 15일",
    detailsTitle: "세부 정보 및 RSVP",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025년 11월 15일 토요일 오후 6시",
    descriptionTitle: "결혼",
    descriptionContent:
      "가로와 세로의 선이 만나는 것처럼 우리의 삶을 하나로 엮어 하나의 가정을 만들고자 합니다. 서로에 대한 존중과 진심을 바탕으로 따뜻하고 견고한 가정을 시작합니다. 축복과 격려를 주셔서 우리의 꿈과 의지를 올바르게 지켜나갈 수 있도록 해 주세요. 우리는 마음을 소중히 하고 함께 행복의 길을 만들어 갈 것입니다.",
    commentsTitle: "축복이나 마음을 남겨주세요",
    commentsDescription:
      "당신의 말씀이 우리의 특별한 날에 소중히 간직될 것입니다.",
  },
  ja: {
    titleMain: "ユーハン & セヨン",
    titleSub: "結婚式の招待状",
    titleDate: "2025年11月15日",
    detailsTitle: "詳細とご返信",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025年11月15日（土）午後6時",
    descriptionTitle: "結婚",
    descriptionContent:
      "水平線と垂直線が交わるように、私たちはそれぞれの生活を一つの家庭として編みたいと思います。互いへの尊重と誠意に基づき、温かく堅実な家庭を築き始めます。私たちが夢と意志を正しく生きられるよう、祝福と励ましをお願いします。心を大切にし、一緒に幸福への道を作っていきます。",
    commentsTitle: "祝福やメッセージをお書きください",
    commentsDescription: "あなたの言葉は、私たちの特別な日に大切に残されます。",
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
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("Detected language:", getLang());
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
