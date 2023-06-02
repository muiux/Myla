import "@/styles/normalize.css";
import "@/styles/webflow.css";
import "@/styles/myla-d39d21.webflow.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        onLoad={() => console.log(`webfont script loaded correctly`)}
      />
      <Component {...pageProps} />
      <Script
        src="/js/webflow.js"
        onLoad={() => console.log(`webflow script loaded correctly`)}
      />{" "}
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63c8475ba85eb1570c45b959"
        onLoad={() => console.log(`jquery loaded correctly`)}
      />
    </>
  );
}
