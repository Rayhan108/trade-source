import Sidebar from "../Component/Dashboard/Sidebar/Sidebar";
import Navbar from "../Component/shared/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-4 md:gap-8 px-4 md:px-0 py-6 md:py-10">
        {/* Sidebar */}
        <aside className="w-full md:w-64 mb-4 md:mb-0 min-h-screen bg-gray-50">
          <Sidebar />
        </aside>

        {/* Main Dashboard Area */}
        <main className="flex-1 w-full ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
