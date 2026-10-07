const fs = require('fs');
const path = require('path');

// 文章数据
const posts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `文章标题 ${i + 1}`,
  body: `这是第 ${i + 1} 篇文章的正文内容……`
}));

// 生成完整HTML
const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>lab1-SSG</title>
</head>
<body>
<h1>文章列表</h1>
${posts.map(p => `<article><h2>${p.title}</h2><p>${p.body}</p></article>`).join("")}
</body>
</html>
`;

// 创建dist文件夹，写入index.html
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);
fs.writeFileSync(path.join(distPath, 'index.html'), html);
console.log("SSG静态页面生成完成！文件在 dist/index.html");
