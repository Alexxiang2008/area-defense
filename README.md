# Area Defense

B2B安防解决方案出海官网 - 要地防卫与空天地一体化巡检

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **国际化**: next-intl (英文 + 阿拉伯语)
- **部署**: Vercel

## Getting Started

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 项目结构

```
├── app/
│   └── [locale]/           # 国际化路由
│       ├── page.tsx        # 首页
│       └── contact/         # 联系页面
├── messages/               # 翻译文件
│   ├── en.json
│   └── ar.json
├── components/             # React 组件
├── lib/                   # 工具函数
└── public/                # 静态资源
```

## 多语言

- 英文: `/en`
- 阿拉伯语: `/ar` (RTL)

## 部署到 Vercel

1. Push 代码到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

## 参考文档

- [MVP 需求文档](./mvp-requirements.md)
