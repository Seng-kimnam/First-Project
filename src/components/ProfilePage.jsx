import StatusBadge from "./StatusBadge";

const ProfilePage = () => {
  const name = "Seng Kimnam";
  const goal =
    "my goal of this course is to learn more about frontend architecture and how to build a good frontend application, manage state with state management, and learn more about react and vite, and dive deep with reat hook ";
  return (
    <div>
      <h1 className="name">My name is {name}</h1>
      <p className="goal">{goal}</p>
      <StatusBadge isAvailable={true} />
    </div>
  );
};

export default ProfilePage;
