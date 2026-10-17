// Multi-language content, one object per language (en, zh, ko, ja).
// Every language must define the same keys; the check below warns if one is missing.
const translations = {
  en: {
    titleMain: "Yuhan & Ceyon",
    titleDate: "November 15, 2025",
    detailsTitle: "Date Time & Location",
    detailsLocation: "52 Jianguo N Rd, Zhongshan District, Taipei City",
    detailsTime: "Saturday, November 15, 2025, 6:00 PM",
    descriptionTitle: "Marriage",
    descriptionContent:
      "Horizontal and vertical lines intersect like woven fabric, and we want to weave our lives together into a family. Based on mutual respect and sincerity, we are starting to build a warm and solid home. Give us your blessings and encouragement, so we can live correctly with our dreams and intentions. We will cherish our hearts and create a path of happiness together.",
    groomTitle: "Groom",
    groomName: "蕭裕翰",
    groomParentsTitle: "Groom Parents",
    groomFather: "蕭宏州",
    groomMother: "鄭雅瑩",
    brideTitle: "Bride",
    brideName: "김세연",
    brideParentsTitle: "Bride Parents",
    brideFather: "김영중",
    brideMother: "조혜영",
    commentsTitle: "Leave a Message",
    commentsDescription:
      "We would love to hear from you! Please leave your blessings and messages below.",
    rsvpText:
      "Kindly RSVP by October 20 to let us know if you will join our celebration and make our day truly special.",
    detailsDescription:
      "The wedding will be held at the Chanson Bistro, located in the heart of Taipei City. We look forward to celebrating this special day with you!",
    rsvpDescription: "Open",
    thanksTitle: "Thank You!",
    thanksMessage: "We are looking forward to celebrating with you!",
  },
  zh: {
    titleMain: "裕翰 & Ceyon",
    titleDate: "2025年11月15日",
    detailsTitle: "婚禮日期與地點",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025年11月15日（星期六） 下午6:00",
    descriptionTitle: "結婚",
    descriptionContent:
      "結婚就像橫線和縱線相遇編織成一塊布一樣，我們兩個將以彼此尊重和真心為基礎，把各自的生活編成一個堅實溫馨的家園。在您祝福和鼓勵下，我們會長久保持那顆真誠的心，一起創造幸福的道路。",
    groomTitle: "新郎",
    groomName: "蕭裕翰",
    groomParentsTitle: "男方家長",
    groomFather: "蕭宏州",
    groomMother: "鄭雅瑩",
    brideTitle: "新娘",
    brideName: "金世娫",
    brideParentsTitle: "女方家長",
    brideFather: "金榮中",
    brideMother: "趙惠影",
    commentsTitle: "留下您的祝福或心意",
    commentsDescription: "您的話語將在我們的特別日子被珍藏與回味。",
    rsvpText: "請於10月20日前回覆是否出席，您的到來將讓我們的日子更加美好。",
    detailsDescription:
      "婚禮將在位於台北市中心的香頌私宅洋樓舉行。我們期待與您一同慶祝這個特別的日子！",
    rsvpDescription: "開啟",
    thanksTitle: "感謝您！",
    thanksMessage: "我們期待與您一同慶祝！",
  },
  ko: {
    titleMain: "유한 & 세연",
    titleDate: "2025년 11월 15일",
    detailsTitle: "날짜, 시간 및 장소",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025년 11월 15일 토요일 오후 6시",
    descriptionTitle: "결혼",
    descriptionContent:
      "가로실과 세로실이 만나  하나의 천을 짜듯,  저희 두 사람도, 각자였던 삶을 엮어 하나의 가정을 이루려 합니다.  서로에 대한 존중과 진심을 바탕으로  단단하고 포근한 보금자리를 만들어 갈  저희의 시작에  좋은 꿈, 바른 뜻으로 올바르게 살 수 있도록  축복과 격려 주시면 그 마음을 오래도록 간직하며 행복한 길을 함께 만들어가겠습니다.",
    commentsTitle: "축복이나 마음을 남겨주세요",
    commentsDescription:
      "당신의 말씀이 우리의 특별한 날에 소중히 간직될 것입니다.",
    groomTitle: "신랑",
    groomName: "蕭裕翰",
    groomParentsTitle: "신랑의 부모님",
    groomFather: "蕭宏州",
    groomMother: "鄭雅瑩",
    brideTitle: "신부",
    brideName: "김세연",
    brideParentsTitle: "신부의 부모님",
    brideFather: "김영중",
    brideMother: "조혜영",
    rsvpText:
      "2025년 10월 20일까지 참석 여부를 알려주시고, 당신의 참석이 우리의 날을 더욱 특별하게 만듭니다.",
    detailsDescription:
      "결혼식은 타이베이 시 중심에 위치한 香頌私宅洋樓에서 열립니다. 이 특별한 날을 함께 축하하기를 기대합니다!",
    rsvpDescription: "열기",
    thanksTitle: "감사합니다!",
    thanksMessage: "여러분과 함께 축하할 날을 기대합니다!",
  },
  ja: {
    titleMain: "ユーハン & セヨン",
    titleDate: "2025年11月15日",
    detailsTitle: "日時と場所",
    detailsLocation: "台北市中山區建國北路二段52號",
    detailsTime: "2025年11月15日（土）午後6時",
    descriptionTitle: "結婚",
    descriptionContent:
      "水平線と垂直線が交わるように、私たちはそれぞれの生活を一つの家庭として編みたいと思います。互いへの尊重と誠意に基づき、温かく堅実な家庭を築き始めます。私たちが夢と意志を正しく生きられるよう、祝福と励ましをお願いします。心を大切にし、一緒に幸福への道を作っていきます。",
    commentsTitle: "祝福やメッセージをお書きください",
    commentsDescription: "あなたの言葉は、私たちの特別な日に大切に残されます。",
    groomTitle: "新郎",
    groomName: "蕭裕翰",
    groomParentsTitle: "新郎の両親",
    groomFather: "蕭宏州",
    groomMother: "鄭雅瑩",
    brideTitle: "新婦",
    brideName: "金世娫",
    brideParentsTitle: "新婦の両親",
    brideFather: "金榮中",
    brideMother: "趙惠影",
    rsvpText:
      "2025年10月20日までにご出欠をご連絡いただき、あなたのご参加が私たちの特別な一日をより素晴らしいものにします。",
    detailsDescription:
      "結婚式は台北市の中心にある香頌私宅洋樓で行われます。この特別な日を皆さまと一緒にお祝いできることを楽しみにしています！",
    rsvpDescription: "開く",
    thanksTitle: "心より感謝申し上げます",
    thanksMessage: "皆さまと一緒にお祝いできることを楽しみにしています！",
  },
};

Object.keys(translations).forEach((lang) => {
  Object.keys(translations.en).forEach((key) => {
    if (!(key in translations[lang])) {
      console.warn(`translations.${lang} is missing "${key}"`);
    }
  });
});
