import React from "react";

const Sidebar = () => {
  return (
    <aside className=" bg-gray-200 p-4 ">
      <h2 className="text-lg font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">
          <a
            href="#"
            className="text-blue-500 hover:underline hover:bg-blue-500 px-4 py-2 hover:rounded-2xl hover:text-white transition-colors duration-300"
          >
            Link 1
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="text-blue-500 hover:underline hover:bg-blue-500 px-4 py-2 hover:rounded-2xl hover:text-white transition-colors duration-300"
          >
            Link 2
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="text-blue-500 hover:underline hover:bg-blue-500 px-4 py-2 hover:rounded-2xl hover:text-white transition-colors duration-300"
          >
            Link 3
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
