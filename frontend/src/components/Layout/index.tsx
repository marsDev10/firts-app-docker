import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaTasks } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 border-r border-gray-700 w-64 p-5 h-full flex flex-col fixed md:relative transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-64 md:translate-x-0"}`}
      >
        <h2 className="text-xl font-bold text-white mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <SidebarLink to="/home" icon={<FaHome />} text="Home" />
          <SidebarLink to="/tasks" icon={<FaTasks />} text="Tasks" />
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu size={30} />
          </button>
          <h1 className="text-lg font-semibold text-white">Welcome</h1>
        </header>

        {/* Main Content */}
        <main className="p-6 flex-grow overflow-y-auto bg-gray-800 text-white">
            <Outlet/>
        </main>
      </div>
    </div>
  );
};

// Componente reutilizable para los links del sidebar
const SidebarLink = ({ to, icon, text }: { to: string; icon: JSX.Element; text: string }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition"
    >
      {icon} <span>{text}</span>
    </Link>
  );
};

export default Layout;
