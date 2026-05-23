import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/common/AdminSidebar";
import SessionWarningModal from "../components/common/SessionWarningModal";

const AdminLayout = () => {
  return (
    <div className="app-shell min-h-screen bg-gray-100 flex">
      
      {/* Session Warning Modal */}
      <SessionWarningModal />

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-64 transition-all duration-300 overflow-x-hidden">
        
        {/* Mobile Top Spacing */}
        <div className="h-16 md:hidden" />

        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;