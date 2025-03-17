import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/custom.scss";
import "@/styles/globals.scss";
import NextTopLoader from "nextjs-toploader";

// Load the Roboto font with specific weights
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export async function generateMetadata() {
  // Logic to set title and description based on route or props
  return {
    title: "GO Real Estate for All Your Real Estate Investment in Dubai",
    description:
      "GO Real Estate offers premium real estate investment in Dubai. Explore lucrative property opportunities with expert guidance for high returns. Join us now!",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <NextTopLoader color="#b22b39" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
