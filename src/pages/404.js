import React from "react";
import Layout from "../components/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <div className="error">
        <div className="error__top">
          <h2 className="error__title">Page Not Found</h2>
        </div>
        <div className="error__bottom">
          <div className="error__bottom-left">
            <p>(404)</p>
          </div>
          <div className="error__bottom-right">
            <p>
              Unfortunately, we were not able to locate the page that you are
              trying to reach.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
