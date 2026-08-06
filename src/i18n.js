// ---------------------------------------------------------------------------
// 全站文字內容 (中 / 英)  —  All translatable content lives here.
// 想改文字、專案、聯絡方式，直接改這個檔案即可，兩種語言各改對應區塊。
// Anything marked「請替換 / TODO」是可自由替換的佔位內容。
// ---------------------------------------------------------------------------

export const content = {
  zh: {
    langLabel: 'EN',
    nav: {
      home: '首頁',
      about: '關於我',
      projects: '作品',
      contact: '聯絡',
    },
    hero: {
      greeting: '你好，我是',
      name: '謝宜庭',
      roles: ['AI 工程師', '研究生', '問題解決者'],
      tagline: '透過 AI 的力量，把複雜化為簡單。',
      subtitle: '國立臺灣科技大學 · 電子工程學系研究所',
      ctaProjects: '看看我的作品',
      ctaContact: '與我聯絡',
      scroll: '向下捲動',
    },
    about: {
      kicker: '關於我',
      title: '一點關於我的事',
      // 第二段是佔位內容，歡迎自由替換 / TODO: replace paragraph 2
      paragraphs: [
        '大家好，我是謝宜庭，一位 AI 背景的研究生，畢業於國立臺灣科技大學電子工程學系研究所。我希望透過 AI 的力量，把複雜的問題化繁為簡，打造真正能幫助到人的產品與體驗。',
        '我對機器學習、深度學習與生成式 AI 特別感興趣，喜歡從研究到落地一手包辦，把論文裡的想法變成能實際運作的系統。（這段可自由替換成你想說的話。）',
      ],
      highlightsTitle: '專長領域',
      highlights: [
        { icon: 'brain', label: '機器學習 / 深度學習' },
        { icon: 'spark', label: '生成式 AI 應用' },
        { icon: 'chip', label: '電子工程背景' },
        { icon: 'code', label: '全端開發' },
      ],
    },
    projects: {
      kicker: '作品集',
      title: '我做過的專案',
      subtitle: '以下為範例卡片，請替換成你的真實作品與連結。',
      viewCode: '程式碼',
      viewDemo: 'Demo',
      items: [
        {
          name: '專案一',
          description: '這裡放專案一的簡短介紹，說明它解決了什麼問題、你負責哪些部分。',
          tags: ['Flask', 'MySQL'],
          github: 'https://github.com/kpopn9420',
          demo: '',
        },
        {
          name: '專案二',
          description: '這裡放專案二的簡短介紹，說明它解決了什麼問題、你負責哪些部分。',
          tags: ['JavaFX', 'DALL·E'],
          github: 'https://github.com/kpopn9420',
          demo: '',
        },
        {
          name: '專案三',
          description: '這裡放專案三的簡短介紹，說明它解決了什麼問題、你負責哪些部分。',
          tags: ['GPT-3', 'React'],
          github: 'https://github.com/kpopn9420',
          demo: '',
        },
      ],
    },
    contact: {
      kicker: '聯絡我',
      title: '一起聊聊吧',
      subtitle: '無論是合作、職缺或只是想打聲招呼，都歡迎與我聯繫。',
      infoTitle: '聯絡資訊',
      // 請替換成你的真實 Email / TODO: replace with your real email
      email: 'hello@example.com',
      github: 'kpopn9420',
      githubUrl: 'https://github.com/kpopn9420',
      linkedin: 'your-linkedin',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin',
      formTitle: '傳訊息給我',
      nameLabel: '姓名',
      namePlaceholder: '你的名字',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: '訊息',
      messagePlaceholder: '想說的話…',
      send: '送出訊息',
      sent: '感謝你的訊息！',
      note: '（這是示範表單，尚未串接後端；可改為 mailto 或表單服務。）',
    },
    footer: {
      built: '以 React + Vite 打造',
      rights: '版權所有',
    },
  },

  en: {
    langLabel: '中',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Work',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Hsieh Yi-Ting',
      roles: ['AI Engineer', 'Researcher', 'Problem Solver'],
      tagline: 'Turning complexity into simplicity through the power of AI.',
      subtitle: 'M.S., Electronic Engineering · National Taiwan University of Science and Technology',
      ctaProjects: 'See my work',
      ctaContact: 'Get in touch',
      scroll: 'Scroll down',
    },
    about: {
      kicker: 'About',
      title: 'A little about me',
      paragraphs: [
        "Hi, I'm Yi-Ting — a graduate researcher with an AI background, holding an M.S. in Electronic Engineering from National Taiwan University of Science and Technology. I want to use the power of AI to turn complex problems into simple solutions, and to build products and experiences that genuinely help people.",
        "I'm especially drawn to machine learning, deep learning, and generative AI. I enjoy owning the full journey from research to deployment — taking ideas from papers and turning them into systems that actually work. (Feel free to replace this paragraph with your own words.)",
      ],
      highlightsTitle: 'What I focus on',
      highlights: [
        { icon: 'brain', label: 'Machine / Deep Learning' },
        { icon: 'spark', label: 'Generative AI' },
        { icon: 'chip', label: 'Electronic Engineering' },
        { icon: 'code', label: 'Full-stack Development' },
      ],
    },
    projects: {
      kicker: 'Portfolio',
      title: 'Things I have built',
      subtitle: 'These are sample cards — replace them with your real projects and links.',
      viewCode: 'Code',
      viewDemo: 'Demo',
      items: [
        {
          name: 'Project One',
          description: 'A short summary of project one — what problem it solves and what you built.',
          tags: ['Flask', 'MySQL'],
          github: 'https://github.com/kpopn9420',
          demo: '',
        },
        {
          name: 'Project Two',
          description: 'A short summary of project two — what problem it solves and what you built.',
          tags: ['JavaFX', 'DALL·E'],
          github: 'https://github.com/kpopn9420',
          demo: '',
        },
        {
          name: 'Project Three',
          description: 'A short summary of project three — what problem it solves and what you built.',
          tags: ['GPT-3', 'React'],
          github: 'https://github.com/kpopn9420',
          demo: '',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: "Let's talk",
      subtitle: 'Whether it is a collaboration, a role, or just a hello — feel free to reach out.',
      infoTitle: 'Contact info',
      email: 'hello@example.com',
      github: 'kpopn9420',
      githubUrl: 'https://github.com/kpopn9420',
      linkedin: 'your-linkedin',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin',
      formTitle: 'Send me a message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Say hello…',
      send: 'Send message',
      sent: 'Thanks for reaching out!',
      note: '(This is a demo form and is not wired to a backend yet — swap in mailto or a form service.)',
    },
    footer: {
      built: 'Built with React + Vite',
      rights: 'All rights reserved',
    },
  },
};

export const SECTIONS = ['home', 'about', 'projects', 'contact'];
