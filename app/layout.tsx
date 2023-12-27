import "../styles/style.css";
import "highlight.js/styles/vs2015.css";
import "katex/dist/katex.min.css";

import Nav from "components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col max-w-[80ch] gap-12 justify-center mt-5 mb-5 p-[2ch] mx-auto">
          <Nav />
          <div>{children}</div>
          <footer className="border-t-[1px] border-t-slate-900 p-2"></footer>
        </div>
      </body>
    </html>
  );
}
