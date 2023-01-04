import React from "react";
import Product from "../components/Product";
import FilterSection from "../components/FilterSection";
import Pagination from "../components/Pagination";
import { products, piecesFilters } from "../data/data";
import Layout from "../components/Layout";

const Pieces = () => {
  return (
    <Layout>
      <div className="pieces">
        <h2 className="pieces__heading">All Pieces</h2>
        <section className="pieces__grid">
          <div className="pieces__actions">
            <p className="pieces__f-label">Filters</p>
            <button className="pieces__m-f-toggle">Filters +</button>
            <select className="pieces__sort">
              <option value="sort-by">Sort by</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="price:high-low">Price: High-Low</option>
              <option value="price:low-high">Price: Low-High</option>
            </select>
          </div>
          {/* <div className="pieces__m-filters"></div> */}
          <div className="pieces__d-filters-wrapper">
            <p className="pieces__d-filters-label">All Pieces</p>

            <div className="pieces__d-filters">
              {piecesFilters.map((filters, index) => (
                <FilterSection filters={filters} key={index} />
              ))}
            </div>
          </div>
          <div className="pieces__products">
            {products.reverse().map(({ title, creator, price, images, id }) => (
              <Product
                title={title}
                creator={creator}
                price={price}
                image={images[0]}
                id={id}
                key={id}
              />
            ))}
          </div>
          <div className="pieces__pagination">
            <Pagination current={1} total={7} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pieces;
