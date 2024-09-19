import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5em",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-book-open-text"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        <path d="M6 8h2" />
        <path d="M6 12h2" />
        <path d="M16 8h2" />
        <path d="M16 12h2" />
      </svg>
      Adastra
    </span>
  ),
  project: {
    link: "https://github.com/adastra-tw/docs",
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: "https://github.com/adastra-tw/docs/tree/main",
  footer: {
    text: "Created by Adastra Team",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Adastra" />
      <meta
        property="og:description"
        content="Adastra documentation site"
      />
    </>
  ),
  useNextSeoProps: () => ({
    titleTemplate: '%s – Adastra',
    openGraph: {
      type: "website",
      url: "https://adastra-tw.github.io/docs",
      title: "Adastra",
      description: "Adastra documentation site",
    },
  }),
  sidebar: {
     defaultMenuCollapseLevel: 1
  },
  
};

export default config;
