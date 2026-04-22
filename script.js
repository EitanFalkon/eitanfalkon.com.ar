// ── Email obfuscation ──
(function () {
  const u = 'falkoneitan';
  const d = 'gmail.com';
  const href = 'mailto:' + u + '@' + d;
  ['email-btn', 'email-btn-2'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });
})();

// ── Translations ──
const translations = {
  es: {
    'nav.about':       'Sobre mí',
    'nav.experience':  'Experiencia',
    'nav.education':   'Educación',
    'nav.contact':     'Contacto',
    'nav.interests':   'Más sobre mí',
    'hero.subtitle':   'Negocios y Tecnología · ITBA',
    'about.p1':        'Estudio Negocios y Tecnología en el ITBA. Me entusiasma pensar proyectos, armar cosas desde cero y llevarlas a la acción. Me gusta trabajar en equipo, liderar con propósito y generar impacto real.',
    'about.p2':        'Vengo del mundo del liderazgo juvenil, donde descubrí lo mucho que disfruto conectar con otros, organizar y hacer que las cosas sucedan. Me interesa la intersección entre tecnología, impacto social y gestión.',
    'exp.auja.title':  'Chair — AUJA',
    'exp.auja.date':   '2025 – actualidad',
    'exp.auja.desc':   'Represento a AUJA ante el ITBA. La organización trabaja para combatir el antisemitismo en las universidades y crear espacios de diálogo interreligioso.',
    'exp.bnei.title':  'Coordinador y Capacitador — Bnei Akiva',
    'exp.bnei.date':   '2020 – 2024',
    'exp.bnei.desc':   'Comencé como madrij, referente y líder de grupos de chicos y adolescentes. Con el tiempo pasé a coordinar equipos y a dictar el curso formal de formación de madrijim de Bnei Akiva Argentina, trabajando sobre liderazgo, vínculos y responsabilidad grupal.',
    'exp.diller.title':'Junior Counselor — Diller Teen Fellows',
    'exp.diller.date': '2022 – 2023',
    'exp.diller.desc': 'Programa internacional de liderazgo judío enfocado en el vínculo entre comunidades de la diáspora e Israel. Participé en encuentros locales e internacionales, intercambiando ideas y formas de liderazgo con jóvenes de distintas partes del mundo.',
    'exp.jya.title':   'Delegado — Jewish Youth Assembly',
    'exp.jya.desc':    'Asamblea internacional de jóvenes judíos organizada por el Congreso Judío Mundial. Participé como delegado representando a Argentina.',
    'exp.sabf.title':  'Participante — South American Business Forum',
    'exp.sabf.desc':   'Foro estudiantil de negocios y liderazgo con referentes del mundo empresarial y académico de América del Sur.',
    'exp.camondo.title':'Participante — Camondo World Wide Retreat',
    'exp.camondo.org': 'Programa internacional',
    'exp.camondo.desc':'Retiro internacional de jóvenes líderes con foco en identidad, comunidad e impacto global.',
    'edu.itba.degree': 'Licenciatura en Negocios y Tecnología',
    'edu.itba.year':   '2024 – actualidad',
    'edu.wolfsohn.name':  'Colegio Secundario David Wolfsohn',
    'edu.wolfsohn.degree':'Bachillerato Internacional · Business Management · Diploma bilingüe en inglés',
    'edu.diller.detail':  'Buenos Aires Cohort',
    'interests.piano.name': 'Piano',
    'interests.piano.desc': 'Toco el piano desde chico. La música clásica es una forma de concentración que encontré lejos de las pantallas.',
    'interests.scuba.name': 'Buceo',
    'interests.scuba.desc': 'Certifiqué como PADI Open Water Diver en 2024. Otra forma de explorar — esta vez, abajo del agua.',
    'contact.text':    'Si querés conectar, colaborar en algo o simplemente charlar sobre tecnología, negocios y comunidad, estoy disponible.',
  },
  en: {
    'nav.about':       'About',
    'nav.experience':  'Experience',
    'nav.education':   'Education',
    'nav.contact':     'Contact',
    'nav.interests':   'More about me',
    'hero.subtitle':   'Business & Technology · ITBA',
    'about.p1':        'I study Business and Technology at ITBA. I\'m passionate about thinking through projects, building things from scratch, and making them happen. I enjoy working in teams, leading with purpose, and creating real impact.',
    'about.p2':        'I come from a youth leadership background, where I discovered how much I enjoy connecting with others, organizing, and getting things done. I\'m interested in the intersection of technology, social impact, and management.',
    'exp.auja.title':  'Chair — AUJA',
    'exp.auja.date':   '2025 – present',
    'exp.auja.desc':   'I represent AUJA at ITBA. The organization works to fight antisemitism in universities and create spaces for interfaith dialogue.',
    'exp.bnei.title':  'Coordinator & Trainer — Bnei Akiva',
    'exp.bnei.date':   '2020 – 2024',
    'exp.bnei.desc':   'I started as a madrich — a mentor and group leader for children and teenagers. Over time I moved on to coordinating teams and teaching the formal Bnei Akiva Argentina leadership training course, working on leadership, relationships, and group responsibility.',
    'exp.diller.title':'Junior Counselor — Diller Teen Fellows',
    'exp.diller.date': '2022 – 2023',
    'exp.diller.desc': 'International Jewish leadership program focused on strengthening ties between diaspora communities and Israel. I participated in local and international gatherings, exchanging ideas and approaches to leadership with young people from around the world.',
    'exp.jya.title':   'Delegate — Jewish Youth Assembly',
    'exp.jya.desc':    'International assembly of Jewish youth organized by the World Jewish Congress. I participated as a delegate representing Argentina.',
    'exp.sabf.title':  'Participant — South American Business Forum',
    'exp.sabf.desc':   'Student forum on business and leadership featuring prominent figures from the South American business and academic world.',
    'exp.camondo.title':'Participant — Camondo World Wide Retreat',
    'exp.camondo.org': 'International program',
    'exp.camondo.desc':'International retreat for young leaders focused on identity, community, and global impact.',
    'edu.itba.degree': 'Bachelor in Business and Technology',
    'edu.itba.year':   '2024 – present',
    'edu.wolfsohn.name':  'David Wolfsohn Secondary School',
    'edu.wolfsohn.degree':'International Baccalaureate · Business Management · Bilingual English Diploma',
    'edu.diller.detail':  'Buenos Aires Cohort',
    'interests.piano.name': 'Piano',
    'interests.piano.desc': 'I\'ve been playing piano since I was a kid. Classical music is a form of concentration I found away from screens.',
    'interests.scuba.name': 'Scuba diving',
    'interests.scuba.desc': 'I got my PADI Open Water certification in 2024. Another way to explore — this time, underwater.',
    'contact.text':    'If you\'d like to connect, collaborate on something, or simply chat about technology, business, and community, I\'m available.',
  }
};

// ── Language toggle ──
var currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  var toggle = document.getElementById('lang-toggle');
  toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  toggle.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');

  var t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
}

document.getElementById('lang-toggle').addEventListener('click', function () {
  setLang(currentLang === 'es' ? 'en' : 'es');
});
