import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = (username) => {
      return fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => data);
    };

    const usernames = [
      "FatahBuriro66",
      "abdullahzeeshaan",
      "Muhammad-Abdullah786",
    ];

    Promise.all(usernames.map(fetchUser))
      .then((userData) => {
        setUsers(userData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-gray-100 overflow-hidden">
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
        {users.map((user, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 flex justify-center items-center py-12"
          >
            <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
              <img
                src={user.avatar_url}
                alt={`Person ${index + 1}`}
                className="w-full rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-700">{user.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
