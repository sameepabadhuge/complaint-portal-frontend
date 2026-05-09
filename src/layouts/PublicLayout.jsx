import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";


const PublicLayout = () => {

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />



      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-10">

        <div className="w-full max-w-5xl">

          <Outlet />

        </div>

      </main>

    </div>

  );

};

export default PublicLayout;