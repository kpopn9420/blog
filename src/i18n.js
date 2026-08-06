// ---------------------------------------------------------------------------
// 全站文字內容 (中 / 英)  —  All translatable content lives here.
// 想改文字、專案、聯絡方式，直接改這個檔案即可，兩種語言各改對應區塊。
// 專案描述部分是依作品性質推測撰寫的，歡迎依實際情況微調。
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
      paragraphs: [
        '大家好，我是謝宜庭，一位 AI 背景的研究生，畢業於國立臺灣科技大學電子工程學系研究所。我希望透過 AI 的力量，把複雜的問題化繁為簡，打造真正能幫助到人的產品與體驗。',
        '我對機器學習、深度學習與生成式 AI 特別感興趣，喜歡從研究到落地一手包辦——把論文裡的想法，變成能實際運作的系統。',
      ],
      highlightsTitle: '專長領域',
      highlights: [
        { icon: 'brain', label: '機器學習 / 深度學習' },
        { icon: 'spark', label: '生成式 AI 應用' },
        { icon: 'chip', label: '電子工程背景' },
        { icon: 'code', label: '全端開發' },
      ],
      momentsTitle: '一些精彩時刻',
    },
    moments: [
      { img: 'moment-graduation.jpg', caption: '研究所畢業' },
      { img: 'moment-microsoft.jpg', caption: '參訪 Microsoft' },
      { img: 'moment-tsmc.jpg', caption: '台積電 IMC Day 2024 競賽' },
    ],
    projects: {
      kicker: '作品集',
      title: '我做過的專案',
      subtitle: '從生成式 AI 到全端系統——以下是我實作過的一些作品。',
      items: [
        {
          name: 'MEMER',
          description:
            '一個 AI 迷因產生器：結合 GPT-3 生成幽默文案與 DALL·E 生成圖像，後端以 Flask + MySQL 打造。相關研究成果已發表於 IEEE 論文。',
          tags: ['Flask', 'MySQL', 'GPT-3', 'DALL·E'],
          image: '',
          links: [
            { label: 'IEEE 論文', url: 'https://ieeexplore.ieee.org/document/10469091' },
            { label: '線上網站', url: 'https://flask-memer-richie-98a652b4a55b.herokuapp.com/' },
          ],
        },
        {
          name: '餐廳管理系統',
          description:
            '以 JavaFX 打造的餐廳管理桌面應用，串接 MySQL 資料庫，涵蓋點餐、菜單與帳號管理等營運流程。',
          tags: ['JavaFX', 'Java', 'MySQL'],
          image: 'restaurant.png',
          links: [{ label: '示範影片', url: 'https://youtu.be/UREnQsBJj5M' }],
        },
        {
          name: '線上點餐網站',
          description:
            '一個線上點餐網站，具備商品瀏覽、購物車與結帳流程，採用 JSP / Servlet 搭配 MySQL 開發。',
          tags: ['JSP', 'Servlet', 'MySQL'],
          image: 'ordering.png',
          links: [{ label: '示範影片', url: 'https://youtu.be/BcejJcJS1b8' }],
        },
      ],
    },
    contact: {
      kicker: '聯絡我',
      title: '一起聊聊吧',
      subtitle: '無論是合作、職缺或只是想打聲招呼，都歡迎與我聯繫。',
      infoTitle: '聯絡資訊',
      email: 'kpopn9420@gmail.com',
      github: 'kpopn9420',
      githubUrl: 'https://github.com/kpopn9420',
      linkedin: 'Xie Yi-Ting',
      linkedinUrl: 'https://www.linkedin.com/in/yi-ting-xie-7b613b214/',
      formTitle: '傳訊息給我',
      nameLabel: '姓名',
      namePlaceholder: '你的名字',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: '訊息',
      messagePlaceholder: '想說的話…',
      send: '送出訊息',
      sent: '感謝你的訊息！',
      note: '（送出後會開啟你的郵件軟體寄信給我。）',
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
        "I'm especially drawn to machine learning, deep learning, and generative AI. I enjoy owning the full journey from research to deployment — taking ideas from papers and turning them into systems that actually work.",
      ],
      highlightsTitle: 'What I focus on',
      highlights: [
        { icon: 'brain', label: 'Machine / Deep Learning' },
        { icon: 'spark', label: 'Generative AI' },
        { icon: 'chip', label: 'Electronic Engineering' },
        { icon: 'code', label: 'Full-stack Development' },
      ],
      momentsTitle: 'A few highlights',
    },
    moments: [
      { img: 'moment-graduation.jpg', caption: 'Graduating from my M.S.' },
      { img: 'moment-microsoft.jpg', caption: 'Visiting Microsoft' },
      { img: 'moment-tsmc.jpg', caption: 'TSMC IMC Day 2024 contest' },
    ],
    projects: {
      kicker: 'Portfolio',
      title: 'Things I have built',
      subtitle: 'From generative AI to full-stack systems — here are a few projects I have worked on.',
      items: [
        {
          name: 'MEMER',
          description:
            'An AI meme generator that pairs GPT-3 for witty captions with DALL·E for imagery, on a Flask + MySQL backend. The work was published as an IEEE paper.',
          tags: ['Flask', 'MySQL', 'GPT-3', 'DALL·E'],
          image: '',
          links: [
            { label: 'IEEE Paper', url: 'https://ieeexplore.ieee.org/document/10469091' },
            { label: 'Live site', url: 'https://flask-memer-richie-98a652b4a55b.herokuapp.com/' },
          ],
        },
        {
          name: 'Restaurant Management System',
          description:
            'A JavaFX desktop application for running a restaurant — orders, menu, and account management — backed by a MySQL database.',
          tags: ['JavaFX', 'Java', 'MySQL'],
          image: 'restaurant.png',
          links: [{ label: 'Demo video', url: 'https://youtu.be/UREnQsBJj5M' }],
        },
        {
          name: 'Ordering Website',
          description:
            'A full-stack food-ordering website with product browsing, a shopping cart, and checkout, built with JSP / Servlet and MySQL.',
          tags: ['JSP', 'Servlet', 'MySQL'],
          image: 'ordering.png',
          links: [{ label: 'Demo video', url: 'https://youtu.be/BcejJcJS1b8' }],
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: "Let's talk",
      subtitle: 'Whether it is a collaboration, a role, or just a hello — feel free to reach out.',
      infoTitle: 'Contact info',
      email: 'kpopn9420@gmail.com',
      github: 'kpopn9420',
      githubUrl: 'https://github.com/kpopn9420',
      linkedin: 'Xie Yi-Ting',
      linkedinUrl: 'https://www.linkedin.com/in/yi-ting-xie-7b613b214/',
      formTitle: 'Send me a message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Say hello…',
      send: 'Send message',
      sent: 'Thanks for reaching out!',
      note: '(Submitting opens your email client to send me a message.)',
    },
    footer: {
      built: 'Built with React + Vite',
      rights: 'All rights reserved',
    },
  },
};

export const SECTIONS = ['home', 'about', 'projects', 'contact'];

// 圖片路徑輔助：自動加上部署的 base 路徑（本機為 /，線上為 /blog/）
export const asset = (file) => `${import.meta.env.BASE_URL}img/${file}`;
