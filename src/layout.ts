export function layout(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/style.css">
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
