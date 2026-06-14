# PeekSentry GitHub Pages

为 `PeekSentry / 防窥哨兵` 准备的公开站点，包含：
- 官网首页
- 技术支持页
- 隐私政策页

## 本地启动

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建后输出目录为 `dist/`。

## GitHub Pages 用法

因为项目使用 `HashRouter`，发布后可以直接把下面三个地址填到 App Store Connect：

- 营销网址：`https://<你的 GitHub Pages 域名>/`
- 技术支持网址：`https://<你的 GitHub Pages 域名>/#/support`
- 隐私政策网址：`https://<你的 GitHub Pages 域名>/#/privacy`

例如：

- `https://yourname.github.io/peeksentry-pages/`
- `https://yourname.github.io/peeksentry-pages/#/support`
- `https://yourname.github.io/peeksentry-pages/#/privacy`

## 上线前需要替换

请在 `src/content/siteContent.ts` 中替换以下占位内容：

- `supportEmail`
- 最终生效日期 `updatedAt`
- 如有需要，可继续调整 FAQ、隐私政策正文和首页文案
