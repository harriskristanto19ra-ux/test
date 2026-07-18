/* SAFECHAIN — interactions & language toggle */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── i18n ─────────────────────────────────────────────────────── */

  var ZH = {
    skip: "跳至主要內容",
    nav1: "理念", nav2: "系統", nav3: "實證", nav4: "工法", nav5: "聯絡",
    cta: "展開合作",
    kicker: "安全鏈具工程 · 台灣",
    kickerAccent: "TAIWAN · FORGED",
    h1a: "每一個鏈環",
    h1b: "都為整條鏈",
    h1c: "<em>負責到底。</em>",
    lede: "安全鏈鍛造並測試在吊車、鑽井平台與生命線之下工作的承載鏈具：合金鏈條、吊鏈組與連接扣件，於台灣設計、製造並逐批驗證。",
    btnSystems: "探索系統",
    btnTalk: "聯絡工程團隊",
    scroll: "捲動",
    marquee: "<span>台灣鍛造</span><b>◦</b><em>一環一環驗證</em><b>◦</b>" +
      "<span>額定・測試・溯源</span><b>◦</b><em>一條鏈，一個承諾</em><b>◦</b>" +
      "<span>台灣鍛造</span><b>◦</b><em>一環一環驗證</em><b>◦</b>" +
      "<span>額定・測試・溯源</span><b>◦</b><em>一條鏈，一個承諾</em><b>◦</b>",
    manifestoTitle: "理念",
    manifesto: "鏈條從不會整條同時斷裂，斷的永遠是沒人檢查的那一環。<em>我們的存在，就是要讓那一環消失。</em>每個鏈環都經過鍛造、疲勞循環與拉力測試，讓整條鏈沒有最弱的一環，只有被證明過的一環。",
    aside: "從台中的鍛造廠到全球 38 個市場的吊掛現場，每一件安全鏈產品都帶著同一個承諾：撐得住，才出得了廠。",
    asideLink: "我們如何測試",
    systemsTitle: "系統與鏈具",
    systemsNote: "五大系列，同一標準。",
    s1: "合金起重鏈條", s1t: "80 級 · 100 級 · 校準鏈",
    s2: "吊鏈組與總成", s2t: "單肢至四肢 · 可調式 · 附證書",
    s3: "吊鉤、環眼與連接件", s3t: "鍛造合金 · 安全舌片 · 主環",
    s4: "綑綁與繫固系統", s4t: "運輸繫固 · 棘輪 · 70 級",
    s5: "客製與 OEM 工程", s5t: "共同設計 · 模具 · 自有品牌",
    proofTitle: "實證，而非承諾",
    stat1: "製造年資",
    stat2: "全球服務市場",
    stat3: "疲勞測試循環次數",
    stat4: "出廠前逐批驗證",
    proofNote: "每一個生產批次皆於廠內完成拉力測試，並附完整材料溯源：從鋼胚到成品鏈環。",
    quote: "「信任，是<br /><em>一環一環鍛造的。</em>」",
    quoteAttr: "安全鏈設計準則 第一條",
    methodTitle: "工法",
    methodNote: "三道關卡，絕無例外。",
    m1: "合金與幾何",
    m1p: "鋼材、斷面與焊點一體設計。我們在廠內打樣，淘汰只在紙上合格的設計。",
    m2: "測試到斷裂",
    m2p: "靜態拉力、疲勞循環、鹽霧、驗證負載。我們每天拉斷自己的鏈條，讓現場永遠不會。",
    m3: "認證與溯源",
    m3p: "鏈環序號、批次紀錄與第三方認證：每一環都交代得出自己的來歷。",
    contactA: "一起鍛造",
    contactB: "<em>下一個鏈環。</em>",
    contactNote: "工程詢問、OEM 專案與經銷合作，兩個工作天內回覆。",
    metaA: "廠房與總部",
    metaAp: "台灣・台中<br /><span lang=\"en\">Taichung, Taiwan</span>",
    metaB: "全球佈局",
    metaBp: "銷售遍及<br />38 個市場",
    metaC: "追蹤我們",
    footer: "© 2026 SAFECHAIN 安全鏈 · 一環一環鍛造。版權所有。",
    toTop: "回到頂端"
  };

  var TITLES = {
    en: "SAFECHAIN 安全鏈 — Every Link Answers",
    zh: "安全鏈 SAFECHAIN — 每一環，皆有實證"
  };

  var EN = {};
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) {
    EN[el.dataset.i18n] = el.innerHTML;
  });

  function setLang(lang) {
    var dict = lang === "zh" ? ZH : EN;
    nodes.forEach(function (el) {
      var t = dict[el.dataset.i18n];
      if (t !== undefined) el.innerHTML = t;
    });
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.title = TITLES[lang];
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.textContent = lang === "zh" ? "EN" : "中文";
      b.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切換至中文");
    });
    try { localStorage.setItem("safechain-lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("safechain-lang"); } catch (e) {}
  if (saved === "zh") setLang("zh");

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      setLang(document.documentElement.lang === "zh-Hant" ? "en" : "zh");
    });
  });

  /* ── Nav: gain surface once the page scrolls ─────────────────── */
  var nav = document.getElementById("nav");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ─────────────────────────────────────────────── */
  var menuBtn = document.getElementById("menuBtn");
  var menu = document.getElementById("menu");

  function setMenu(open) {
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }

  menuBtn.addEventListener("click", function () {
    setMenu(!menu.classList.contains("open"));
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ── Scroll reveals ──────────────────────────────────────────── */
  var revealed = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealed.forEach(function (el) { el.classList.add("on"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealed.forEach(function (el) { io.observe(el); });
  }

  /* ── Stat counters ───────────────────────────────────────────── */
  function animateCount(el) {
    var target = parseInt(el.dataset.count, 10) || 0;
    var start = null;
    var duration = 1400;

    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var counters = document.querySelectorAll(".count");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    counters.forEach(function (el) { el.textContent = el.dataset.count; });
  } else {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ── Hero drawing: gentle parallax on scroll ─────────────────── */
  var draw = document.querySelector(".hero-draw");
  if (draw && !reduceMotion) {
    window.addEventListener(
      "scroll",
      function () {
        var y = Math.min(window.scrollY, 900);
        draw.style.transform = "translateY(" + y * 0.16 + "px)";
      },
      { passive: true }
    );
  }
})();
