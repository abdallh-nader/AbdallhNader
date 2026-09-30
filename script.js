/* ==========================================================
   EDIT HERE: personal info, links, skills, texts and projects
   ========================================================== */
const CONFIG = {
  linkedin: "https://www.linkedin.com/in/abdallh-nader-708b36380?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  github: "https://github.com/abdallh-nader",
  email: "mailto:abdallhnader2004@gmail.com",
  linktree: "https://linktr.ee/abdallhnader",
  MYCV: "https://drive.google.com/file/d/1g0k7r6J4j3n5X8l9K2F3L4M5N6O7P8Q9/view?usp=sharing",
  skills: [ "Data Structures ","Algorithms","Networking", "Python", "Java", "SQL","React", "HTML5", "CSS3", "JavaScript", "Git"]
};

const TEXT = {
  en: {
    nav_home: "Home", nav_about: "About", nav_projects: "Projects", nav_contact: "Contact",
    name: "Abdallh Nader",
    title: "Computer Science | Developer",
    intro: "I'm a Computer Science graduate interested in software development and technology. I enjoy turning ideas into working, useful projects.",
    cta: "View My Projects",
    about_h: "About",
    about_p1: "I hold a degree in Computer Science, where I built a strong foundation in programming, data structures, algorithms and software design.",
    about_p2: "I'm interested in web and software development, and I keep learning by building projects. Here are some of the tools I work with:",
    projects_h: "Projects",
    view: "View Project",
    contact_h: "Let's Connect",
    contact_p: "Have a question or an opportunity in mind? Reach out through any of these links.",
    email: "Email", linkedin: "LinkedIn", github: "GitHub", linktree: "SocialLinks",MYCV: "My CV"
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "نبذة عني", nav_projects: "المشاريع", nav_contact: "تواصل معي",
    name: "عبدالله نادر",
    title: " علوم الحاسوب | مطوّر",
    intro: "أنا خريج علوم حاسوب مهتم بتطوير البرمجيات والتكنولوجيا. أحب تحويل الأفكار إلى مشاريع عملية ومفيدة.",
    cta: "شاهد مشاريعي",
    about_h: "نبذة عني",
    about_p1: "أحمل شهادة في علوم الحاسوب، وقد بنيت خلالها أساساً قوياً في البرمجة وهياكل البيانات والخوارزميات وتصميم البرمجيات.",
    about_p2: "أهتم بتطوير الويب والبرمجيات، وأواصل التعلّم من خلال بناء المشاريع. من أبرز الأدوات التي أعمل بها:",
    projects_h: "المشاريع",
    view: "عرض المشروع",
    contact_h: "لنتواصل",
    contact_p: "لديك سؤال أو فرصة؟ تواصل معي عبر أي من الروابط التالية.",
    email: "البريد الإلكتروني", linkedin: "لينكدإن", github: "جيت هاب",linktree: "روابط التواصل",MYCV: "سيرتي الذاتية"
  }
};

/* Add a new project = add one more object to this array. */
const PROJECTS = [
  {
    title: { en: "Virtual Chemistry Lab", ar: "مختبر الكيمياء الافتراضي" },
    description: {
      en: "An interactive virtual chemistry laboratory for running experiments safely in the browser.",
      ar: "مختبر كيمياء افتراضي تفاعلي لإجراء التجارب بأمان داخل المتصفح."
    },
    image: "project1.jpg",
    url: "https://sci-sphere.vercel.app/"
  },
  {
    title: { en: "BALAG", ar: "بـلاغ" },
    description: {
      en: "A unified e-reporting platform that connects citizens with the relevant government departments to report and address issues related to health, environment, cleanliness, water, electricity, and public services.",
      ar:"منصة إلكترونية موحّدة لرفع البلاغات الحكومية، تربط المواطنين بالجهة المختصة لمعالجة قضايا الصحة والبيئة والنظافة والمياه والكهرباء والخدمات العامة."
    },
    image: "project2.jpg",
    url: "https://balag-git-main-asems-projects-2ef1e1b6.vercel.app/"
  },
  {
    title: { en: "SaferTech", ar: " سَفـرتِـك" },
    description: {
      en: "A smart tourism platform that brings together Jordan’s attractions, cultural experiences, bookings, and rewards in one place.",
      ar: "منصة سياحية ذكية تجمع استكشاف الأردن، التجارب الثقافية، الحجوزات والمكافآت في مكان واحد."
    },
    image: "project3.jpg",
    url: "https://safer-tech.vercel.app/"
  }
];

/* ================= Logic (no need to edit) ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let lang = "en";

function links() {
  const t = TEXT[lang];
  return [
    { label: t.email, href: `mailto:${CONFIG.email}`, external: false },
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

function renderProjects() {
  $("#project-grid").innerHTML = PROJECTS.map(p => `
    <article class="card">
      <div class="card-img"><img src="${p.image}" alt="${p.title[lang]}" loading="lazy" width="600" height="375"></div>
      <div class="card-body">
        <h3>${p.title[lang]}</h3>
        <p>${p.description[lang]}</p>
        <a class="btn" href="${p.url}" target="_blank" rel="noopener noreferrer">${TEXT[lang].view}</a>
      </div>
    </article>`).join("");
}

function renderSkills() {
  $("#skills").innerHTML = CONFIG.skills.map(s => `<li>${s}</li>`).join("");
}

function apply(next) {
  lang = next;
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => (el.textContent = t[el.dataset.i18n]));
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.title = lang === "ar"
    ? "عبدالله نادر | خريج علوم الحاسوب ومطوّر"
    : "Abdallh Nader | Computer Science Graduate & Developer";
  renderLinks();
  renderProjects();
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
  renderSkills();
  apply(saved);

  $$(".lang button").forEach(b =>
    b.addEventListener("click", () => b.dataset.lang !== lang && setLang(b.dataset.lang))
  );

  const io = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }), { threshold: 0.12 })
    : null;
  $$(".reveal").forEach(el => (io ? io.observe(el) : el.classList.add("visible")));
});
