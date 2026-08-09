import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@/Layout/Layout";

// Pages that render full-screen without the site Navbar/Footer
const STANDALONE_ROUTES = ["/login", "/register"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isStandalone = STANDALONE_ROUTES.includes(router.pathname);

  if (isStandalone) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}