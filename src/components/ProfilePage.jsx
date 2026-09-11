import StatusBadge from "./StatusBadge";
import ProjectsGrid from "./ProjectsGrid";

const ProfilePage = () => {
  const name = "Seng Kimnam";
  const goal =
    "My goal for this course is to learn more about frontend architecture, " +
    "build good frontend applications, manage state with a state-management library, " +
    "and dive deep into React hooks.";

  const projects = [
    {
      id: 1,
      title: "Portfolio Site",
      description: "Personal portfolio built with React + Vite + Tailwind.",
      status: "In Progress",
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "Admin panel with data tables, charts, and order management.",
      status: "Planning",
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "Markdown-based blog with SSG and dark-mode support.",
      status: "Completed",
    },
  ];

  return (
  
    <section className="md:col-span-3 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        My name is {name}
      </h1>

      <p className="text-muted-foreground leading-relaxed">{goal}</p>

      <StatusBadge isAvailable={true}>
        <p className="text-blue-600 font-medium">Entrepreneur</p>
        <p className="text-gray-700">Full Stack</p>
      </StatusBadge>

     
      <ProjectsGrid projects={projects} />
    </section>
  );
};

export default ProfilePage;
