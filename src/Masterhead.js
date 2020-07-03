import React from "react";

const MasterHead = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img
          className="masthead-avatar mb-5"
          src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          alt="Loading...!"
        />

        <h1 className="masthead-heading text-uppercase mb-0">
          Siva Saikumar Reddy
        </h1>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <p classNameName="masthead-subheading font-weight-light mb-0">
          App Developer - Web Designer
        </p>
      </div>
    </header>
  );
};

export default MasterHead;
