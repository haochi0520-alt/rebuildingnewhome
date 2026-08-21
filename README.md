# 都市更新整合 - Rebuilding New Home

個人部落格網站，專注於都市更新與社區整合的相關議題。

## 項目特點

- 使用 Next.js 14 構建的現代化網站
- Tailwind CSS 樣式框架
- TypeScript 類型安全
- Markdown 部落格支持
- SEO 優化
- 響應式設計
- 快速靜態生成

## 本地開發

### 安裝依賴

```bash
npm install
```

### 運行開發伺服器

```bash
npm run dev
```

打開 [http://localhost:3000](http://localhost:3000) 查看結果。

### 構建生產版本

```bash
npm run build
npm start
```

## 文件結構

```
.
├── app/
│   ├── layout.tsx          # 根佈局
│   ├── page.tsx            # 首頁
│   ├── globals.css         # 全域樣式
│   ├── blog/
│   │   ├── page.tsx        # 部落格列表
│   │   └── [slug]/
│   │       └── page.tsx    # 文章詳情
│   ├── about/
│   │   └── page.tsx        # 關於頁面
│   └── contact/
│       └── page.tsx        # 聯絡頁面
├── components/
│   ├── Header.tsx          # 頁頭
│   └── Footer.tsx          # 頁尾
├── lib/
│   └── blog.ts             # 部落格工具函數
├── posts/                  # Markdown 文章
│   └── welcome.md          # 範例文章
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 添加新文章

1. 在 `posts` 目錄下建立新的 `.md` 文件
2. 添加前置信息（frontmatter）：

```markdown
---
title: 文章標題
date: 2024-08-21
excerpt: 文章摘要
author: 作者名稱
tags:
  - 標籤1
  - 標籤2
---

# 文章內容
```

## 部署

本項目可部署到：

- **Vercel** (推薦) - 無縫 Next.js 支持
- **GitHub Pages** - 靜態生成
- **Netlify** - 支援 Next.js

### Vercel 部署

```bash
npm install -g vercel
vercel
```

## 技術棧

- **框架**: Next.js 14
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **內容**: Markdown + Gray Matter
- **部署**: Vercel / GitHub Pages

## 許可證

MIT

## 聯絡方式

- Email: haochi0520@gmail.com
- GitHub: [haochi0520-alt](https://github.com/haochi0520-alt)
