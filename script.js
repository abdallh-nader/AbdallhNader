/* ==========================================================
   EDIT HERE: personal info, links, skills, texts and projects
   ========================================================== */
const CONFIG = {
  linkedin: "https://www.linkedin.com/in/abdallh-nader-708b36380?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  github: "https://github.com/abdallh-nader",
  email: "mailto:abdallhnader2004@gmail.com",
  linktree: "https://linktr.ee/abdallhnader",
  MYCV: "https://drive.google.com/file/d/1g0k7r6J4j3n5X8l9K2F3L4M5N6O7P8Q9/view?usp=sharing",
  /* cat: backend | web | tools     level: 0-100 (shown in the tooltip) */
  skills: [
    { name: "Data Structures", cat: "backend", level: 85 },
    { name: "Algorithms", cat: "backend", level: 80 },
    { name: "Python", cat: "backend", level: 85 },
    { name: "Java", cat: "backend", level: 80 },
    { name: "C#", cat: "backend", level: 75 },
    { name: "ASP.NET", cat: "backend", level: 70 },
    { name: "SQL", cat: "backend", level: 80 },
    { name: "REST APIs", cat: "backend", level: 80 },
    { name: "HTML5", cat: "web", level: 90 },
    { name: "CSS3", cat: "web", level: 85 },
    { name: "JavaScript", cat: "web", level: 85 },
    { name: "React", cat: "web", level: 75 },
    { name: "Git", cat: "tools", level: 80 },
    { name: "Docker", cat: "tools", level: 55 },
    { name: "Networking", cat: "tools", level: 70 },
    { name: "Agile Methodologies", cat: "tools", level: 75 }
  ]
};

const FILTERS = [
  { id: "all", key: "filter_all" },
  { id: "backend", key: "filter_backend" },
  { id: "web", key: "filter_web" },
  { id: "tools", key: "filter_tools" }
];

const TEXT = {
  en: {
    nav_home: "Home", nav_about: "About", nav_projects: "Projects", nav_contact: "Contact",
    name: "Abdallh Nader",
    roles: ["Computer Science Graduate", "Software Developer", "Web Developer"],
    intro: "I'm a Computer Science graduate interested in software development and technology. I enjoy turning ideas into working, useful projects.",
    cta: "View My Projects",
    about_h: "About",
    about_p1: "I hold a degree in Computer Science, where I built a strong foundation in programming, data structures, algorithms and software design.",
    about_p2: "I'm interested in web and software development, and I keep learning by building projects. Here are some of the tools I work with:",
    filter_all: "All", filter_backend: "Backend", filter_web: "Web", filter_tools: "DevOps & Tools",
    lvl_adv: "Advanced", lvl_prof: "Proficient", lvl_fam: "Familiar",
    projects_h: "Projects",
    view: "View Project",
    m_stack: "Tech stack", m_live: "Open live site", m_repo: "Source code",
    m_preview: "Load live preview", m_note: "Some sites block embedding. If the preview stays blank, open the live site.",
    m_close: "Close", to_top: "Back to top",
    contact_h: "Let's Connect",
    contact_p: "Have a question or an opportunity in mind? Reach out through any of these links.",
    email: "Email", linkedin: "LinkedIn", github: "GitHub", linktree: "SocialLinks", MYCV: "My CV"
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "نبذة عني", nav_projects: "المشاريع", nav_contact: "تواصل معي",
    name: "عبدالله نادر",
    roles: ["خريج علوم الحاسوب", "مطوّر برمجيات", "مطوّر ويب"],
    intro: "أنا خريج علوم حاسوب مهتم بتطوير البرمجيات والتكنولوجيا. أحب تحويل الأفكار إلى مشاريع عملية ومفيدة.",
    cta: "شاهد مشاريعي",
    about_h: "نبذة عني",
    about_p1: "أحمل شهادة في علوم الحاسوب، وقد بنيت خلالها أساساً قوياً في البرمجة وهياكل البيانات والخوارزميات وتصميم البرمجيات.",
    about_p2: "أهتم بتطوير الويب والبرمجيات، وأواصل التعلّم من خلال بناء المشاريع. من أبرز الأدوات التي أعمل بها:",
    filter_all: "الكل", filter_backend: "الخلفية", filter_web: "الويب", filter_tools: "DevOps والأدوات",
    lvl_adv: "متقدم", lvl_prof: "جيد", lvl_fam: "أساسي",
    projects_h: "المشاريع",
    view: "عرض المشروع",
    m_stack: "التقنيات المستخدمة", m_live: "فتح الموقع المباشر", m_repo: "الشيفرة المصدرية",
    m_preview: "تحميل المعاينة المباشرة", m_note: "بعض المواقع تمنع التضمين. إذا بقيت المعاينة فارغة افتح الموقع المباشر.",
    m_close: "إغلاق", to_top: "العودة للأعلى",
    contact_h: "لنتواصل",
    contact_p: "لديك سؤال أو فرصة؟ تواصل معي عبر أي من الروابط التالية.",
    email: "البريد الإلكتروني", linkedin: "لينكدإن", github: "جيت هاب", linktree: "روابط التواصل", MYCV: "سيرتي الذاتية"
  }
};

/* Add a new project = add one more object to this array.
   tech: badges shown in the modal | repo: GitHub link (falls back to your profile) */
const PROJECTS = [
  {
    title: { en: "Virtual Chemistry Lab", ar: "مختبر الكيمياء الافتراضي" },
    description: {
      en: "An interactive virtual chemistry laboratory for running experiments safely in the browser.",
      ar: "مختبر كيمياء افتراضي تفاعلي لإجراء التجارب بأمان داخل المتصفح."
    },
    image: "project1.jpg",
    url: "https://sci-sphere.vercel.app/",
    repo: "",
    tech: ["React", "JavaScript", "CSS3"]
  },
  {
    title: { en: "BALAG", ar: "بـلاغ" },
    description: {
      en: "A unified e-reporting platform that connects citizens with the relevant government departments to report and address issues related to health, environment, cleanliness, water, electricity, and public services.",
      ar: "منصة إلكترونية موحّدة لرفع البلاغات الحكومية، تربط المواطنين بالجهة المختصة لمعالجة قضايا الصحة والبيئة والنظافة والمياه والكهرباء والخدمات العامة."
    },
    image: "project2.jpg",
    url: "https://balag-git-main-asems-projects-2ef1e1b6.vercel.app/",
    repo: "",
    tech: ["React", "JavaScript", "CSS3"]
  },
  {
    title: { en: "SaferTech", ar: "سَفـرتِـك" },
    description: {
      en: "A smart tourism platform that brings together Jordan’s attractions, cultural experiences, bookings, and rewards in one place.",
      ar: "منصة سياحية ذكية تجمع استكشاف الأردن، التجارب الثقافية، الحجوزات والمكافآت في مكان واحد."
    },
    image: "project3.jpg",
    url: "https://safer-tech.vercel.app/",
    repo: "",
    tech: ["React", "JavaScript", "CSS3"]
  },
  {
    title: { en: "DUKKAN", ar: "دُكّان" },
    description: {
      en: "A modern e-commerce web application for online shopping, featuring an interactive shopping cart, seamless checkout flow, and an admin dashboard for product and order management.",
      ar: "منصة تسوق إلكترونية متكاملة لبيع المنتجات، تتميز بتصميم عصري وسلة شراء تفاعلية، مع لوحة تحكم كاملة لإدارة المنتجات ومتابعة الطلبات."
    },
    image: "project4.jpg",
    url: "https://myshop-xfh8.onrender.com/#",
    repo: "",
    tech: ["ASP.NET Core", "C#", "EF Core", "MySQL", "JavaScript"]
  }
];

/* ================= Logic (no need to edit) ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = "en";
let skillFilter = "all";
let revealIO = null;
let typerTimer = 0;

/* ---------- Links ---------- */
function links() {
  const t = TEXT[lang];
  return [
    { label: t.email, href: CONFIG.email, external: false },   // CONFIG.email already contains "mailto:"
    { label: t.linktree, href: CONFIG.linktree, external: true },
    { label: t.linkedin, href: CONFIG.linkedin, external: true },
    { label: t.github, href: CONFIG.github, external: true },
    { label: t.MYCV, href: "MyCV.pdf", external: true }
  ];
}
function linkHTML(l) {
  const ext = l.external ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<a href="${l.href}"${ext}>${l.label}</a>`;
}
function renderLinks() {
  const html = links().map(linkHTML).join("");
  $$("[data-social], [data-contact]").forEach(el => (el.innerHTML = html));
}

/* ---------- Scroll reveal ---------- */
function observeReveals(root = document) {
  $$(".reveal:not(.visible)", root).forEach(el => (revealIO ? revealIO.observe(el) : el.classList.add("visible")));
}

/* ---------- Projects ---------- */
function renderProjects() {
  $("#project-grid").innerHTML = PROJECTS.map((p, i) => `
    <div class="card-wrap reveal" style="--d:${i * 90}ms">
      <article class="card glass" data-i="${i}">
        <div class="card-img"><img src="${p.image}" alt="${p.title[lang]}" loading="lazy" width="600" height="375"></div>
        <div class="card-body">
          <h3>${p.title[lang]}</h3>
          <p>${p.description[lang]}</p>
          <button class="btn" type="button" data-open="${i}">${TEXT[lang].view}</button>
        </div>
      </article>
    </div>`).join("");
  observeReveals($("#project-grid"));
}

/* 3D tilt + spotlight (event delegation, throttled with rAF, mouse only) */
function initCards() {
  const grid = $("#project-grid");
  grid.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (card) openModal(+card.dataset.i);
  });
  if (reduceMotion) return;
  grid.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const c = e.target.closest(".card");
    if (!c) return;
    const r = c.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    cancelAnimationFrame(c._raf);
    c._raf = requestAnimationFrame(() => {
      c.style.setProperty("--mx", x + "px");
      c.style.setProperty("--my", y + "px");
      c.style.transform = `perspective(900px) rotateX(${(y / r.height - .5) * -9}deg) rotateY(${(x / r.width - .5) * 9}deg) translateZ(0)`;
    });
  });
  grid.addEventListener("pointerout", e => {
    const c = e.target.closest(".card");
    if (c && !c.contains(e.relatedTarget)) { cancelAnimationFrame(c._raf); c.style.transform = ""; }
  });
}

/* ---------- Skills: filter + tooltip ---------- */
function levelLabel(n) {
  const t = TEXT[lang];
  return n >= 80 ? t.lvl_adv : n >= 65 ? t.lvl_prof : t.lvl_fam;
}
function renderSkills() {
  $("#filters").innerHTML = FILTERS.map(f =>
    `<button type="button" data-cat="${f.id}" aria-pressed="${f.id === skillFilter}">${TEXT[lang][f.key]}</button>`).join("");
  $("#skills").innerHTML = CONFIG.skills.map(s =>
    `<li tabindex="0" data-cat="${s.cat}" data-level="${s.level}">${s.name}</li>`).join("");
  applyFilter(skillFilter, true);
}
function applyFilter(cat, instant = false) {
  skillFilter = cat;
  $$("#filters button").forEach(b => b.setAttribute("aria-pressed", b.dataset.cat === cat));
  $$("#skills li").forEach(li => {
    const show = cat === "all" || li.dataset.cat === cat;
    clearTimeout(li._t);
    if (instant) { li.hidden = !show; return; }
    if (show) {
      if (li.hidden) { li.hidden = false; void li.offsetWidth; } // reflow so the transition runs
      li.classList.remove("out");
    } else {
      li.classList.add("out");
      li._t = setTimeout(() => (li.hidden = true), 280);
    }
  });
}
function initSkills() {
  $("#filters").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (b && b.dataset.cat !== skillFilter) applyFilter(b.dataset.cat);
  });
  const tip = $("#tooltip"), list = $("#skills");
  const show = e => {
    const li = e.target.closest("li");
    if (!li) return;
    const lv = +li.dataset.level, r = li.getBoundingClientRect();
    tip.innerHTML = `<strong>${li.textContent}<span>${levelLabel(lv)}</span></strong><div class="bar"><i style="width:${lv}%"></i></div>`;
    tip.style.left = Math.max(90, Math.min(innerWidth - 90, r.left + r.width / 2)) + "px";
    tip.style.top = r.top - 10 + "px";
    tip.classList.add("show");
  };
  const hide = () => tip.classList.remove("show");
  list.addEventListener("pointerover", show);
  list.addEventListener("pointerout", hide);
  list.addEventListener("focusin", show);
  list.addEventListener("focusout", hide);
  addEventListener("scroll", hide, { passive: true });
}

/* ---------- Project modal ---------- */
function initModal() {
  const modal = $("#modal");
  let current = null;
  window.openModal = i => {
    const p = (current = PROJECTS[i]), t = TEXT[lang];
    $("#m-img").src = p.image;
    $("#m-title").textContent = p.title[lang].trim();
    $("#m-desc").textContent = p.description[lang];
    $("#m-stack").innerHTML = p.tech.map(x => `<li>${x}</li>`).join("");
    $("#m-actions").innerHTML =
      `<a class="btn" href="${p.url}" target="_blank" rel="noopener noreferrer">${t.m_live}</a>` +
      `<a class="btn ghost" href="${p.repo || CONFIG.github}" target="_blank" rel="noopener noreferrer">${t.m_repo}</a>`;
    $("#m-preview").innerHTML = `<button class="btn ghost" type="button" id="m-load">${t.m_preview}</button>`;
    modal.showModal();
    document.body.classList.add("lock");
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("show")));
  };
  const close = () => {
    modal.classList.remove("show");
    setTimeout(() => modal.open && modal.close(), reduceMotion ? 0 : 280);
  };
  $("#m-close").addEventListener("click", close);
  modal.addEventListener("click", e => { if (!e.target.closest(".modal-box")) close(); }); // backdrop click
  modal.addEventListener("click", e => {
    if (e.target.id !== "m-load") return;
    $("#m-preview").innerHTML =
      `<div class="frame"><iframe src="${current.url}" title="${current.title[lang]}" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe></div>` +
      `<p class="note">${TEXT[lang].m_note}</p>`;
  });
  modal.addEventListener("close", () => {          // also fires on Esc
    document.body.classList.remove("lock");
    modal.classList.remove("show");
    $("#m-preview").innerHTML = "";                // stops the iframe
  });
}

/* ---------- Typewriter ---------- */
function startTypewriter() {
  clearTimeout(typerTimer);
  const el = $("#typed"), words = TEXT[lang].roles;
  if (reduceMotion) { el.textContent = words[0]; return; }
  let w = 0, i = 0, del = false;
  (function tick() {
    const word = words[w];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let d = del ? 35 : 75;
    if (!del && i === word.length) { del = true; d = 1500; }
    else if (del && i === 0) { del = false; w = (w + 1) % words.length; d = 350; }
    typerTimer = setTimeout(tick, d);
  })();
}

/* ---------- Canvas background: particle network reacting to the mouse ---------- */
function initBackground() {
  const cv = $("#bg"), ctx = cv.getContext("2d");
  if (!ctx) return;
  const LINK = 130, MOUSE_R = 150;
  let w, h, pts = [], raf = 0;
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.floor((w * h) / 15000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.4 + .6
    }));
    if (reduceMotion) draw(false);
  }
  function draw(move = true) {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      if (move) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < MOUSE_R && d > 0) { const f = (1 - d / MOUSE_R) * .8; p.x += (dx / d) * f; p.y += (dy / d) * f; } // gentle push
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 6.283);
      ctx.fillStyle = "rgba(103, 232, 249, .7)";
      ctx.fill();
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - d / LINK) * .4})`;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
      const m = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
      if (m < MOUSE_R + 40) {
        ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - m / (MOUSE_R + 40)) * .55})`;
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
  }
  function loop() { draw(); raf = requestAnimationFrame(loop); }

  addEventListener("resize", resize);
  addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  document.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  document.addEventListener("visibilitychange", () => {   // save battery in background tabs
    cancelAnimationFrame(raf);
    if (!document.hidden && !reduceMotion) loop();
  });
  resize();
  if (!reduceMotion) loop();
}

/* ---------- Navbar, active link, back-to-top ---------- */
function initNav() {
  const header = $("#header"), toTop = $("#to-top"), navLinks = $$(".nav-links a");
  const ids = ["home", "about", "projects", "contact"];
  const setActive = id => navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach(id => spy.observe(document.getElementById(id)));
    new IntersectionObserver(([e]) => toTop.classList.toggle("show", !e.isIntersecting))
      .observe(document.getElementById("home"));
  }

  let ticking = false;
  addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle("scrolled", scrollY > 40);
      if (innerHeight + scrollY >= document.body.scrollHeight - 4) setActive("contact"); // short last section
      ticking = false;
    });
  }, { passive: true });
  header.classList.toggle("scrolled", scrollY > 40);

  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
}

/* ---------- Language ---------- */
function apply(next) {
  lang = next;
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => (el.textContent = t[el.dataset.i18n]));
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  $("#to-top").setAttribute("aria-label", t.to_top);
  $("#m-close").setAttribute("aria-label", t.m_close);
  document.title = lang === "ar"
    ? "عبدالله نادر | خريج علوم الحاسوب ومطوّر"
    : "Abdallh Nader | Computer Science Graduate & Developer";
  renderLinks();
  renderSkills();
  renderProjects();
  startTypewriter();
}

function setLang(next) {
  try { localStorage.setItem("lang", next); } catch (e) {}
  document.body.classList.add("switching");
  setTimeout(() => {
    apply(next);
    document.body.classList.remove("switching");
  }, 200);
}

document.addEventListener("DOMContentLoaded", () => {
  let saved = "en";
  try { saved = localStorage.getItem("lang") === "ar" ? "ar" : "en"; } catch (e) {}

  if ("IntersectionObserver" in window) {
    revealIO = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); revealIO.unobserve(e.target); }
    }), { threshold: 0.12 });
  }

  initCards();
  initSkills();
  initModal();
  initNav();
  initBackground();
  apply(saved);
  observeReveals();

  $$(".lang button").forEach(b =>
    b.addEventListener("click", () => b.dataset.lang !== lang && setLang(b.dataset.lang))
  );
});