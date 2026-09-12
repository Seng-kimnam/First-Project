import Sidebar from "./Sidebar";
import ProfilePage from "./ProfilePage";
import TaskList from "./TaskList";

const MainContent = () => {
  return (
    <main className="grid md:grid-cols-4 min-h-screen gap-6 bg-background">
      <Sidebar />
      <ProfilePage />
      <TaskList />
    </main>
  );
};

export default MainContent;
