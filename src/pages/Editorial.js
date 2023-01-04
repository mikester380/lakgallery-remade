import React from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import Story from "../components/Story";
import { stories } from "../data/data";

const Editorial = () => {
  return (
    <Layout>
      <div className="editorial">
        <div className="editorial__title">
          <span className="editorial__title-sub">(A)</span>
          <h2 className="editorial__title-main">Latest Stories</h2>
        </div>
        <section className="editorial__stories">
          {stories.map(({ title, author, image }, index) => (
            <Story title={title} author={author} image={image} key={index} />
          ))}
        </section>
        <div className="editorial__pagination">
          <Pagination current={1} total={1} />
        </div>
      </div>
    </Layout>
  );
};

export default Editorial;
