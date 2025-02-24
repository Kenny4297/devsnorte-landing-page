import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "400", "700", "600"], variable: "--font-poppins" });
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(MyApp);
