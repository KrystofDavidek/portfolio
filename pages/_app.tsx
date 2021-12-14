/* eslint-disable @next/next/no-sync-scripts */
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AppContext, AppProps } from "next/app";
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/strapi/media";
import { fetchAPI } from "../lib/strapi/api";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps, router }: AppProps) {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" /> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <GlobalContext.Provider value={global}>
        <ThemeProvider attribute="class">
          <div className="grid grid-cols-12 gap-6 px-5 my-14 xl:px-48 sm:px-20">
            <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 md:col-span-5 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
              <Sidebar />
            </div>
            <div className="flex flex-col col-span-12 overflow-scroll bg-white shadow-custom-light dark:shadow-custom-dark md:col-span-7 lg:col-span-9 xl:col-span-9 rounded-2xl dark:bg-dark-500">
              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </div>
          </div>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
