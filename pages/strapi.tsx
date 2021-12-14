import React from "react";
import Articles from "../components/strapi/Articles";
import Layout from "../components/strapi/Layout";
import Seo from "../components/strapi/Seo";
import { fetchAPI } from "../lib/strapi/api";

const Strapi = ({ articles, categories, homepage }: any) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Strapi;
