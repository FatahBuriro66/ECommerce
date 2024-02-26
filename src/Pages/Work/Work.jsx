import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className=" bg-gray-100 overflow-hidden">
      <motion.div
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center items-center py-12"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-bold text-6xl text-gray-800 mb-8"
          >
            This website is designed by
          </motion.h1>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center items-center py-12"
        >
          <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Person 1"
              className="w-full rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">John Doe</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla ullamcorper lacinia.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center items-center py-12"
        >
          <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Person 2"
              className="w-full rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Jane Doe</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla ullamcorper lacinia.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center items-center py-12"
      >
        <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Person 3"
            className="w-full rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Alice Smith</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla ullamcorper lacinia.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
