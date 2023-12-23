import "../styles/style.css";

import Nav from "components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center my-10">
          <div className="flex flex-col w-4/5 md:w-1/3 gap-4">
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
