import Navbar from '@/Component/shared/Navbar';

const WithoutFooterProject = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {children}
    </div>
  );
};

export default WithoutFooterProject;
