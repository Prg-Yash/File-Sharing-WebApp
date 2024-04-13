// import React from "react";
import SideNav from "../../(dashboard)/_components/SideNav";
import TopHeader from "../../(dashboard)/_components/TopHeader";

function layout({ children }) {
  return (
    <div>
      <div className="hidden h-full md:w-64 flex-col md:flex fixed inset-y-0 z-50">
        <SideNav />
      </div>

      <div className="md:ml-64">
        <TopHeader />
        {children}
      </div>
    </div>
  );
}

export default layout;
