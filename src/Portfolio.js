import React from "react";

const Portfolio = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="https://image.freepik.com/free-vector/flat-design-website-development-landing-page-template_108061-179.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal2"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="https://image.freepik.com/free-vector/set-creative-website-template-design-vector-illustration_1893-1737.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal3"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="https://img.freepik.com/free-vector/online-order-concept-illustration-web-landing-page_1893-2459.jpg?size=626&ext=jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal4"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="https://image.freepik.com/free-vector/set-creative-website-template-design-vector-illustration_1893-1735.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal5"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="https://microlancer.lancerassets.com/v2/services/9b/ff72c02db911e999870f52dc4dce66/large_muncak_header2.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal6"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="https://image.freepik.com/free-vector/set-creative-website-template-design-vector-illustration_1893-1736.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
