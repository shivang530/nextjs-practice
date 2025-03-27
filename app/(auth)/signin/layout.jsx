import React from "react";

//this is the layout for the signin page the content of the page will be visible only on signin route

const layout = ({ children }) => {
  return (
    <>
      <div style={{ padding: "10px", textAlign: "center" }}>20 % off</div>
      {children}
    </>
  );
};

export default layout;
