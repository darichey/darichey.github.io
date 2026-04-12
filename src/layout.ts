interface LayoutOptions {
  title: string;
  description?: string;
  path?: string;
}

export function layout(options: LayoutOptions, content: string): string {
  const { title, description = "David Richey's personal website", path = "" } = options;
  const url = `https://darichey.com${path}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="website">
  <link rel="stylesheet" href="/style.css">
  <link rel="stylesheet" href="/hljs-light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="/hljs-dark.css" media="(prefers-color-scheme: dark)">
  <link rel="stylesheet" href="/katex.css">
  <link rel="alternate" type="application/rss+xml" title="David Richey's Blog" href="/rss.xml">
  <title>${title}</title>
</head>
<body>
  <div class="site">
    <nav>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <div class="social-links">
        <a href="https://github.com/darichey"><img src="/img/github_mark.svg" alt="GitHub"></a>
        <a href="https://www.linkedin.com/in/darichey/"><img src="/img/linkedin_mark.svg" alt="LinkedIn"></a>
        <a href="https://www.threads.net/@davidrichey1"><img src="/img/threads_mark.svg" alt="Threads"></a>
        <a href="mailto:darichey1@gmail.com"><img src="/img/mail.svg" alt="Email"></a>
      </div>
    </nav>
    <main>
      ${content}
    </main>
    <footer></footer>
  </div>
</body>
</html>`;
}
