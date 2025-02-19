import React from "react";
import SideBar from "../components/templates/SideBar";
import Main from "../components/templates/Main";

function HomePage() {
  return (
    <div className="flex ">
      <SideBar />
      <Main/>
    </div>
  );
}

export default HomePage;
