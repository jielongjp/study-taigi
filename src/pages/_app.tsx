import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Template from "../components/template";
import { Roboto } from "next/font/google";
import { Noto_Serif_TC } from "next/font/google";

const MPlus = Noto_Serif_TC({
  weight: "500",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={MPlus.className}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </main>
  );
}
