import React from "react";

const AppLayout = ({ children }) => {
  return (
    <main>
      <div className="container-fluid">{children}</div>
    </main>
  );
};

export default AppLayout;
