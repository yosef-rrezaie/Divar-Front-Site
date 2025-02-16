import React from "react";
import Header from "./header";
import Footer from "./Footer";

function Layout({children}) {
  return (
    <div className="pr-[40px] pl-[40px]">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
