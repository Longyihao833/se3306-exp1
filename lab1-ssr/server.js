const express = require('express');
const app = express();
const port = 3000;

// 模拟文章数据
const posts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `文章标题 ${i + 1}`,
  body: `这是第 ${i + 1} 篇文章的正文内容……`
}));

app.get('/', (req, res) => {
    const requestTime = new Date().toLocaleString();
    const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>lab1‑SSR</title>
</head>
<body>
  <h1>文章列表</h1>
  <p>本次请求服务器生成页面的时间：${requestTime}</p>
  ${posts.map(p => `<article><h2>${p.title}</h2><p>${p.body}</p></article>`).join("")}
</body>
</html>
  `;
  res.send(html);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`SSR服务运行在端口 ${port}`);
});
