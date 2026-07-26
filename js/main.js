const translations = {
  en: {
    nav: { about: "About", companies: "Companies", skills: "Skills", projects: "Projects", network: "Network", contact: "Contact" },
    hero: {
      label: "Strategic Partner | Executive Director | Project Developer",
      name1: "Inusso",
      name2: "Aly Bato",
      tagline: "Tech-business architect building the future of Mozambique through innovation, finance, and social development.",
      cta1: "View Projects",
      cta2: "Get in Touch",
      scroll: "Scroll"
    },
    about: {
      label: "About",
      title: "Who I Am",
      p1: "I'm a tech-business person who started coding at 13. From Java and HTML to WordPress, MetaTrader automated trading bots, and Adobe Creative Suite — I've built a diverse skill set across technology, finance, and creative production.",
      p2: "Today, I serve as Strategic Partner at Thor International LDA and Executive Director of Business Development at North Mining LDA. Through ADIRA, I develop social development projects focused on juvenile work, women's inclusion, and community growth in Mozambique.",
      p3: "I'm driven by geopolitics, vibe coding, and understanding how the real-world matrix operates. From forex trading to defense product translations, I operate at the intersection of technology, business, and international relations.",
      stats: { years: "Years Coding", projects: "Projects Delivered", companies: "Companies" }
    },
    companies: {
      label: "Companies",
      title: "Where I Operate",
      thor: { role: "Strategic Partnership", desc: "Subsidiary to Thor International Limited in Zambia. Strategic partnerships and business development across Southern Africa." },
      north: { role: "Executive Director — Business Development", desc: "Mozambican mining, fuel supply and fuel storage company. Registry code 105012362. Leading business development and market expansion." },
      adira: { role: "NGO Member — Project Developer", desc: "Associação Para o Desenvolvimento Participativo Social. Developing social projects focused on juvenile work, women's inclusion, and community development across Mozambique." }
    },
    skills: {
      label: "Skills",
      title: "What I Do",
      tech: { title: "Technology" },
      creative: { title: "Creative" },
      business: { title: "Business & Finance" }
    },
    projects: {
      label: "Projects",
      title: "What I've Built",
      filter: { all: "All", tech: "Technology", agri: "Agriculture", mining: "Mining", social: "Social Dev", finance: "Finance" },
      argus: { cat: "Intelligence Platform", desc: "Geospatial intelligence surveillance platform with real-time aircraft tracking, OSINT capabilities, and dark-mode Leaflet.js maps. Built as an Electron desktop app with Fastify REST API." },
      greenculture: { cat: "Agricultural Platform", desc: "Comprehensive agricultural technology platform for Mozambique. 4000+ product marketplace, crop contracts, financing mechanisms, and equipment marketplace." },
      mininghub: { cat: "Mining Platform", desc: "Digital platform for Mozambique's mining sector. Connects miners, investors, suppliers, and traders. 4-tier membership system, investment opportunities, equipment marketplace." },
      tunamoz: { cat: "Blue Economy", desc: "Mozambique marine business venture with extensive feasibility studies (technical, economic, operational, institutional). Maritime transport and Blue Economy development.", t1: "Feasibility Studies", t2: "Blue Economy", t3: "Maritime" },
      casino: { cat: "iGaming", desc: "Online casino platform with multi-page frontend, session-based auth, dynamic backend APIs, and Coinbase Commerce crypto checkout integration." },
      forex: { cat: "Automated Trading", desc: "MetaTrader 5 Expert Advisor for Deriv Volatility 75 Index. 3 strategy modes, ATR-based dynamic stops, risk management, trailing stops. 4 versions developed.", t1: "Risk Mgmt" },
      ebooks: { cat: "AI Tool", desc: "Desktop ebook creation studio powered by AI. Generates outlines, chapters, sales pages, and covers. Supports Ollama, OpenAI, and LM Studio. Built into standalone .exe." },
      defense: { cat: "Defense Tech", desc: "Chinese defense product catalogs and presentations translated to Portuguese. Anti-drone systems, special vehicles, and intelligent soldier systems.", t1: "Chinese to PT" },
      adira: { cat: "Social Development", desc: "Social development projects delivered through ADIRA since September 2025. Cooperation proposals, feasibility studies, and community development programs.", t1: "Project Dev", t2: "Community", t3: "Youth", t4: "Women Inclusion" },
      bufalos: { cat: "Agriculture", desc: "Mozambique livestock and agriculture project. Updated and corrected project plans with budget allocations and operational strategies.", t1: "Agriculture", t2: "Livestock" },
      blockchain: { cat: "Blockchain", desc: "Ethereum smart contracts including USDT token contract and test tokens. Browser-based Solidity compiler for rapid development.", t1: "Smart Contracts" }
    },
    network: {
      label: "Network",
      title: "Events & Connections",
      apiex: { title: "APIEX 2026", desc: "Mozambique's premier investment and export promotion event. Engaged with international investors and explored opportunities across PALOP countries." },
      cplpex: { title: "CPLPEX", desc: "Community of Portuguese Language Countries exhibition. Connecting lusophone markets and investment opportunities." },
      huawei: { title: "Huawei Mozambique", desc: "Exploring technology partnerships and digital infrastructure development in Mozambique." }
    },
    contact: {
      label: "Contact",
      title: "Let's Connect",
      desc: "Interested in collaboration, investment opportunities, or project development? Let's talk.",
      email: "Email",
      ig_public: "Instagram (Public)",
      ig_private: "Instagram (Private)",
      soundcloud: "SoundCloud",
      form: { name: "Your Name", email: "Your Email", message: "Your Message", send: "Send Message" }
    },
    footer: "© 2026 Inusso Aly Bato. All rights reserved.",
    modal: {
      title: "Welcome",
      desc: "Choose your preferred language and theme.",
      lang: "Language",
      theme: "Theme",
      en: "English",
      pt: "Portugues",
      dark: "Dark",
      light: "Light",
      confirm: "Enter"
    }
  },
  pt: {
    nav: { about: "Sobre", companies: "Empresas", skills: "Compet\u00eancias", projects: "Projetos", network: "Rede", contact: "Contacto" },
    hero: {
      label: "Parceiro Estrat\u00e9gico | Diretor Executivo | Desenvolvedor de Projetos",
      name1: "Inusso",
      name2: "Aly Bato",
      tagline: "Arquiteto tech-business a construir o futuro de Mo\u00e7ambique atrav\u00e9s da inova\u00e7\u00e3o, finan\u00e7as e desenvolvimento social.",
      cta1: "Ver Projetos",
      cta2: "Contactar",
      scroll: "Rolar"
    },
    about: {
      label: "Sobre",
      title: "Quem Sou",
      p1: "Sou uma pessoa tech-business que come\u00e7ou a programar aos 13 anos. De Java e HTML a WordPress, bots de trading automatizados no MetaTrader e Adobe Creative Suite \u2014 constru\u00ed um conjunto diversificado de compet\u00eancias em tecnologia, finan\u00e7as e produ\u00e7\u00e3o criativa.",
      p2: "Atualmente, sirvo como Parceiro Estrat\u00e9gico na Thor International LDA e Diretor Executivo de Desenvolvimento de Neg\u00f3cios na North Mining LDA. Atrav\u00e9s da ADIRA, desenvolvo projetos de desenvolvimento social focados em trabalho juvenil, inclus\u00e3o de mulheres e crescimento comunit\u00e1rio em Mo\u00e7ambique.",
      p3: "Sou movido por geopol\u00edtica, vibe coding e compreender como opera a matriz do mundo real. Do trading forex a tradu\u00e7\u00f5es de produtos de defesa, opero na interse\u00e7\u00e3o de tecnologia, neg\u00f3cios e rela\u00e7\u00f5es internacionais.",
      stats: { years: "Anos a Programar", projects: "Projetos Entregues", companies: "Empresas" }
    },
    companies: {
      label: "Empresas",
      title: "Onde Opero",
      thor: { role: "Parceria Estrat\u00e9gica", desc: "Subsidi\u00e1ria da Thor International Limited na Z\u00e2mbia. Parcerias estrat\u00e9gicas e desenvolvimento de neg\u00f3cios no Sul de \u00c1frica." },
      north: { role: "Diretor Executivo \u2014 Desenvolvimento de Neg\u00f3cios", desc: "Empresa mo\u00e7ambicana de minera\u00e7\u00e3o, fornecimento e armazenamento de combust\u00edvel. C\u00f3digo de registo 105012362. Liderando o desenvolvimento de neg\u00f3cios e expans\u00e3o de mercado." },
      adira: { role: "Membro ONG \u2014 Desenvolvedor de Projetos", desc: "Associa\u00e7\u00e3o Para o Desenvolvimento Participativo Social. Desenvolvendo projetos sociais focados em trabalho juvenil, inclus\u00e3o de mulheres e desenvolvimento comunit\u00e1rio em Mo\u00e7ambique." }
    },
    skills: {
      label: "Compet\u00eancias",
      title: "O Que Fa\u00e7o",
      tech: { title: "Tecnologia" },
      creative: { title: "Criativo" },
      business: { title: "Neg\u00f3cios & Finan\u00e7as" }
    },
    projects: {
      label: "Projetos",
      title: "O Que Constru\u00ed",
      filter: { all: "Todos", tech: "Tecnologia", agri: "Agricultura", mining: "Minera\u00e7\u00e3o", social: "Des. Social", finance: "Finan\u00e7as" },
      argus: { cat: "Plataforma de Intelig\u00eancia", desc: "Plataforma de vigil\u00e2ncia de intelig\u00eancia geoespacial com monitoramento de aeronaves em tempo real, capacidades OSINT e mapas Leaflet.js em modo escuro. Constru\u00edda como aplica\u00e7\u00e3o desktop Electron com API REST Fastify." },
      greenculture: { cat: "Plataforma Agr\u00edcola", desc: "Plataforma abrangente de tecnologia agr\u00edcola para Mo\u00e7ambique. Marketplace com mais de 4000 produtos, contratos agr\u00edcolas, mecanismos de financiamento e marketplace de equipamentos." },
      mininghub: { cat: "Plataforma de Minera\u00e7\u00e3o", desc: "Plataforma digital para o setor minerador de Mo\u00e7ambique. Conecta mineradores, investidores, fornecedores e comerciantes. Sistema de 4 n\u00edveis de membros, oportunidades de investimento e marketplace de equipamentos." },
      tunamoz: { cat: "Economia Azul", desc: "Empreendimento marinho de Mo\u00e7ambique com extensos estudos de viabilidade (t\u00e9cnicos, econ\u00f3micos, operacionais, institucionais). Transporte mar\u00edtimo e desenvolvimento da Economia Azul.", t1: "Estudos de Viabilidade", t2: "Economia Azul", t3: "Mar\u00edtimo" },
      casino: { cat: "iGaming", desc: "Plataforma de casino online com frontend multi-p\u00e1gina, autentica\u00e7\u00e3o baseada em sess\u00f5es, APIs backend din\u00e2micas e integra\u00e7\u00e3o de pagamento com Coinbase Commerce." },
      forex: { cat: "Trading Automatizado", desc: "Expert Advisor para MetaTrader 5 no \u00cdndice Deriv Volatility 75. 3 modos de estrat\u00e9gia, stops din\u00e2micos baseados em ATR, gest\u00e3o de risco e trailing stops. 4 vers\u00f5es desenvolvidas.", t1: "Gest\u00e3o de Risco" },
      ebooks: { cat: "Ferramenta IA", desc: "Est\u00fadio de cria\u00e7\u00e3o de ebooks de desktop alimentado por IA. Gera esqueletos, cap\u00edtulos, p\u00e1ginas de vendas e capas. Suporta Ollama, OpenAI e LM Studio. Compilado em execut\u00e1vel standalone." },
      defense: { cat: "Tecnologia de Defesa", desc: "Cat\u00e1logos e apresenta\u00e7\u00f5es de produtos de defesa chineses traduzidos para portugu\u00eas. Sistemas anti-drone, ve\u00edculos especiais e sistemas de soldado inteligente.", t1: "Chin\u00eas para PT" },
      adira: { cat: "Desenvolvimento Social", desc: "Projetos de desenvolvimento social implementados atrav\u00e9s da ADIRA desde setembro de 2025. Propostas de coopera\u00e7\u00e3o, estudos de viabilidade e programas de desenvolvimento comunit\u00e1rio.", t1: "Desenv. de Projetos", t2: "Comunidade", t3: "Juventude", t4: "Inclus\u00e3o de Mulheres" },
      bufalos: { cat: "Agricultura", desc: "Projeto de pecu\u00e1ria e agricultura em Mo\u00e7ambique. Planos de projeto atualizados e corrigidos com aloca\u00e7\u00f5es or\u00e7ament\u00e1rias e estrat\u00e9gias operacionais.", t1: "Agricultura", t2: "Pecu\u00e1ria" },
      blockchain: { cat: "Blockchain", desc: "Smart contracts Ethereum incluindo contrato de token USDT e tokens de teste. Compilador Solidity baseado no navegador para desenvolvimento r\u00e1pido.", t1: "Smart Contracts" }
    },
    network: {
      label: "Rede",
      title: "Eventos & Conex\u00f5es",
      apiex: { title: "APIEX 2026", desc: "O principal evento de investimento e promo\u00e7\u00e3o de exporta\u00e7\u00e3o de Mo\u00e7ambique. Interagi com investidores internacionais e explorei oportunidades nos pa\u00edses PALOP." },
      cplpex: { title: "CPLPEX", desc: "Exposi\u00e7\u00e3o dos Pa\u00edses de L\u00edngua Portuguesa. A conectar mercados lus\u00f3fonos e oportunidades de investimento." },
      huawei: { title: "Huawei Mo\u00e7ambique", desc: "A explorar parcerias tecnol\u00f3gicas e desenvolvimento de infraestrutura digital em Mo\u00e7ambique." }
    },
    contact: {
      label: "Contacto",
      title: "Vamos Conectar",
      desc: "Interessado em colabora\u00e7\u00e3o, oportunidades de investimento ou desenvolvimento de projetos? Vamos conversar.",
      email: "Email",
      ig_public: "Instagram (P\u00fablico)",
      ig_private: "Instagram (Privado)",
      soundcloud: "SoundCloud",
      form: { name: "O Seu Nome", email: "O Seu Email", message: "A Sua Mensagem", send: "Enviar Mensagem" }
    },
    footer: "\u00a9 2026 Inusso Aly Bato. Todos os direitos reservados.",
    modal: {
      title: "Bem-vindo",
      desc: "Escolha o seu idioma e tema preferidos.",
      lang: "Idioma",
      theme: "Tema",
      en: "Ingl\u00eas",
      pt: "Portugu\u00eas",
      dark: "Escuro",
      light: "Claro",
      confirm: "Entrar"
    }
  }
};

let currentLang = 'en';
let currentTheme = 'dark';

// ==================== LANGUAGE ====================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      if (value && value[k] !== undefined) value = value[k];
    }
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      if (value && value[k] !== undefined) value = value[k];
    }
    if (typeof value === 'string') el.placeholder = value;
  });

  const enBtn = document.getElementById('lang-en');
  const ptBtn = document.getElementById('lang-pt');
  if (enBtn && ptBtn) {
    enBtn.classList.toggle('active-lang', lang === 'en');
    ptBtn.classList.toggle('active-lang', lang === 'pt');
  }

  document.documentElement.lang = lang;
}

function toggleLang() {
  setLanguage(currentLang === 'en' ? 'pt' : 'en');
}

// ==================== THEME ====================
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('portfolio-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.querySelector('.theme-toggle-icon');
  if (icon) icon.textContent = theme === 'dark' ? '\u263E' : '\u2600';
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ==================== MODAL ====================
let modalLang = 'en';
let modalTheme = 'dark';

function showModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'pref-modal';

  overlay.innerHTML = `
    <div class="modal">
      <h2 data-i18n="modal.title">Welcome</h2>
      <p data-i18n="modal.desc">Choose your preferred language and theme.</p>

      <div class="modal-section">
        <p class="modal-section-label" data-i18n="modal.lang">Language</p>
        <div class="modal-options">
          <button class="modal-option selected" data-modal-lang="en" onclick="selectModalLang('en')">
            <div class="modal-option-icon">EN</div>
            English
          </button>
          <button class="modal-option" data-modal-lang="pt" onclick="selectModalLang('pt')">
            <div class="modal-option-icon">PT</div>
            Portugues
          </button>
        </div>
      </div>

      <div class="modal-section">
        <p class="modal-section-label" data-i18n="modal.theme">Theme</p>
        <div class="modal-options">
          <button class="modal-option selected" data-modal-theme="dark" onclick="selectModalTheme('dark')">
            <div class="modal-option-icon">\u263E</div>
            Dark
          </button>
          <button class="modal-option" data-modal-theme="light" onclick="selectModalTheme('light')">
            <div class="modal-option-icon">\u2600</div>
            Light
          </button>
        </div>
      </div>

      <button class="btn btn-primary modal-confirm" onclick="confirmModal()" data-i18n="modal.confirm">Enter</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const t = translations[modalLang];
  overlay.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      if (value && value[k] !== undefined) value = value[k];
    }
    if (typeof value === 'string') el.textContent = value;
  });
}

function selectModalLang(lang) {
  modalLang = lang;
  document.querySelectorAll('[data-modal-lang]').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-modal-lang') === lang);
  });

  const t = translations[lang];
  const overlay = document.getElementById('pref-modal');
  if (overlay) {
    overlay.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const keys = key.split('.');
      let value = t;
      for (const k of keys) {
        if (value && value[k] !== undefined) value = value[k];
      }
      if (typeof value === 'string') el.textContent = value;
    });
  }
}

function selectModalTheme(theme) {
  modalTheme = theme;
  document.querySelectorAll('[data-modal-theme]').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-modal-theme') === theme);
  });
}

function confirmModal() {
  setLanguage(modalLang);
  setTheme(modalTheme);
  localStorage.setItem('portfolio-visited', 'true');

  const overlay = document.getElementById('pref-modal');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 300);
  }
}

// ==================== NAVBAR SCROLL ====================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// ==================== ACTIVE NAV LINK ====================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ==================== PROJECT FILTERS ====================
function filterProjects(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-filter') === category) btn.classList.add('active');
  });

  document.querySelectorAll('.project-card').forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
      setTimeout(() => card.style.opacity = '1', 10);
    } else {
      card.style.opacity = '0';
      setTimeout(() => card.style.display = 'none', 300);
    }
  });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('portfolio-lang');
  const savedTheme = localStorage.getItem('portfolio-theme');
  const visited = localStorage.getItem('portfolio-visited');

  if (savedLang) setLanguage(savedLang);
  if (savedTheme) setTheme(savedTheme);

  if (!visited) {
    showModal();
  }

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterProjects(btn.getAttribute('data-filter')));
  });
});
