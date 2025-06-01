"use client";

import FooterPage from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";


const MainLayout = ({
  children,
}) => {
  return (
    <>

      <div>
        <div className="min-h-screen ">
          <Navbar />
          {children}
        </div>
        <div>
          <FooterPage />
        </div>
      </div>
  
    </>
  );
};

export default MainLayout;
