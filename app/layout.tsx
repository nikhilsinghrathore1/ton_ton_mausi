import Script from "@/node_modules/next/script";

import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <head>
          <Script src="https://telegram.org/js/telegram-web-app.js"  strategy="beforeInteractive"/>
        </head>
        {children}
      </body>
    </html>
  );
}
