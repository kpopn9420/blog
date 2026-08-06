# 謝宜庭 · 個人網站 / Personal Website

謝宜庭 (Hsieh Yi-Ting) 的個人網站與作品集，使用 **React + Vite** 打造，簡約現代風格，支援**中／英一鍵切換**與**深色模式**。

A personal portfolio for Hsieh Yi-Ting (AI Engineer), built with **React + Vite** — minimal-modern design with **one-click 中/EN language switching** and **dark mode**.

## ✨ 功能 Features
- 🌐 中英雙語一鍵切換（記住你的選擇 / 依瀏覽器語言預設）
- 🌗 淺色 / 深色主題切換
- 🧭 平滑捲動導覽、目前區塊自動高亮、手機版選單
- 🎞️ 首頁打字動畫、漸層光暈背景、捲動淡入效果
- 📱 完整響應式（電腦 / 平板 / 手機）

## 🗂️ 專案結構 Project structure
```
blog
├── index.html                 # Vite 入口 HTML
├── vite.config.js             # Vite 設定（含部署 base 路徑）
├── package.json
└── src
    ├── main.jsx               # React 進入點
    ├── App.jsx                # 頁面組合
    ├── i18n.js                # ★ 所有文字與內容（中/英）都在這
    ├── hooks.js               # 捲動淡入、區塊高亮的自訂 hook
    ├── styles.css             # 設計系統與所有樣式
    ├── context/AppContext.jsx # 語言與主題狀態
    └── components/            # Navbar / Hero / About / Projects / Contact / Footer / Icons
```

## ✏️ 如何修改內容 How to edit content
**大部分文字只要改一個檔案：`src/i18n.js`。** 裡面分成 `zh`（中文）與 `en`（英文）兩個區塊，改對應的欄位即可。標示「請替換 / TODO」的地方是可自由替換的佔位內容，例如：

- **自我介紹**：`about.paragraphs`
- **專案作品**：`projects.items`（名稱、簡介、技術標籤、GitHub / Demo 連結）
- **聯絡方式**：`contact.email`、`contact.githubUrl`、`contact.linkedinUrl`
  - ⚠️ Email 目前是佔位的 `hello@example.com`，請換成你的真實信箱。

想放**大頭照或首頁背景圖**時，把圖片放進 `public/`，再於對應元件引用即可（目前使用漸層＋幾何造型作為視覺，不需要照片也很好看）。

## 🚀 開發與部署 Setup & deploy
```bash
npm install     # 安裝依賴
npm run dev     # 本機開發 (http://localhost:5173)
npm run build   # 打包到 dist/
npm run deploy  # 部署到 GitHub Pages
```

> **部署路徑**：若網站網址是根目錄（`https://kpopn9420.github.io/`），`vite.config.js` 的 `base` 保持 `'/'`；
> 若是子路徑（`https://kpopn9420.github.io/blog/`），請改成 `base: '/blog/'`。

## 🛠️ 技術 Tech
- **React 18** + **Vite**（使用 esbuild 的 automatic JSX runtime）
- 純手寫 CSS 設計系統（CSS 變數 + 淺/深色主題），無 UI 框架
- **GitHub Pages** 部署

## License
MIT
