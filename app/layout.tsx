import "../styles/style.css";
import "katex/dist/katex.min.css";

import Nav from "components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-900">
        <div className="flex flex-col max-w-[80ch] gap-12 justify-center mt-5 mb-5 p-[2ch] mx-auto">
          <Nav />
          {children}
          <footer className="border-t-[1px] border-t-slate-900 dark:border-t-white p-2"></footer>
        </div>
        {/* <!-- Cloudflare Web Analytics --> */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "2528fc4222c149de98520723b79f907b"}'
        ></script>
        {/* <!-- End Cloudflare Web Analytics --> */}
      </body>
    </html>
  );
}
