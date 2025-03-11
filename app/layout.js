import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/custom.scss";
import "@/styles/globals.scss";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

// Load the Roboto font with specific weights
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export async function generateMetadata() {
  // Logic to set title and description based on route or props
  return {
    title:
      "Global Opportunities Real Estate Affordable Housing | Property at Exciting Rates",
    description:
      "Prime commercial properties for sale, affordable housing options, and office spaces for rent with Global Opportunities Real Estate! Get yours now!",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* search consule verification code  */}
        <meta
          name="google-site-verification"
          content="n-rQF-ODd8b22mm93u2ScOOLG4GFOZDb86ai7EUzCPE"
        />
        <link
          fetchPriority="high"
          rel="preload"
          as="image"
          href="https://prismcloudhosting.com/NewEdgeApis/public/images/galleries/1731416272.webp"
          type="image/webp"
        />
      </head>
      <body>
        <NextTopLoader color="#b22b39" showSpinner={false} />
        {/* Google Analytics Tag (gtag.js) */}
        <Script
          strategy="afterInteractive" // Ensures the script is loaded after page interaction
          async
          defer
          fetchPriority="low"
          src="https://www.googletagmanager.com/gtag/js?id=G-GJRR5HNPK9"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {` 
        setTimeout(function () {
        (function (c, l, a, r, i, t, y) {        
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-GJRR5HNPK9');
        }, 21000);
     `}
        </Script>
        <Script
          id="gtag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1WNKTR5B0B"
        ></Script>
        <Script id="gtag-script" async defer>
          {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1WNKTR5B0B');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
