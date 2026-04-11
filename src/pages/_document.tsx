import { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.locale || "en";
  const isRtl = currentLocale === "ar";
  
  return (
    <Html lang={currentLocale} dir={isRtl ? "rtl" : "ltr"}>
      <Head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </Head>
      <body className="bg-background text-zinc-950 antialiased selection:bg-accent selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
