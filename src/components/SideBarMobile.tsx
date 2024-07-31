import { useEffect, useState } from "react";
import { Home, Info, Briefcase, DollarSign, Mail, CircleX } from "lucide-react";
import { CSSTransition } from "react-transition-group";
import "./NavBar.css"; // Import the CSS file for animations

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [isSidebarOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${showSidebar ? "block" : "hidden"}`}>
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50"
        onClick={toggleSidebar}
      ></div>
      <CSSTransition
        in={showSidebar}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
        onExited={() => setShowSidebar(false)}
      >
        <div className="sidebar-transition fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
          <div className="flex items-center justify-between bg-[#0f766e] p-4 text-white">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={toggleSidebar} className="text-white">
              <CircleX />
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <li className="flex cursor-pointer items-center p-4 hover:bg-gray-200">
                <Home className="mr-3" />
                Home
              </li>
              <li className="flex cursor-pointer items-center p-4 hover:bg-gray-200">
                <Info className="mr-3" />
                About Us
              </li>
              <li className="flex cursor-pointer items-center p-4 hover:bg-gray-200">
                <Briefcase className="mr-3" />
                Services
              </li>
              <li className="flex cursor-pointer items-center p-4 hover:bg-gray-200">
                <DollarSign className="mr-3" />
                Pricing
              </li>
              <li className="flex cursor-pointer items-center p-4 hover:bg-gray-200">
                <Mail className="mr-3" />
                Contact
              </li>
            </ul>
            <div className="border-t border-gray-200 p-4">
              <button
                onClick={() => alert("Sign In clicked")}
                className="w-full rounded-lg bg-[#0f766e] px-4 py-2 text-white transition duration-200 hover:bg-[#0e6b5f]"
              >
                Sign In
              </button>
            </div>
          </nav>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Sidebar;
