import React, { useState } from "react";

const Header = ({  }) => {
  const handleUser = () => {};
  return (
    <header className="d-flex justify-content-center align-items-center">
      <span className="ms-5  header-span">Home</span>
      <span className="ms-5  header-span">Contact</span>
      <span className="ms-5 header-span">Menu</span>
      <div className="btn-header">
        <i className="bi bi-person-circle" onClick={handleUser}></i>
      </div>
    </header>
  );
};

export default Header;
