import StatusBadge from "./StatusBadge";

const ProfilePage = () => {
  const name = "Seng Kimnam";
  const goal =
    "my goal of this course is to learn more about frontend architecture and how to build a good frontend application, manage state with state management, and learn more about react and vite, and dive deep with reat hook ";
  return (
    <section className="p-4 md:col-span-3">
      <h1 className=" text-gray-900">My name is {name}</h1>
      <p className="goal py-4">{goal}</p>
      <StatusBadge isAvailable={true}>
        <p className="text-blue-500">Enterpreneur</p>

        <p className="text-gray-700">Full Stack</p>
      </StatusBadge>
    </section>
  );
};

export default ProfilePage;
