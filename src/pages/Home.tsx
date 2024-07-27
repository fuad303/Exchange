import { motion } from "framer-motion";
import assit from "../assets/images/assit.png";
import assit2 from "../assets/images/assit2.png";
import assit3 from "../assets/images/assit3.png";
import Table from "../components/Home/Table";
import Circle from "../components/Home/Circle";

const Home = () => {
  return (
    <div className="text-right mr-40 p-7 bg-[#f3f6fd]">
      <motion.h1
        animate={{ x: [15, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-mono  mb-6 text-gray-600"
      >
        داشبورد
      </motion.h1>

      {/* Upper part */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {["دالر", "کالدار", "تومان", "افغانی"].map((currency, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-md shadow"
            animate={{ opacity: [0, 1], y: [-20, 0] }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-gray-600">{currency}</span> <br />
            <span className="text-gray-900  text-xl">24,500,000.43</span>
            <span className="text-green-500 font-bold bg-[#ccf7e5] m-2 p-1 rounded-md">
              +3.5%
            </span>
          </motion.div>
        ))}
      </div>
      {/* End of upper part */}

      {/* Center */}
      <motion.div
        className="  rounded-md shadow mb-8 flex justify-between gap-3"
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-md shadow-sm  p-14">
          <div className="mt-6 mr-">
            <h3 className="text-lg font-semibold text-gray-800">
              توضیح دارایی
            </h3>
            <div>
              <Circle />
            </div>
          </div>
        </div>
        <div className="bg-white p-14 relative shadow rounded-md">
          <div className="flex gap-[5.5rem] ">
            <div className="flex items-center  p-4  ">
              <div className="mr-4">
                <span className="text-gray-900 font-medium text-lg">
                  2,000.43
                </span>
                <br />
                <span className="text-gray-600">مفاد</span>
              </div>
              <img src={assit2} alt="Assist" className="w-16 h-16" />
            </div>
            <div className="flex items-center  p-4 ">
              <div className="mr-4">
                <span className="text-gray-900 font-medium text-lg">127</span>
                <br />
                <span className="text-gray-600">حساب ها</span>
              </div>
              <img src={assit3} alt="Assist" className="w-16 h-16" />
            </div>

            <div className="flex items-center ">
              <div className="mr-4">
                <span className="text-gray-900 font-medium text-lg">
                  24,500,000.43
                </span>
                <br />
                <span className="text-gray-600">کل سرمایه</span>
              </div>
              <img src={assit} alt="Assist" className="w-16 h-16" />
            </div>
          </div>

          <h1 className="absolute top-4 right-4 text-2xl  text-gray-600">
            امار و ارقام
          </h1>
        </div>
      </motion.div>
      {/* End of center */}

      {/* Last part */}
      <motion.div
        className="bg-white p-4 rounded-md shadow mb-8"
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Table
          id={0}
          name={""}
          phone={""}
          type={""}
          currency={""}
          amount={""}
          date={""}
          by={""}
        />
      </motion.div>
      {/* End of last part */}

      {/* Footer */}
      <motion.div
        className="bg-white text-center text-gray-400 p-10 rounded-md shadow"
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{ duration: 0.5 }}
      >
        MyTeam 2024
      </motion.div>
      {/* End of footer */}
    </div>
  );
};

export default Home;
