# 🐍 Python GESP 一级助考

专为 **CCF GESP Python 一级** 考级设计的备考 PWA 应用。

## 🚀 在线使用

https://type5465-blip.github.io/gesp-app/

## ✨ 功能

| 模块 | 说明 |
|------|------|
| 📚 知识点学习 | 12 个考点，代码自动语法高亮 |
| ✏️ 专项练习 | 207 道题，按知识点分类 |
| 🏆 模拟考试 | 随机 45 题限时答题 |
| 📝 错题本 | 自动收录，含完整解析 |
| 📋 真题实战 | 3 套近两年真题（2024.09 / 2024.12 / 2025.03） |
| 💻 编程题编辑器 | 写代码 → 提交对比参考答案 |

## 🛠 技术栈

- 纯前端：HTML + CSS + JavaScript，零依赖
- PWA：Service Worker 离线缓存，可安装到桌面
- GitHub Pages 部署

## 📁 文件结构

```
├── index.html      # 主页面
├── app.js          # 应用逻辑（题库 + 真题 + 交互）
├── styles.css      # 样式表（含深色模式）
├── sw.js           # Service Worker（离线支持）
├── manifest.json   # PWA 配置
└── README.md
```
