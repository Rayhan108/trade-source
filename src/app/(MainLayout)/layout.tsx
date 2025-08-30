import FooterPage from '@/Component/shared/Footer';
import Navbar from '@/Component/shared/Navbar';

const MainLayout = ({ children }) => {
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
