import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import {
  FiHome,
  FiFileText,
  FiBarChart2,
  FiLogOut,
} from "react-icons/fi";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAdminAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const getNavItemClass = (isActive) => {
    const baseClass = `
      flex items-center gap-3 px-4 py-3
      text-sm font-semibold rounded-lg
      transition-all duration-200 border
      ${isCollapsed ? "justify-center" : ""}
    `;

    return isActive
      ? `${baseClass} bg-green-600 text-white border-green-500`
      : `${baseClass} text-white border-transparent hover:bg-green-500/20`;
  };

  return (
    <>
      {/* MOBILE HEADER */}
      <div
        className="fixed top-0 left-0 right-0 h-16 z-50 md:hidden flex items-center justify-between px-4 border-b border-cyan-400/30 shadow-lg"
        style={{ background: "#0156A6" }}
      >
        <img
          src="/01SLT.jpg.jpeg"
          alt="SLTMobitel"
          className="h-12 w-auto object-contain"
        />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle Sidebar"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed left-0 top-16 md:top-0
          h-[calc(100dvh-4rem)] md:h-screen
          border-r border-cyan-400/30
          shadow-xl z-50 md:z-30
          flex flex-col
          transition-all duration-300 ease-in-out
          overflow-y-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          ${isCollapsed ? "md:w-24 w-64" : "w-64"}
        `}
        style={{ background: "#0156A6" }}
      >
        {/* DESKTOP LOGO */}
        <div className="hidden md:flex items-center justify-between px-4 py-4">
          <div
            className={`transition-all duration-300 ${
              isCollapsed ? "opacity-0 w-0 overflow-hidden" : ""
            }`}
          >
            <img
              src="/01SLT.jpg.jpeg"
              alt="SLTMobitel"
              className="h-24 w-auto object-contain"
            />
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-white/10 text-white"
            aria-label="Collapse Sidebar"
          >
            <svg
              className={`w-5 h-5 transition-transform ${
                isCollapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="px-4 py-4 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => getNavItemClass(isActive)}
            onClick={() => setIsOpen(false)}
          >
            <FiHome className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink
            to="/admin/reports"
            className={({ isActive }) => getNavItemClass(isActive)}
            onClick={() => setIsOpen(false)}
          >
            <FiBarChart2 className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Reports</span>}
          </NavLink>

          <NavLink
            to="/admin/complaints"
            className={({ isActive }) => getNavItemClass(isActive)}
            onClick={() => setIsOpen(false)}
          >
            <FiFileText className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Complaints</span>}
          </NavLink>
        </nav>

        {/* PUSH LOGOUT TO BOTTOM */}
        <div className="flex-1" />

        {/* DIVIDER */}
        <div className="mx-4 border-t border-cyan-300/35" />

        {/* LOGOUT */}
        <div className="p-4">
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className={`
              w-full px-4 py-3 rounded-lg
              bg-green-600 hover:bg-green-700
              text-white text-sm font-semibold
              transition-all duration-200
              flex items-center gap-3
              ${isCollapsed ? "justify-center" : ""}
            `}
          >
            <FiLogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* MOBILE HEADER SPACER */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default AdminSidebar;