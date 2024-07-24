import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../assets/images/img1.png";
import { Play } from "lucide-react";
import { useState } from "react";

const RootLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <header className="flex justify-between p-10 bg-gradient-to-r from-gray-600 to-gray-800">
        {/* The left side of the header */}
        <div className="relative">
          <motion.div
            onClick={() => setToggle((prev) => !prev)}
            className="bg-white p-2 rounded-md flex items-center cursor-pointer select-none"
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700">
              <Play className="rotate-[90deg]" />
            </p>
            <p className="text-lg text-gray-700">حمید تیموری</p>
          </motion.div>

          <motion.div
            className={`absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg p-3 transition-all duration-300 ${
              toggle ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="cursor-pointer hover:text-gray-700">تنظیمات</p>
            <p className="cursor-pointer hover:text-gray-700">خروج</p>
          </motion.div>
        </div>
        {/* End of left side of the header */}

        {/* The center of the header */}
        <motion.div
          className="font-bold text-xl font-sans text-white"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          صرافی فریبکاران
        </motion.div>
        {/* End of the center */}

        {/* The right of the header */}
        <motion.div
          className="flex items-center gap-3"
          animate={{ x: [40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="w-9 h-9 flex items-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={image1} alt="Logo" />
          </motion.div>
          <motion.div
            className="bg-white p-1 w-16 rounded-md text-right"
            animate={{ scale: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="mr-2 text-gray-700">ف</span>
            <span className="text-gray-700">102</span>
          </motion.div>
        </motion.div>
        {/* End of right side */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
