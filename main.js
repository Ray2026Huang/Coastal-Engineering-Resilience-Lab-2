/* Coastal Engineering & Resilience Lab — page behaviour */
(function () {
  "use strict";

  var root = document.documentElement;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  /* Render a bilingual pair as two spans; CSS shows the active one. */
  function bi(o) {
    if (!o) return "";
    if (typeof o === "string") return esc(o);
    return '<span data-l="en">' + esc(o.en) + '</span><span data-l="zh">' + esc(o.zh || o.en) + "</span>";
  }

  /* ---------------- language ---------------- */
  var TITLES = {
    en: "Coastal Engineering & Resilience Lab · NTOU",
    zh: "海岸工程與防災研究室｜國立臺灣海洋大學"
  };
  function setLang(lang) {
    root.classList.remove("lang-en", "lang-zh");
    root.classList.add("lang-" + lang);
    root.setAttribute("lang", lang === "zh" ? "zh-Hant-TW" : "en");
    document.title = TITLES[lang];
    $$(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("lab-lang", lang); } catch (e) { /* storage unavailable */ }
  }
  $$(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });
  setLang(root.classList.contains("lang-zh") ? "zh" : "en");

  /* ---------------- mobile menu ---------------- */
  var menuBtn = $(".menu-btn"), nav = $(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- study-site map ---------------- */
  var SITES = window.SITES || {};
  var panel = $("#site-panel");
  var chipsEl = $("#site-chips");
  var siteKeys = Object.keys(SITES).sort(function (a, b) { return SITES[a].n - SITES[b].n; });

  if (chipsEl) {
    chipsEl.innerHTML = siteKeys.map(function (k) {
      var s = SITES[k];
      return '<button type="button" data-site="' + k + '" aria-pressed="false"><span class="mono">' + s.n + "</span>" + bi(s.name) + "</button>";
    }).join("");
  }

  function selectSite(key, focusPanel) {
    var s = SITES[key];
    if (!s || !panel) return;
    $$(".pin").forEach(function (p) { p.classList.toggle("active", p.dataset.site === key); });
    $$("#site-chips button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.site === key)); });
    var work = s.work.map(function (w) {
      return '<li><span class="when">' + esc(w.when) + "</span><span>" + bi({ en: w.en, zh: w.zh }) + "</span></li>";
    }).join("");
    panel.innerHTML =
      '<div class="site-panel-head">' +
        '<span class="site-num' + (s.lab ? " is-lab" : "") + '">' + s.n + "</span>" +
        "<h2>" + bi(s.name) + "</h2>" +
        '<span class="site-coord">' + esc(s.coord) + "</span>" +
      "</div>" +
      '<p class="site-focus">' + bi(s.focus) + "</p>" +
      '<ul class="site-work">' + work + "</ul>" +
      (s.link ? '<a class="site-link" href="' + s.link + '">' + bi({ en: "Go to the case study →", zh: "查看相關研究案例 →" }) + "</a>" : "");
    if (focusPanel) panel.focus({ preventScroll: true });
  }

  $$(".pin").forEach(function (p) {
    p.addEventListener("click", function () { selectSite(p.dataset.site); });
    p.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectSite(p.dataset.site, true); }
    });
  });
  if (chipsEl) {
    chipsEl.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-site]");
      if (b) selectSite(b.dataset.site);
    });
  }
  selectSite("hsinchu");

  /* ---------------- projects ---------------- */
  var PROJECTS = (window.PROJECTS || []).slice().sort(function (a, b) {
    return String(b.start).localeCompare(String(a.start));
  });
  var nNstc = PROJECTS.filter(function (p) { return p.type === "nstc"; }).length;
  var nAgency = PROJECTS.length - nNstc;
  var nSites = siteKeys.filter(function (k) { return !SITES[k].lab; }).length;

  function setText(sel, v) { $$(sel).forEach(function (el) { el.textContent = v; }); }
  setText("[data-count='nstc']", nNstc);
  setText("[data-count='agency']", nAgency);
  setText("[data-count='all']", PROJECTS.length);
  setText("[data-count='sites']", nSites);

  var projState = { type: "all", region: "all", expanded: false };
  var LIMIT = 12;
  var projList = $("#proj-list"), projMore = $("#proj-more"), projCount = $("#proj-count");

  function yearSpan(p) {
    var s = String(p.start).slice(0, 4), e = p.end ? String(p.end).slice(0, 4) : "";
    return e && e !== s ? s + "–" + e : s;
  }
  function renderProjects() {
    if (!projList) return;
    var rows = PROJECTS.filter(function (p) {
      return (projState.type === "all" || p.type === projState.type) &&
             (projState.region === "all" || p.region === projState.region);
    });
    var shown = projState.expanded ? rows : rows.slice(0, LIMIT);
    projList.innerHTML = shown.map(function (p) {
      var badges = "";
      if (p.type === "nstc") badges += '<span class="badge nstc">NSTC</span>';
      if (p.role) badges += '<span class="badge' + (p.role === "PI" ? " pi" : "") + '">' + esc(p.role) + "</span>";
      return '<li class="proj">' +
        '<span class="when">' + yearSpan(p) + "</span>" +
        '<span class="ttl">' + bi(p.title) + "</span>" +
        '<span class="badges">' + badges + "</span>" +
        '<span class="agency">' + bi(p.agency) + "</span>" +
      "</li>";
    }).join("") || '<li class="proj"><span></span><span class="ttl">' + bi({ en: "No projects match these filters.", zh: "沒有符合條件的計畫。" }) + "</span></li>";
    if (projCount) {
      projCount.innerHTML = bi({ en: rows.length + " projects", zh: "共 " + rows.length + " 項" });
    }
    if (projMore) {
      projMore.hidden = rows.length <= LIMIT;
      projMore.innerHTML = projState.expanded
        ? bi({ en: "Show fewer", zh: "收合" })
        : bi({ en: "Show all " + rows.length, zh: "顯示全部 " + rows.length + " 項" });
    }
  }
  $$("#proj-type button").forEach(function (b) {
    b.addEventListener("click", function () {
      projState.type = b.dataset.type;
      $$("#proj-type button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      renderProjects();
    });
  });
  var regionSel = $("#proj-region");
  if (regionSel) {
    regionSel.addEventListener("change", function () { projState.region = regionSel.value; renderProjects(); });
  }
  if (projMore) {
    projMore.addEventListener("click", function () { projState.expanded = !projState.expanded; renderProjects(); });
  }
  renderProjects();

  /* ---------------- publications ---------------- */
  var PUBS = (window.PUBLICATIONS || []).slice().sort(function (a, b) { return b.year - a.year; });
  function authors(a) {
    return esc(a).replace(/Huang, W\.-P\./g, '<span class="me">Huang, W.-P.</span>');
  }
  function renderPubs(group, el) {
    if (!el) return;
    el.innerHTML = PUBS.filter(function (p) { return p.group === group; }).map(function (p) {
      var doi = p.doi ? '<a href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">doi:' + esc(p.doi) + "</a>" : "";
      var corr = p.corresponding ? '<span class="corr">' + bi({ en: "* corresponding author", zh: "* 通訊作者" }) + "</span>" : "";
      return '<li class="pub"><span class="yr">' + p.year + "</span><div>" +
        '<div class="t">' + esc(p.title) + "</div>" +
        '<div class="a">' + authors(p.authors) + "</div>" +
        '<div class="j"><i>' + esc(p.journal) + "</i>, " + esc(p.details) + "</div>" +
        (doi || corr ? '<div class="meta">' + doi + corr + "</div>" : "") +
      "</div></li>";
    }).join("");
  }
  renderPubs("recent", $("#pubs-recent"));
  renderPubs("earlier", $("#pubs-earlier"));
  setText("[data-count='pubs-recent']", PUBS.filter(function (p) { return p.group === "recent"; }).length);

  /* ---------------- copy buttons ---------------- */
  $$("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var text = b.dataset.copy;
      var done = function () {
        var old = b.innerHTML;
        b.innerHTML = bi({ en: "Copied", zh: "已複製" });
        setTimeout(function () { b.innerHTML = old; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { selectText(b.previousElementSibling); });
      } else {
        selectText(b.previousElementSibling);
      }
    });
  });
  function selectText(el) {
    if (!el) return;
    var r = document.createRange(); r.selectNodeContents(el);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
  }

  /* ---------------- videos: respect reduced motion ---------------- */
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$("video[autoplay]").forEach(function (v) { v.removeAttribute("autoplay"); v.pause(); v.setAttribute("controls", ""); });
  }
})();
