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
            '結合 GPT-3 與 DALL·E 的 AI 新聞迷因產生器，後端以 Flask + MySQL 打造，並提供社群作品展示。研究聚焦於用生成式 AI 提升年輕世代對時事的關注。',
          tags: ['Flask', 'MySQL', 'GPT-3', 'DALL·E'],
          image: 'memer.webp',
          status: '線上展示暫時關閉：網站託管與維護需要持續經費，研究成果與論文仍可由下方連結查看。',
          links: [
            { label: 'IEEE 論文', url: 'https://ieeexplore.ieee.org/document/10469091' },
            { label: '國科會成果報告', url: 'https://drive.google.com/file/d/1fG1Mj2Ar0SHQ9e4I1tZND4-A3-pmURVx/view?usp=sharing' },
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
        {
          name: '履歷健檢顧問（團隊專案）',
          description:
            '讓使用者上傳履歷，由 Aya Vision 8B 分析內容並提供改善建議，也能產生面試題目協助練習，服務以 React、Flask 與 Docker 建置。',
          tags: ['React', 'Flask', 'Docker', 'Aya Vision 8B'],
          image: 'resume-consultant.webp',
          links: [{ label: '示範影片', url: 'https://youtu.be/er43JJh4aD4?si=jnkCgPaC2PcVc-2Z' }],
        },
        {
          name: '人臉辨識系統',
          description:
            '深度學習課程專案：以同學照片建立資料集，使用 MTCNN 偵測人臉，再以 FaceNet 完成人臉特徵擷取與身分辨識。',
          tags: ['MTCNN', 'FaceNet', 'TensorFlow', 'Keras'],
          image: 'face-recognition.webp',
          links: [{ label: '專案簡報', url: 'https://drive.google.com/file/d/11IHVLfMUe32ZlXfvYcnyWPJS8KcLs1Tm/view?usp=sharing' }],
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
      sending: '傳送中…',
      sent: '訊息已送出，謝謝你的聯絡！',
      error: '目前無法送出，請改用左側 Email 直接聯絡我。',
      note: '訊息會透過 Formspree 送到我的信箱；若送出失敗，也可以直接寄 Email。',
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
            'An AI news-meme generator combining GPT-3 and DALL·E on a Flask + MySQL backend, with a community gallery. The research explores how generative AI can engage younger audiences with current affairs.',
          tags: ['Flask', 'MySQL', 'GPT-3', 'DALL·E'],
          image: 'memer.webp',
          status: 'The live demo is temporarily offline because hosting and maintenance require ongoing funding. The research report and paper remain available below.',
          links: [
            { label: 'IEEE Paper', url: 'https://ieeexplore.ieee.org/document/10469091' },
            { label: 'NSTC Report', url: 'https://drive.google.com/file/d/1fG1Mj2Ar0SHQ9e4I1tZND4-A3-pmURVx/view?usp=sharing' },
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
        {
          name: 'Resume Consultant (Team Project)',
          description:
            'A resume-review application that uses Aya Vision 8B to suggest improvements and generate interview questions for practice, delivered with React, Flask, and Docker.',
          tags: ['React', 'Flask', 'Docker', 'Aya Vision 8B'],
          image: 'resume-consultant.webp',
          links: [{ label: 'Demo video', url: 'https://youtu.be/er43JJh4aD4?si=jnkCgPaC2PcVc-2Z' }],
        },
        {
          name: 'Face Recognition System',
          description:
            'A deep-learning course project using a classmate photo dataset, MTCNN for face detection, and FaceNet for facial embeddings and identity recognition.',
          tags: ['MTCNN', 'FaceNet', 'TensorFlow', 'Keras'],
          image: 'face-recognition.webp',
          links: [{ label: 'Project slides', url: 'https://drive.google.com/file/d/11IHVLfMUe32ZlXfvYcnyWPJS8KcLs1Tm/view?usp=sharing' }],
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
      sending: 'Sending…',
      sent: 'Message sent — thanks for reaching out!',
      error: 'The form could not send right now. Please email me directly using the link on the left.',
      note: 'Formspree delivers this message to my inbox. If it fails, you can also email me directly.',
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
