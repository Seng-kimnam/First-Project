import React from "react";
import Sidebar from "./Sidebar";
import ProfilePage from "./ProfilePage";

const MainContent = () => {
  return (
    <main className="grid md:grid-cols-4 h-screen   gap-4">
      <Sidebar />
      <ProfilePage />
    </main>
  );
};

export default MainContent;
