import {
  BookText,
  BrickWall,
  Home,
  MessageSquareWarning,
  UserPen,
} from "lucide-react";
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <motion.div
      className="flex flex-col items-end absolute right-0 h-screen bg-white p-4 gap-8 "
      animate={{ x: [200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      {/*  */}
      <motion.div
        className="flex items-center mb-4  cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gray-400 mr-2">خانه</span>
        <span className="text-gray-400">
          <Home />
        </span>
      </motion.div>
      {/*  */}

      {/*  */}
      <motion.div
        className="flex items-center mb-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gray-400 mr-2">روزنامچه</span>
        <span className="text-gray-400">
          <BookText />
        </span>
      </motion.div>
      {/*  */}

      {/*  */}
      <motion.div
        className="flex items-center mb-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gray-400 mr-2">ثابت ها</span>
        <span className="text-gray-400">
          <BrickWall />
        </span>
      </motion.div>
      {/*  */}

      {/*  */}
      <motion.div
        className="flex items-center mb-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gray-400 mr-2">گزارشات</span>
        <span className="text-gray-400">
          <MessageSquareWarning />
        </span>
      </motion.div>
      {/*  */}

      {/*  */}
      <motion.div
        className="flex items-center mb-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gray-400 mr-2">مدیریت کاربران</span>
        <span className="text-gray-400">
          <UserPen />
        </span>
      </motion.div>
      {/*  */}
    </motion.div>
  );
};

export default SideBar;
