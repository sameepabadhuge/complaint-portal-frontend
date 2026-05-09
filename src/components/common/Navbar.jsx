import { FaShieldAlt } from "react-icons/fa";


const Navbar = () => {

  return (

    <header className="bg-white shadow-sm border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-3">

          <div className="bg-blue-600 text-white p-2 rounded-lg">

            <FaShieldAlt className="text-xl" />

          </div>

          <div>

            <h1 className="text-lg md:text-xl font-bold text-gray-800">

              SLTMobitel IAU

            </h1>

            <p className="text-sm text-gray-500">

              Secure Reporting Portal

            </p>

          </div>

        </div>



        {/* Right Side */}
        <div className="flex items-center gap-3">

          <span className="hidden md:flex bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">

            CONFIDENTIAL

          </span>

          <span className="hidden md:flex bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">

            SECURE CONNECTION

          </span>

        </div>

      </div>

    </header>

  );

};

export default Navbar;