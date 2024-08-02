import { Home, Info, Briefcase, Mail, CircleX, MapPin } from "lucide-react";
import { CSSTransition } from "react-transition-group";
import "./NavBar.css"; // Import the CSS file for animations
import Link from "next/link";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <CSSTransition
        in={isSidebarOpen}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
      >
        <div className="fixed left-0 top-0 z-50 h-full max-h-[100lvh] w-64 bg-primary shadow-lg">
          <div className="flex items-center justify-between bg-[#0f766e] p-4 text-white">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={toggleSidebar} className="text-white">
              <CircleX />
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <li>
                <Link
                  className="flex cursor-pointer items-center justify-start p-4 hover:bg-gray-200"
                  onClick={toggleSidebar}
                  href="#home"
                >
                  <Home className="mr-3" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="flex cursor-pointer items-center justify-start p-4 hover:bg-gray-200"
                  onClick={toggleSidebar}
                  href="#aboutus"
                >
                  <Info className="mr-3" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="flex cursor-pointer items-center justify-start p-4 hover:bg-gray-200"
                  onClick={toggleSidebar}
                  href="#work"
                >
                  <Briefcase className="mr-3" />
                  Work
                </Link>
              </li>
              <li>
                <Link
                  className="flex cursor-pointer items-center justify-start p-4 hover:bg-gray-200"
                  onClick={toggleSidebar}
                  href="#location"
                >
                  <MapPin className="mr-3" />
                  Location
                </Link>
              </li>
              <li>
                <Link
                  className="flex cursor-pointer items-center justify-start p-4 hover:bg-gray-200"
                  onClick={toggleSidebar}
                  href="#contact"
                >
                  <Mail className="mr-3" />
                  Contact
                </Link>
              </li>
            </ul>
            <div className="border-t border-gray-200 p-4">
              <Link
                href="/signin"
                className="block w-full rounded-lg bg-[#0f766e] px-4 py-2 text-center text-white transition duration-200 hover:bg-[#0e6b5f]"
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      </CSSTransition>
    </>
  );
};

export default Sidebar;
