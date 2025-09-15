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
  // Existing scroll unlock code...
  setTimeout(() => {
    document.querySelector(".snap-container").classList.remove("no-scroll");
  }, 2800);
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
