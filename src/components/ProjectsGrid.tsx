import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
 
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <section aria-label="Projects">
      <h2 className="text-lg font-semibold text-foreground mb-4">Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
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
