import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projects }) => {
  return (
    <section aria-label="Projects">
      <h2 className="text-lg font-semibold text-foreground mb-4">Projects</h2>

      {/* Hand-written grid layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          // Each ProjectCard gets its own data via props — one-way flow ↓
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
