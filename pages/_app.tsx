import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 xl:px-48 sm:px-20">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 md:col-span-5 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-scroll bg-white shadow-custom-light dark:shadow-custom-dark md:col-span-7 lg:col-span-9 xl:col-span-9 rounded-2xl dark:bg-dark-500">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
export default MyApp;
